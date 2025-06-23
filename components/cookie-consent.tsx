"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Cookie, Shield, Settings } from "lucide-react";

interface CookieConsentProps {
  onAccept: (preferences: CookiePreferences) => void;
  onDecline: () => void;
}

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export function CookieConsent({ onAccept, onDecline }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    preferences: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    onAccept(allAccepted);
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    onAccept(preferences);
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    const declined = {
      necessary: true, // Can't decline necessary cookies
      analytics: false,
      marketing: false,
      preferences: false
    };
    localStorage.setItem('cookie-consent', JSON.stringify(declined));
    onDecline();
    setIsVisible(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Can't toggle necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/50 backdrop-blur-sm">
      <Card className="max-w-4xl mx-auto border-2 border-blue-200 dark:border-blue-800">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  We value your privacy
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsVisible(false)}
                  className="w-8 h-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We use cookies to enhance your experience, analyze site traffic, and for marketing purposes. 
                You can customize your preferences or accept all cookies to continue.
              </p>

              {!showDetails ? (
                <div className="flex flex-wrap gap-3">
                  <Button onClick={handleAcceptAll} className="bg-blue-600 hover:bg-blue-700">
                    Accept All Cookies
                  </Button>
                  <Button variant="outline" onClick={handleDeclineAll}>
                    Decline All
                  </Button>
                  <Button 
                    variant="ghost" 
                    onClick={() => setShowDetails(true)}
                    className="flex items-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    Customize
                  </Button>
                  <Button variant="ghost" asChild>
                    <a href="/privacy" target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </a>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">Necessary Cookies</span>
                          <Badge variant="secondary">Required</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Essential for the website to function properly. Cannot be disabled.
                        </p>
                      </div>
                      <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">Analytics Cookies</span>
                          <Badge variant="outline">Optional</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Help us understand how visitors interact with our website.
                        </p>
                      </div>
                      <button
                        onClick={() => togglePreference('analytics')}
                        className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                          preferences.analytics ? 'bg-green-500 justify-end' : 'bg-slate-300 dark:bg-slate-600 justify-start'
                        }`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">Marketing Cookies</span>
                          <Badge variant="outline">Optional</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Used to deliver relevant advertisements and track ad performance.
                        </p>
                      </div>
                      <button
                        onClick={() => togglePreference('marketing')}
                        className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                          preferences.marketing ? 'bg-green-500 justify-end' : 'bg-slate-300 dark:bg-slate-600 justify-start'
                        }`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">Preference Cookies</span>
                          <Badge variant="outline">Optional</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Remember your settings and preferences for a better experience.
                        </p>
                      </div>
                      <button
                        onClick={() => togglePreference('preferences')}
                        className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                          preferences.preferences ? 'bg-green-500 justify-end' : 'bg-slate-300 dark:bg-slate-600 justify-start'
                        }`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <Button onClick={handleAcceptSelected} className="bg-blue-600 hover:bg-blue-700">
                      Save Preferences
                    </Button>
                    <Button variant="outline" onClick={() => setShowDetails(false)}>
                      Back
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}