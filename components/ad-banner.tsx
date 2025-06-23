"use client";

import { cn } from "@/lib/utils";

interface AdBannerProps {
  slot: string;
  className?: string;
}

export function AdBanner({ slot, className }: AdBannerProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="container mx-auto px-4 lg:px-8 py-3">
        <div className="bg-muted/30 border border-dashed border-muted-foreground/20 rounded-lg p-4 text-center">
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <div className="w-4 h-4 bg-muted-foreground/20 rounded"></div>
            <span className="text-sm font-medium">Advertisement</span>
            <div className="w-4 h-4 bg-muted-foreground/20 rounded"></div>
          </div>
          <p className="text-xs text-muted-foreground/60 mt-1">
            728x90 Banner Ad Space - {slot}
          </p>
        </div>
      </div>
    </div>
  );
}