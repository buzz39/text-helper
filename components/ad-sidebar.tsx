"use client";

import { cn } from "@/lib/utils";

interface AdSidebarProps {
  slot: string;
  className?: string;
}

export function AdSidebar({ slot, className }: AdSidebarProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="bg-muted/20 border border-dashed border-muted-foreground/20 rounded-xl p-6 text-center">
        <div className="flex flex-col items-center space-y-3 text-muted-foreground">
          <div className="w-16 h-16 bg-muted-foreground/10 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-muted-foreground/20 rounded"></div>
          </div>
          <div>
            <p className="text-sm font-medium">Advertisement</p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              300x250 Sidebar Ad - {slot}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}