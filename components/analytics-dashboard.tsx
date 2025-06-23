"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AnalyticsDashboard() {
  const metrics = [
    { label: "Total Conversions", value: "2.4M+", change: "+23%" },
    { label: "API Calls Today", value: "45,231", change: "+12%" },
    { label: "Active Users", value: "12,450", change: "+8%" },
    { label: "Engagement Boost", value: "3.2x", change: "+15%" }
  ];

  const topStyles = [
    { name: "Bold", usage: "34%", trend: "up" },
    { name: "Italic", usage: "28%", trend: "up" },
    { name: "Script", usage: "18%", trend: "down" },
    { name: "Monospace", usage: "12%", trend: "up" },
    { name: "Sans Bold", usage: "8%", trend: "stable" }
  ];

  return (
    <section className="py-12" id="analytics">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Real-Time Analytics Dashboard</h2>
        <p className="text-muted-foreground">
          Track your content performance and optimize for maximum engagement
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardDescription>{metric.label}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{metric.value}</span>
                <Badge variant={metric.change.startsWith('+') ? 'default' : 'secondary'}>
                  {metric.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Popular Text Styles</CardTitle>
            <CardDescription>Most used styles this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topStyles.map((style, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{style.name}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      style.trend === 'up' ? 'bg-green-100 text-green-700' :
                      style.trend === 'down' ? 'bg-red-100 text-red-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {style.trend === 'up' ? '↗' : style.trend === 'down' ? '↘' : '→'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: style.usage }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{style.usage}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Engagement Impact</CardTitle>
            <CardDescription>Performance boost by platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">LinkedIn Posts</span>
                <span className="text-green-600 font-bold">+340% engagement</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Twitter/X</span>
                <span className="text-green-600 font-bold">+250% clicks</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Instagram</span>
                <span className="text-green-600 font-bold">+180% likes</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Facebook</span>
                <span className="text-green-600 font-bold">+220% shares</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}