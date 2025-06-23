"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { 
  styleText, 
  getAvailableStyles, 
  getStyleDisplayName, 
  getStylePreview 
} from "@/lib/text-styles";
import { toast } from "sonner";
import { Copy, Sparkles, Users, TrendingUp, Zap } from "lucide-react";

export default function HomePage() {
  const [inputText, setInputText] = useState("");
  const [styledText, setStyledText] = useState("");
  const [activeStyle, setActiveStyle] = useState("bold");
  const [usageCount, setUsageCount] = useState(0);

  const availableStyles = getAvailableStyles();

  useEffect(() => {
    // Load usage count from localStorage
    const savedUsage = localStorage.getItem('textStylerUsage');
    if (savedUsage) {
      setUsageCount(parseInt(savedUsage));
    }
  }, []);

  const handleStyleChange = (style: string) => {
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

          {/* Main Tool */}
          <div className="max-w-6xl mx-auto">
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
        </div>
      </div>
      
      <Footer />
    </>
  );
}