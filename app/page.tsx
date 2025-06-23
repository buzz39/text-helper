"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { NativeAdCard } from "@/components/ad-components/native-ad-card";
import { ContextualBanner } from "@/components/ad-components/contextual-banner";
import { ValueExchangeModal } from "@/components/ad-components/value-exchange-modal";
import { MonetizationDashboard } from "@/components/monetization-dashboard";
import { 
  styleText, 
  getAvailableStyles, 
  getStyleDisplayName, 
  getStylePreview 
} from "@/lib/text-styles";
import { AdManager, AdAnalytics, UserProfile } from "@/lib/ad-manager";
import { toast } from "sonner";
import { Copy, Sparkles, Users, TrendingUp, Zap, Gift } from "lucide-react";

export default function HomePage() {
  const [inputText, setInputText] = useState("");
  const [styledText, setStyledText] = useState("");
  const [activeStyle, setActiveStyle] = useState("bold");
  const [usageCount, setUsageCount] = useState(0);
  const [showValueExchange, setShowValueExchange] = useState(false);
  const [showContextualAd, setShowContextualAd] = useState(false);
  const [adManager, setAdManager] = useState<AdManager | null>(null);

  const availableStyles = getAvailableStyles();
  const freeLimit = 25; // Reduced to encourage ad engagement

  useEffect(() => {
    // Initialize ad manager with user profile
    const userProfile: UserProfile = {
      interests: ["professional", "linkedin", "marketing"],
      usagePatterns: {
        mostUsedStyles: ["bold", "italic"],
        timeOfDay: ["morning", "afternoon"],
        frequency: "moderate"
      }
    };
    
    setAdManager(new AdManager(userProfile));

    // Load usage count from localStorage
    const savedUsage = localStorage.getItem('textStylerUsage');
    if (savedUsage) {
      setUsageCount(parseInt(savedUsage));
    }

    // Show contextual ad after 2 minutes of usage
    const timer = setTimeout(() => {
      setShowContextualAd(true);
    }, 120000);

    return () => clearTimeout(timer);
  }, []);

  const handleStyleChange = (style: string) => {
    if (usageCount >= freeLimit) {
      setShowValueExchange(true);
      return;
    }
    
    setActiveStyle(style);
    if (inputText) {
      const styled = styleText(inputText, style);
      setStyledText(styled);
      incrementUsage();
    }
  };

  const handleInputChange = (text: string) => {
    if (usageCount >= freeLimit && text.length > inputText.length) {
      setShowValueExchange(true);
      return;
    }

    setInputText(text);
    if (text) {
      const styled = styleText(text, activeStyle);
      setStyledText(styled);
      incrementUsage();
    } else {
      setStyledText("");
    }
  };

  const incrementUsage = () => {
    const newCount = usageCount + 1;
    setUsageCount(newCount);
    localStorage.setItem('textStylerUsage', newCount.toString());
    
    // Track user action for ad targeting
    adManager?.trackUserAction();
    AdAnalytics.trackUserEngagement('text_conversion', 1);
  };

  const handleCopy = async () => {
    if (styledText) {
      try {
        await navigator.clipboard.writeText(styledText);
        toast.success("Text copied to clipboard!");
        
        // Track analytics
        AdAnalytics.trackUserEngagement('text_copied', 1);
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'text_copied', {
            event_category: 'engagement',
            event_label: activeStyle
          });
        }

        // Show contextual ad after successful copy (25% chance)
        if (Math.random() < 0.25 && usageCount > 5) {
          setTimeout(() => setShowContextualAd(true), 1000);
        }
      } catch (err) {
        toast.error("Failed to copy text");
      }
    }
  };

  const handleClear = () => {
    setInputText("");
    setStyledText("");
  };

  const handleValueExchangeAccept = () => {
    // Simulate watching ad
    setShowValueExchange(false);
    const bonusConversions = 10;
    const newLimit = freeLimit + bonusConversions;
    localStorage.setItem('textStylerFreeLimit', newLimit.toString());
    
    toast.success(`🎉 You've unlocked ${bonusConversions} additional conversions!`);
    AdAnalytics.trackAdClick('value-exchange-modal', 'modal');
    AdAnalytics.trackRevenueMetrics('value-exchange-modal', 0.50);
  };

  const handleNativeAdClick = (adId: string) => {
    AdAnalytics.trackAdClick(adId, 'native-card');
    AdAnalytics.trackRevenueMetrics(adId, 1.25);
    // Open ad destination
    window.open('https://example-advertiser.com', '_blank');
  };

  const handleContextualAdClick = () => {
    AdAnalytics.trackAdClick('contextual-banner', 'banner');
    AdAnalytics.trackRevenueMetrics('contextual-banner', 0.75);
    setShowContextualAd(false);
    window.open('https://example-productivity-tool.com', '_blank');
  };

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-200 dark:border-blue-800">
              <Sparkles className="w-4 h-4" />
              Trusted by 50,000+ professionals worldwide
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent leading-tight">
              Professional Text Styling
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Transform your content with beautiful Unicode text styles. Perfect for LinkedIn posts, 
              social media, and professional communications that stand out.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl mb-4">
                  <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">50K+</div>
                <div className="text-slate-600 dark:text-slate-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">340%</div>
                <div className="text-slate-600 dark:text-slate-400">Engagement Boost</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl mb-4">
                  <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">2.4M+</div>
                <div className="text-slate-600 dark:text-slate-400">Texts Styled</div>
              </div>
            </div>
          </div>

          {/* Contextual Banner Ad */}
          {showContextualAd && (
            <div className="max-w-4xl mx-auto mb-8">
              <ContextualBanner
                title="Boost Your Productivity Even Further"
                description="Users who style their text see 340% more engagement. Take your professional communication to the next level with advanced scheduling and analytics."
                ctaText="Try Free for 14 Days"
                onClick={handleContextualAdClick}
                onClose={() => setShowContextualAd(false)}
              />
            </div>
          )}

          {/* Main Content with Sidebar */}
          <div className="flex gap-8">
            {/* Main Tool */}
            <div className="flex-1 max-w-4xl">
              {/* Usage Meter */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Gift className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    <span className="font-semibold text-amber-800 dark:text-amber-200">
                      Free Plan Usage
                    </span>
                  </div>
                  <span className="text-sm text-amber-600 dark:text-amber-300 font-medium">
                    {usageCount}/{freeLimit} conversions
                  </span>
                </div>
                <div className="w-full bg-amber-200 dark:bg-amber-900 rounded-full h-3 mb-4">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-orange-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((usageCount / freeLimit) * 100, 100)}%` }}
                  ></div>
                </div>
                {usageCount >= freeLimit ? (
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      You've reached your free limit! Watch a short ad to unlock more conversions.
                    </p>
                    <Button 
                      size="sm" 
                      onClick={() => setShowValueExchange(true)}
                      className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                    >
                      Unlock More
                    </Button>
                  </div>
                ) : (
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    {freeLimit - usageCount} conversions remaining. Watch ads to unlock more!
                  </p>
                )}
              </div>

              {/* Style Selection */}
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-xl mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Choose Your Style</h2>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full font-medium">
                      {getStyleDisplayName(activeStyle)}
                    </span>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full font-medium">
                      FREE
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {availableStyles.map((style) => (
                    <Button
                      key={style}
                      variant={activeStyle === style ? "default" : "outline"}
                      onClick={() => handleStyleChange(style)}
                      className={`h-16 text-lg font-medium hover:scale-105 transition-all duration-200 group ${
                        activeStyle === style ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                      }`}
                      title={getStyleDisplayName(style)}
                    >
                      <span className="group-hover:scale-110 transition-transform">
                        {getStylePreview(style)}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Text Input/Output */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-xl">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    Input Text
                  </h3>
                  <textarea
                    placeholder="Type your text here...&#10;&#10;Perfect for:&#10;• LinkedIn headlines&#10;• Social media posts&#10;• Professional documents&#10;• Marketing content"
                    className="w-full h-80 p-6 border-0 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 dark:bg-slate-700 text-base leading-relaxed text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                    value={inputText}
                    onChange={(e) => handleInputChange(e.target.value)}
                    aria-label="Enter text to be styled"
                  />
                </div>
                
                {/* Output Section */}
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      Styled Output
                    </h3>
                    <div className="flex gap-3">
                      <Button 
                        size="sm"
                        onClick={handleCopy}
                        disabled={!styledText}
                        className="hover:scale-105 transition-transform flex items-center gap-2"
                        aria-label="Copy styled text to clipboard"
                      >
                        <Copy className="w-4 h-4" />
                        Copy
                      </Button>
                      <Button 
                        size="sm"
                        variant="outline" 
                        onClick={handleClear}
                        disabled={!inputText && !styledText}
                        className="hover:scale-105 transition-transform"
                        aria-label="Clear all text"
                      >
                        Clear
                      </Button>
                    </div>
                  </div>
                  
                  <div className="w-full h-80 p-6 border rounded-2xl bg-slate-50 dark:bg-slate-700 overflow-auto">
                    {styledText ? (
                      <div className="space-y-6">
                        <p className="whitespace-pre-wrap break-words text-xl leading-relaxed font-medium text-slate-900 dark:text-white">
                          {styledText}
                        </p>
                        <div className="pt-6 border-t border-slate-200 dark:border-slate-600">
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 font-semibold">Platform Preview:</p>
                          <div className="space-y-4">
                            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border-l-4 border-blue-400">
                              <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">LinkedIn: </span>
                              <span className="text-sm text-slate-700 dark:text-slate-300">{styledText}</span>
                              <div className="text-xs text-blue-500 mt-2 font-medium">+340% engagement boost</div>
                            </div>
                            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-xl border-l-4 border-purple-400">
                              <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">Twitter: </span>
                              <span className="text-sm text-slate-700 dark:text-slate-300">{styledText}</span>
                              <div className="text-xs text-purple-500 mt-2 font-medium">+250% click-through rate</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <div className="text-center text-slate-500 dark:text-slate-400">
                          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
                            <Sparkles className="w-8 h-8 text-blue-500" />
                          </div>
                          <p className="font-semibold mb-2 text-lg">Your styled text will appear here</p>
                          <p className="text-sm">Start typing to see the magic happen!</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar with Native Ads */}
            <aside className="hidden xl:block w-80">
              <div className="sticky top-24 space-y-6">
                {/* Native Ad 1 - Productivity Tool */}
                <NativeAdCard
                  title="Boost Your LinkedIn Engagement"
                  description="Advanced social media scheduling tool used by 100K+ professionals. Schedule posts, track engagement, and grow your network."
                  ctaText="Try Free"
                  sponsor="SocialBoost Pro"
                  category="productivity"
                  onClick={() => handleNativeAdClick('productivity-tool-1')}
                />

                {/* Success Stories */}
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    💼 Success Stories
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div className="border-l-4 border-green-400 pl-3">
                      <p className="font-medium">"Increased LinkedIn engagement by 340%"</p>
                      <p className="text-slate-600 dark:text-slate-400">- Sarah K., Marketing Director</p>
                    </div>
                    <div className="border-l-4 border-blue-400 pl-3">
                      <p className="font-medium">"Our team's posts now stand out in feeds"</p>
                      <p className="text-slate-600 dark:text-slate-400">- TechCorp Team</p>
                    </div>
                  </div>
                </div>

                {/* Native Ad 2 - Design Tool */}
                <NativeAdCard
                  title="Create Stunning Graphics in Minutes"
                  description="Professional design tool with templates for social media and marketing. Perfect complement to your styled text."
                  ctaText="Start Designing"
                  sponsor="DesignPro"
                  category="design"
                  onClick={() => handleNativeAdClick('design-tool-1')}
                />

                {/* Tips Section */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    💡 Pro Tips
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Use bold text for headlines and key points</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Italic text works great for quotes and emphasis</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Monospace is perfect for data and metrics</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Value Exchange Modal */}
      <ValueExchangeModal
        isOpen={showValueExchange}
        onClose={() => setShowValueExchange(false)}
        onAccept={handleValueExchangeAccept}
        onDecline={() => setShowValueExchange(false)}
        reward={{
          type: "conversions",
          amount: 10,
          description: "Additional text conversions"
        }}
      />
      
      <Footer />
    </>
  );
}