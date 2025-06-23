"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";

interface NativeAdProps {
  title: string;
  description: string;
  imageUrl?: string;
  ctaText: string;
  sponsor: string;
  category: "productivity" | "marketing" | "design" | "business";
  onClick: () => void;
}

export function NativeAdCard({ 
  title, 
  description, 
  imageUrl, 
  ctaText, 
  sponsor, 
  category,
  onClick 
}: NativeAdProps) {
  const categoryColors = {
    productivity: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    marketing: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    design: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    business: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
  };

  return (
    <Card className="border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <Badge variant="secondary" className="text-xs">
            Sponsored
          </Badge>
          <Badge className={`text-xs ${categoryColors[category]}`}>
            {category}
          </Badge>
        </div>
        
        {imageUrl && (
          <div className="w-full h-32 bg-slate-100 dark:bg-slate-600 rounded-lg mb-4 overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white line-clamp-2">
          {title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            by {sponsor}
          </span>
          <Button 
            size="sm" 
            onClick={onClick}
            className="flex items-center gap-2 hover:scale-105 transition-transform"
          >
            {ctaText}
            <ExternalLink className="w-3 h-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}