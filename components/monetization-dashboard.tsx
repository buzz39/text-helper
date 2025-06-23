"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Eye, 
  MousePointer, 
  Clock,
  Target,
  BarChart3
} from "lucide-react";

interface MonetizationMetrics {
  adRevenue: {
    daily: number;
    monthly: number;
    growth: number;
  };
  userEngagement: {
    averageSessionTime: number;
    adViewRate: number;
    clickThroughRate: number;
    userSatisfactionScore: number;
  };
  adPerformance: {
    impressions: number;
    clicks: number;
    conversions: number;
    fillRate: number;
  };
  userRetention: {
    dailyActiveUsers: number;
    weeklyRetention: number;
    churnRate: number;
  };
}

export function MonetizationDashboard() {
  const [metrics, setMetrics] = useState<MonetizationMetrics>({
    adRevenue: {
      daily: 1250,
      monthly: 37500,
      growth: 15.3
    },
    userEngagement: {
      averageSessionTime: 8.5,
      adViewRate: 78.2,
      clickThroughRate: 2.4,
      userSatisfactionScore: 4.2
    },
    adPerformance: {
      impressions: 125000,
      clicks: 3000,
      conversions: 180,
      fillRate: 94.5
    },
    userRetention: {
      dailyActiveUsers: 12450,
      weeklyRetention: 68.5,
      churnRate: 3.2
    }
  });

  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Monetization Dashboard</h2>
          <p className="text-slate-600 dark:text-slate-400">Track ad performance and user experience metrics</p>
        </div>
        <div className="flex gap-2">
          {(['7d', '30d', '90d'] as const).map((range) => (
            <Button
              key={range}
              variant={timeRange === range ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeRange(range)}
            >
              {range}
            </Button>
          ))}
        </div>
      </div>

      {/* Revenue Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Daily Ad Revenue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              ${metrics.adRevenue.daily.toLocaleString()}
            </div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3 text-green-500" />
              <span className="text-sm text-green-600">+{metrics.adRevenue.growth}%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Ad Impressions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              {(metrics.adPerformance.impressions / 1000).toFixed(0)}K
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Fill Rate: {metrics.adPerformance.fillRate}%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2">
              <MousePointer className="w-4 h-4" />
              Click-Through Rate
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              {metrics.userEngagement.clickThroughRate}%
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {metrics.adPerformance.clicks.toLocaleString()} clicks
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              User Satisfaction
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              {metrics.userEngagement.userSatisfactionScore}/5.0
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Based on user feedback
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Ad Performance Metrics
            </CardTitle>
            <CardDescription>Key performance indicators for ad monetization</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Ad View Rate</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {metrics.userEngagement.adViewRate}%
                </span>
              </div>
              <Progress value={metrics.userEngagement.adViewRate} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Conversion Rate</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {((metrics.adPerformance.conversions / metrics.adPerformance.clicks) * 100).toFixed(1)}%
                </span>
              </div>
              <Progress 
                value={(metrics.adPerformance.conversions / metrics.adPerformance.clicks) * 100} 
                className="h-2" 
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Weekly Retention</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {metrics.userRetention.weeklyRetention}%
                </span>
              </div>
              <Progress value={metrics.userRetention.weeklyRetention} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              User Experience Balance
            </CardTitle>
            <CardDescription>Monitoring the balance between revenue and user satisfaction</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <div>
                <div className="font-medium text-green-800 dark:text-green-200">Excellent Balance</div>
                <div className="text-sm text-green-600 dark:text-green-400">
                  High revenue with maintained user satisfaction
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                Optimal
              </Badge>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Average Session Time</span>
                <span className="font-medium">{metrics.userEngagement.averageSessionTime} min</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Churn Rate</span>
                <span className="font-medium text-green-600">{metrics.userRetention.churnRate}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Daily Active Users</span>
                <span className="font-medium">{metrics.userRetention.dailyActiveUsers.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* A/B Testing Results */}
      <Card>
        <CardHeader>
          <CardTitle>A/B Testing Results</CardTitle>
          <CardDescription>Current experiments and their impact on key metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
              <div className="font-medium mb-2">Native Ad Placement</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Testing sidebar vs. inline placement
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Winner: Inline</span>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                  +12% CTR
                </Badge>
              </div>
            </div>
            
            <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
              <div className="font-medium mb-2">Value Exchange Timing</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Testing immediate vs. delayed offers
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Winner: Delayed</span>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                  +8% Accept Rate
                </Badge>
              </div>
            </div>
            
            <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
              <div className="font-medium mb-2">Ad Frequency Cap</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Testing 2 vs. 3 ads per session
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Winner: 2 ads</span>
                <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                  +5% Satisfaction
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}