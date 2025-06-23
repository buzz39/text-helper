"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { AdBanner } from "@/components/ad-banner";
import { AdSidebar } from "@/components/ad-sidebar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
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
  const [isLoading, setIsLoading] = useState(false);

  const availableStyles = getAvailableStyles();

  useEffect(() => {
    // Lazy load non-critical components
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleStyleChange = (style: string) => {
    setActiveStyle(style);
    if (inputText) {
      const styled = styleText(inputText, style);
      setStyledText(styled);
    }
  };

  const handleInputChange = (text: string) => {
    setInputText(text);
    if (text) {
      const styled = styleText(text, activeStyle);
      setStyledText(styled);
    } else {
      setStyledText("");
    }
  };

  const handleCopy = async () => {
    if (styledText) {
      try {
        await navigator.clipboard.writeText(styledText);
        toast.success("Text copied to clipboard!");
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
              {/* Hero Section */}
              <header className="text-center mb-12">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent leading-tight">
                  Transform Your Text with Professional Unicode Styles
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Convert plain text into stylized Unicode formats perfect for LinkedIn posts, 
                  social media content, and professional documents. Choose from multiple formatting styles 
                  and copy instantly.
                </p>
              </header>
              
              {/* Tool Section */}
              <section className="space-y-8" aria-label="Text styling tool">
                {/* Style Selection */}
                <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Choose Your Style</h2>
                    <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                      {getStyleDisplayName(activeStyle)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {availableStyles.map((style) => (
                      <Button
                        key={style}
                        variant={activeStyle === style ? "default" : "outline"}
                        onClick={() => handleStyleChange(style)}
                        className="h-12 text-sm font-medium hover:scale-105 transition-all duration-200 group"
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
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Input Section */}
                  <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Input Text
                    </h3>
                    <textarea
                      placeholder="Type your text here...&#10;&#10;Perfect for:&#10;• LinkedIn headlines&#10;• Social media posts&#10;• Professional documents&#10;• Creative content"
                      className="w-full h-64 p-4 border-0 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-ring bg-background/50 backdrop-blur-sm text-base leading-relaxed"
                      value={inputText}
                      onChange={(e) => handleInputChange(e.target.value)}
                      aria-label="Enter text to be styled"
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
                            <p className="text-xs text-muted-foreground mb-3 font-medium">Preview in context:</p>
                            <div className="space-y-3">
                              <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-l-4 border-blue-400">
                                <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">LinkedIn: </span>
                                <span className="text-sm">{styledText}</span>
                              </div>
                              <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border-l-4 border-purple-400">
                                <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">Twitter: </span>
                                <span className="text-sm">{styledText}</span>
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
                
                {/* Features Section */}
                <section className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Text Styler?</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 mx-auto bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                        <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
                      </div>
                      <h3 className="font-semibold">Professional Results</h3>
                      <p className="text-sm text-muted-foreground">Perfect for LinkedIn headlines, professional posts, and business content</p>
                    </div>
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 mx-auto bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400 text-xl">⚡</span>
                      </div>
                      <h3 className="font-semibold">Instant Conversion</h3>
                      <p className="text-sm text-muted-foreground">Real-time text transformation with immediate copy-paste functionality</p>
                    </div>
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 mx-auto bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 dark:text-purple-400 text-xl">🎨</span>
                      </div>
                      <h3 className="font-semibold">Multiple Styles</h3>
                      <p className="text-sm text-muted-foreground">Choose from bold, italic, script, monospace, and many more formatting options</p>
                    </div>
                  </div>
                </section>
              </section>
            </main>
            
            {/* Sidebar with Ads */}
            <aside className="hidden xl:block w-80">
              <div className="sticky top-24 space-y-6">
                <AdSidebar slot="sidebar-top" />
                
                {/* Quick Tips */}
                <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6">
                  <h3 className="font-semibold mb-4">💡 Pro Tips</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">•</span>
                      <span>Use bold styles for LinkedIn headlines to increase engagement</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
                      <span>Script styles work great for creative social media posts</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5">•</span>
                      <span>Monospace is perfect for code snippets and technical content</span>
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