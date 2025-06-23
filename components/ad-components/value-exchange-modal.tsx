"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Clock, Zap } from "lucide-react";

interface ValueExchangeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  onDecline: () => void;
  reward: {
    type: "conversions" | "styles" | "features";
    amount: number;
    description: string;
  };
}

export function ValueExchangeModal({ 
  isOpen, 
  onClose, 
  onAccept, 
  onDecline, 
  reward 
}: ValueExchangeModalProps) {
  const [timeLeft, setTimeLeft] = useState(30);

  React.useEffect(() => {
    if (!isOpen) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onDecline();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, onDecline]);

  const rewardIcons = {
    conversions: <Zap className="w-6 h-6" />,
    styles: <Gift className="w-6 h-6" />,
    features: <Gift className="w-6 h-6" />
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white">
              {rewardIcons[reward.type]}
            </div>
            Unlock Free Bonus!
          </DialogTitle>
          <DialogDescription>
            Watch a short 30-second ad to unlock additional features and support our free platform.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              +{reward.amount}
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              {reward.description}
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-slate-500" />
            <span className="text-sm text-slate-500">
              Ad duration: ~30 seconds
            </span>
          </div>
          
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={onDecline}
              className="flex-1"
            >
              No Thanks ({timeLeft}s)
            </Button>
            <Button 
              onClick={onAccept}
              className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
            >
              Watch Ad & Unlock
            </Button>
          </div>
          
          <p className="text-xs text-slate-500 text-center">
            Ads help us keep TextStyler free for everyone. Thank you for your support!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}