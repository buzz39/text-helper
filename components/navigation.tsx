"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToInputBox = () => {
    const inputSection = document.querySelector('textarea[placeholder*="Type your text here"]');
    if (inputSection) {
      inputSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      // Focus the input after scrolling
      setTimeout(() => {
        (inputSection as HTMLTextAreaElement).focus();
      }, 500);
    }
  };

  const scrollToFeatures = () => {
    // Find h2 element containing "Choose Your Style" text
    const h2Elements = document.querySelectorAll('h2');
    let featuresSection = null;
    
    for (const h2 of h2Elements) {
      if (h2.textContent && h2.textContent.includes('Choose Your Style')) {
        featuresSection = h2;
        break;
      }
    }
    
    // Fallback selectors if the h2 is not found
    if (!featuresSection) {
      featuresSection = document.querySelector('[class*="Style Selection"]') ||
                      document.querySelector('div[class*="grid"][class*="gap-4"]:has(button)');
    }
    
    if (featuresSection) {
      featuresSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    } else {
      // Fallback to the main tool section
      const toolSection = document.querySelector('div[class*="max-w-4xl"]');
      if (toolSection) {
        toolSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                TextStyler
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 hidden sm:block">Professional Text Formatting</p>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={scrollToFeatures}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Features
            </button>
            <a href="#about" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#help" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              Help
            </a>
            <Link href="/privacy" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms
            </Link>
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              size="sm" 
              onClick={scrollToInputBox}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Get Started
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}