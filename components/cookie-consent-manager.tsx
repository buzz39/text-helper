"use client";

import React, { useState, useEffect } from "react";
import { CookieConsent } from "@/components/cookie-consent";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export function CookieConsentManager() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    } else {
      // Apply existing preferences
      const preferences: CookiePreferences = JSON.parse(consent);
      applyPreferences(preferences);
    }
  }, []);

  const applyPreferences = (preferences: CookiePreferences) => {
    // Apply analytics preferences
    if (preferences.analytics && typeof window !== 'undefined' && (window as any).gtag) {
      // Enable Google Analytics
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    } else if (typeof window !== 'undefined' && (window as any).gtag) {
      // Disable Google Analytics
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }

    // Apply marketing preferences
    if (preferences.marketing && typeof window !== 'undefined' && (window as any).gtag) {
      // Enable marketing/advertising
      (window as any).gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
    } else if (typeof window !== 'undefined' && (window as any).gtag) {
      // Disable marketing/advertising
      (window as any).gtag('consent', 'update', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });
    }

    // Apply preference cookies (theme, language, etc.)
    if (preferences.preferences) {
      // Enable preference storage
      localStorage.setItem('preferences-enabled', 'true');
    } else {
      // Disable preference storage
      localStorage.removeItem('preferences-enabled');
    }
  };

  const handleAccept = (preferences: CookiePreferences) => {
    applyPreferences(preferences);
    setShowConsent(false);
  };

  const handleDecline = () => {
    const declinedPreferences: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    applyPreferences(declinedPreferences);
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <CookieConsent
      onAccept={handleAccept}
      onDecline={handleDecline}
    />
  );
}