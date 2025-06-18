"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
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

  const availableStyles = getAvailableStyles();

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
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">T</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Text Styler
            </h1>
          </div>
          <ThemeToggle />
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Transform Your Text
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Convert your plain text into stylized Unicode text for LinkedIn, 
              social media, and professional content.
            </p>
          </div>
          
          <div className="grid gap-8">
            {/* Style Selection */}
            <div className="bg-card border rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <label className="text-base font-semibold">🎨 Style</label>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  {getStyleDisplayName(activeStyle)}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {availableStyles.map((style) => (
                  <Button
                    key={style}
                    variant={activeStyle === style ? "default" : "outline"}
                    onClick={() => handleStyleChange(style)}
                    size="sm"
                    className="h-8 px-3 hover:scale-105 transition-transform"
                    title={getStyleDisplayName(style)}
                  >
                    <span className="text-sm font-bold">{getStylePreview(style)}</span>
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Text Input/Output */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Input */}
              <div className="bg-card border rounded-xl p-6 shadow-sm">
                <label htmlFor="input-text" className="text-lg font-semibold mb-4 block">
                  📝 Input Text
                </label>
                <textarea
                  id="input-text"
                  placeholder="Type your text here...\n\nTry writing a LinkedIn post, heading, or any text you want to style!"
                  className="w-full h-64 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-ring bg-background/50"
                  value={inputText}
                  onChange={(e) => handleInputChange(e.target.value)}
                />
              </div>
              
              {/* Output */}
              <div className="bg-card border rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-lg font-semibold">
                    ✨ Styled Output
                  </label>
                  <div className="flex gap-2">
                    <Button 
                      size="sm"
                      onClick={handleCopy}
                      disabled={!styledText}
                      className="hover:scale-105 transition-transform"
                    >
                      📋 Copy
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline" 
                      onClick={handleClear}
                      disabled={!inputText && !styledText}
                      className="hover:scale-105 transition-transform"
                    >
                      🗑️ Clear
                    </Button>
                  </div>
                </div>
                <div className="w-full h-64 p-4 border rounded-lg bg-muted/50 overflow-auto">
                  {styledText ? (
                    <div className="space-y-2">
                      <p className="whitespace-pre-wrap break-words text-lg leading-relaxed">
                        {styledText}
                      </p>
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <p className="text-xs text-muted-foreground mb-2">Preview in different contexts:</p>
                        <div className="space-y-2 text-sm">
                          <div className="p-2 bg-blue-50 dark:bg-blue-950/20 rounded border-l-4 border-blue-400">
                            <span className="text-blue-600 dark:text-blue-400 font-medium">LinkedIn: </span>
                            <span>{styledText}</span>
                          </div>
                          <div className="p-2 bg-purple-50 dark:bg-purple-950/20 rounded border-l-4 border-purple-400">
                            <span className="text-purple-600 dark:text-purple-400 font-medium">Twitter: </span>
                            <span>{styledText}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <p className="text-lg mb-2">🎨</p>
                        <p>Your styled text will appear here...</p>
                        <p className="text-sm mt-2">Start typing to see the magic!</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Tips Section */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">💡 Pro Tips</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Perfect for LinkedIn headlines and posts</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500">ℹ️</span>
                  <span>Works across all social media platforms</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-500">⚡</span>
                  <span>Instant copy-paste functionality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

