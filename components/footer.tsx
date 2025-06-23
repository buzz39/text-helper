import React from "react";
import { Separator } from "@/components/ui/separator";
import { Sparkles } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900 dark:text-white">TextStyler</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Professional Unicode text formatting tool for social media, LinkedIn, and business content. 
              Trusted by 50,000+ professionals worldwide.
            </p>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Product</h3>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Text Styles</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Resources</h3>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Company</h3>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-12" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-slate-600 dark:text-slate-400">
            © {currentYear} TextStyler. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-slate-600 dark:text-slate-400">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}