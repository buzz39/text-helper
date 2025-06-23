"use client";

// Ad targeting and management system
export interface UserProfile {
  industry?: string;
  jobTitle?: string;
  companySize?: string;
  interests: string[];
  usagePatterns: {
    mostUsedStyles: string[];
    timeOfDay: string[];
    frequency: 'light' | 'moderate' | 'heavy';
  };
  demographics?: {
    location?: string;
    ageRange?: string;
  };
}

export interface AdPlacement {
  id: string;
  type: 'native' | 'banner' | 'interstitial' | 'value-exchange';
  position: 'hero' | 'sidebar' | 'between-content' | 'modal';
  timing: 'immediate' | 'after-action' | 'time-based' | 'usage-based';
  frequency: {
    maxPerSession: number;
    cooldownMinutes: number;
  };
  targeting: {
    userSegments: string[];
    contextualKeywords: string[];
    excludeSegments?: string[];
  };
}

export class AdManager {
  private userProfile: UserProfile;
  private sessionData: {
    adsShown: string[];
    lastAdTime: number;
    actionsCount: number;
    sessionStart: number;
  };

  constructor(userProfile: UserProfile) {
    this.userProfile = userProfile;
    this.sessionData = {
      adsShown: [],
      lastAdTime: 0,
      actionsCount: 0,
      sessionStart: Date.now()
    };
  }

  // Determine if an ad should be shown based on context and timing
  shouldShowAd(placement: AdPlacement): boolean {
    const now = Date.now();
    const timeSinceLastAd = now - this.sessionData.lastAdTime;
    const sessionDuration = now - this.sessionData.sessionStart;

    // Frequency capping
    const adsOfTypeShown = this.sessionData.adsShown.filter(id => id.startsWith(placement.type)).length;
    if (adsOfTypeShown >= placement.frequency.maxPerSession) {
      return false;
    }

    // Cooldown period
    if (timeSinceLastAd < placement.frequency.cooldownMinutes * 60 * 1000) {
      return false;
    }

    // Timing rules
    switch (placement.timing) {
      case 'immediate':
        return true;
      case 'after-action':
        return this.sessionData.actionsCount >= 3;
      case 'time-based':
        return sessionDuration > 2 * 60 * 1000; // 2 minutes
      case 'usage-based':
        return this.sessionData.actionsCount >= 5;
      default:
        return false;
    }
  }

  // Get targeted ads based on user profile and context
  getTargetedAds(context: string, placement: AdPlacement): any[] {
    const relevantAds = this.filterAdsByTargeting(placement, context);
    return this.rankAdsByRelevance(relevantAds);
  }

  private filterAdsByTargeting(placement: AdPlacement, context: string): any[] {
    // Mock ad database - in production, this would be an API call
    const availableAds = [
      {
        id: 'productivity-tool-1',
        category: 'productivity',
        title: 'Boost Your LinkedIn Engagement',
        description: 'Advanced social media scheduling tool used by 100K+ professionals',
        targetSegments: ['marketing', 'sales', 'content-creators'],
        contextualKeywords: ['linkedin', 'social', 'engagement', 'professional']
      },
      {
        id: 'design-tool-1',
        category: 'design',
        title: 'Create Stunning Graphics in Minutes',
        description: 'Professional design tool with templates for social media and marketing',
        targetSegments: ['marketing', 'design', 'small-business'],
        contextualKeywords: ['design', 'graphics', 'visual', 'creative']
      },
      {
        id: 'business-tool-1',
        category: 'business',
        title: 'Streamline Your Business Operations',
        description: 'All-in-one business management platform for growing companies',
        targetSegments: ['business-owners', 'managers', 'entrepreneurs'],
        contextualKeywords: ['business', 'management', 'productivity', 'growth']
      }
    ];

    return availableAds.filter(ad => {
      // Check user segment targeting
      const userSegmentMatch = ad.targetSegments.some(segment => 
        this.userProfile.interests.includes(segment)
      );

      // Check contextual relevance
      const contextualMatch = ad.contextualKeywords.some(keyword =>
        context.toLowerCase().includes(keyword)
      );

      return userSegmentMatch || contextualMatch;
    });
  }

  private rankAdsByRelevance(ads: any[]): any[] {
    return ads.sort((a, b) => {
      let scoreA = 0;
      let scoreB = 0;

      // Score based on user interests
      scoreA += a.targetSegments.filter((seg: string) => 
        this.userProfile.interests.includes(seg)
      ).length;
      scoreB += b.targetSegments.filter((seg: string) => 
        this.userProfile.interests.includes(seg)
      ).length;

      // Score based on usage patterns
      if (this.userProfile.usagePatterns.frequency === 'heavy') {
        if (a.category === 'productivity') scoreA += 2;
        if (b.category === 'productivity') scoreB += 2;
      }

      return scoreB - scoreA;
    });
  }

  // Track ad interaction
  trackAdShown(adId: string): void {
    this.sessionData.adsShown.push(adId);
    this.sessionData.lastAdTime = Date.now();
  }

  trackUserAction(): void {
    this.sessionData.actionsCount++;
  }

  // A/B testing framework
  getAdVariant(adId: string, variants: string[]): string {
    const userId = this.getUserId();
    const hash = this.simpleHash(userId + adId);
    return variants[hash % variants.length];
  }

  private getUserId(): string {
    // In production, this would be the actual user ID
    return localStorage.getItem('userId') || 'anonymous';
  }

  private simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }
}

// Analytics tracking
export class AdAnalytics {
  static trackAdImpression(adId: string, placement: string, context: string): void {
    // Track ad view
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ad_impression', {
        ad_id: adId,
        placement: placement,
        context: context,
        timestamp: Date.now()
      });
    }
  }

  static trackAdClick(adId: string, placement: string): void {
    // Track ad click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ad_click', {
        ad_id: adId,
        placement: placement,
        timestamp: Date.now()
      });
    }
  }

  static trackUserEngagement(action: string, value?: number): void {
    // Track user engagement metrics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'user_engagement', {
        action: action,
        value: value,
        timestamp: Date.now()
      });
    }
  }

  static trackRevenueMetrics(adId: string, revenue: number, currency: string = 'USD'): void {
    // Track ad revenue
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ad_revenue', {
        ad_id: adId,
        revenue: revenue,
        currency: currency,
        timestamp: Date.now()
      });
    }
  }
}