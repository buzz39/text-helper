/** @jsx React.createElement */
"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { AdBanner } from "@/components/ad-banner";
import { AdSidebar } from "@/components/ad-sidebar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PricingSection } from "@/components/pricing-section";
import { AnalyticsDashboard } from "@/components/analytics-dashboard";
import { APISection } from "@/components/api-section";
import { 
  styleText, 
  getAvailableStyles, 
  getStyleDisplayName, 
  getStylePreview 
} from "@/lib/text-styles";
import { toast } from "sonner";

export default function HomePage() {
  const [inputText, setInputText] = useState("");
  const [styledText, setStyledText] = useState("");
  const [activeStyle, setActiveStyle] = useState("bold");
  const [usageCount, setUsageCount] = useState(0);
  const [isProUser, setIsProUser] = useState(false);

  const availableStyles = getAvailableStyles();
  const freeLimit = 50;

  useEffect(() => {
    // Load usage count from localStorage
    const savedUsage = localStorage.getItem('textStylerUsage');
    if (savedUsage) {
      setUsageCount(parseInt(savedUsage));
    }
  }, []);

  const handleStyleChange = (style: string) => {
    if (!isProUser && usageCount >= freeLimit) {
      toast.error("Free limit reached! Upgrade to Pro for unlimited styling.");
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
    setInputText(text);
    if (text) {
      if (!isProUser && usageCount >= freeLimit) {
        toast.error("Free limit reached! Upgrade to Pro for unlimited styling.");
        return;
      }
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
  };

  const handleCopy = async () => {
    if (styledText) {
      try {
        await navigator.clipboard.writeText(styledText);
        toast.success("Text copied to clipboard!");
        
        // Track analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'text_copied', {
            event_category: 'engagement',
            event_label: activeStyle
          });
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

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
        {/* Above-the-fold Ad Banner */}
        <AdBanner 
          slot="header-banner" 
          className="sticky top-16 z-40 border-b bg-background/95 backdrop-blur-sm"
        />
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-8 py-8">
            {/* Main Content */}
            <main className="flex-1 max-w-4xl">
              {/* Hero Section with Value Proposition */}
              <header className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  🚀 Trusted by 50,000+ professionals
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent leading-tight">
                  Transform Your Professional Content with AI-Powered Text Styling
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                  Join thousands of professionals using our platform to create engaging LinkedIn posts, 
                  social media content, and marketing materials that drive 3x more engagement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" className="px-8 py-3 text-lg">
                    Start Free Trial
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                    View API Docs
                  </Button>
                </div>
              </header>

              {/* Usage Meter for Free Users */}
              {!isProUser && (
                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-amber-800 dark:text-amber-200">
                      Free Plan Usage
                    </span>
                    <span className="text-sm text-amber-600 dark:text-amber-300">
                      {usageCount}/{freeLimit} conversions
                    </span>
                  </div>
                  <div className="w-full bg-amber-200 dark:bg-amber-900 rounded-full h-2">
                    <div 
                      className="bg-amber-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((usageCount / freeLimit) * 100, 100)}%` }}
                    ></div>
                  </div>
                  {usageCount >= freeLimit && (
                    <p className="text-sm text-amber-700 dark:text-amber-300 mt-2">
                      Upgrade to Pro for unlimited conversions and advanced features!
                    </p>
                  )}
                </div>
              )}
              
              {/* Tool Section */}
              <section className="space-y-8" aria-label="Text styling tool">
                {/* Style Selection */}
                <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Choose Your Style</h2>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        {getStyleDisplayName(activeStyle)}
                      </span>
                      {!isProUser && (
                        <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 py-1 rounded">
                          FREE
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {availableStyles.map((style, index) => {
                      const isLocked = !isProUser && index > 4; // First 5 styles free
                      return (
                        <Button
                          key={style}
                          variant={activeStyle === style ? "default" : "outline"}
                          onClick={() => !isLocked && handleStyleChange(style)}
                          disabled={isLocked}
                          className={`h-12 text-sm font-medium hover:scale-105 transition-all duration-200 group relative ${
                            isLocked ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          title={isLocked ? 'Upgrade to Pro to unlock' : getStyleDisplayName(style)}
                        >
                          <span className="group-hover:scale-110 transition-transform">
                            {getStylePreview(style)}
                          </span>
                          {isLocked && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">🔒</span>
                            </span>
                          )}
                        </Button>
                      );
                    })}
                  </div>
                </div>
                
                {/* Text Input/Output */}
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Input Section */}
                  <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Input Text
                    </h3>
                    <textarea
                      placeholder="Type your text here...&#10;&#10;Perfect for:&#10;• LinkedIn headlines&#10;• Social media posts&#10;• Professional documents&#10;• Marketing content"
                      className="w-full h-64 p-4 border-0 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-ring bg-background/50 backdrop-blur-sm text-base leading-relaxed"
                      value={inputText}
                      onChange={(e) => handleInputChange(e.target.value)}
                      aria-label="Enter text to be styled"
                      disabled={!isProUser && usageCount >= freeLimit}
                    />
                  </div>
                  
                  {/* Output Section */}
                  <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Styled Output
                      </h3>
                      <div className="flex gap-2">
                        <Button 
                          size="sm"
                          onClick={handleCopy}
                          disabled={!styledText}
                          className="hover:scale-105 transition-transform"
                          aria-label="Copy styled text to clipboard"
                        >
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
                    <div className="w-full h-64 p-4 border rounded-xl bg-muted/30 overflow-auto">
                      {styledText ? (
                        <div className="space-y-4">
                          <p className="whitespace-pre-wrap break-words text-lg leading-relaxed font-medium">
                            {styledText}
                          </p>
                          <div className="pt-4 border-t border-border/30">
                            <p className="text-xs text-muted-foreground mb-3 font-medium">Engagement Preview:</p>
                            <div className="space-y-3">
                              <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-l-4 border-blue-400">
                                <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">LinkedIn: </span>
                                <span className="text-sm">{styledText}</span>
                                <div className="text-xs text-blue-500 mt-1">+3x engagement boost</div>
                              </div>
                              <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border-l-4 border-purple-400">
                                <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">Twitter: </span>
                                <span className="text-sm">{styledText}</span>
                                <div className="text-xs text-purple-500 mt-1">+2.5x click-through rate</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="h-full flex items-center justify-center">
                          <div className="text-center text-muted-foreground">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                              <span className="text-2xl">✨</span>
                            </div>
                            <p className="font-medium mb-2">Your styled text will appear here</p>
                            <p className="text-sm">Start typing to see the transformation!</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>

              {/* Analytics Dashboard Preview */}
              <AnalyticsDashboard />

              {/* API Integration Section */}
              <APISection />

              {/* Pricing Section */}
              <PricingSection />
            </main>
            
            {/* Sidebar with Ads and Pro Features */}
            <aside className="hidden xl:block w-80">
              <div className="sticky top-24 space-y-6">
                <AdSidebar slot="sidebar-top" />
                
                {/* Pro Features Highlight */}
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border rounded-2xl p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    ⚡ Pro Features
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Unlimited text conversions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>API access (10,000 calls/month)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Advanced analytics dashboard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Custom style creation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Team collaboration tools</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="sm">
                    Upgrade to Pro - $29/month
                  </Button>
                </div>
                
                {/* Success Stories */}
                <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6">
                  <h3 className="font-semibold mb-4">💼 Success Stories</h3>
                  <div className="space-y-4 text-sm">
                    <div className="border-l-4 border-green-400 pl-3">
                      <p className="font-medium">"Increased LinkedIn engagement by 340%"</p>
                      <p className="text-muted-foreground">- Sarah K., Marketing Director</p>
                    </div>
                    <div className="border-l-4 border-blue-400 pl-3">
                      <p className="font-medium">"Our API integration processes 1M+ texts daily"</p>
                      <p className="text-muted-foreground">- TechCorp Engineering</p>
                    </div>
                  </div>
                </div>
                
                <AdSidebar slot="sidebar-bottom" />
              </div>
            </aside>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}