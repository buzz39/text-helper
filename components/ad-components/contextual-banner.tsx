"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Sparkles } from "lucide-react";

interface ContextualBannerProps {
  title: string;
  description: string;
  ctaText: string;
  backgroundColor?: string;
  textColor?: string;
  onClose?: () => void;
  onClick: () => void;
  dismissible?: boolean;
}

export function ContextualBanner({
  title,
  description,
  ctaText,
  backgroundColor = "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20",
  textColor = "text-slate-900 dark:text-white",
  onClose,
  onClick,
  dismissible = true
}: ContextualBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <div className={`${backgroundColor} border border-slate-200 dark:border-slate-700 rounded-2xl p-6 relative`}>
      {dismissible && (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClose}
          className="absolute top-2 right-2 w-8 h-8 p-0 hover:bg-slate-200 dark:hover:bg-slate-600"
        >
          <X className="w-4 h-4" />
        </Button>
      )}
      
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className={`font-semibold text-lg mb-2 ${textColor}`}>
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            {description}
          </p>
          <Button 
            onClick={onClick}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            {ctaText}
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-2 right-4">
        <span className="text-xs text-slate-400">Sponsored</span>
      </div>
    </div>
  );
}