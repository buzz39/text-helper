"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for individuals getting started",
      features: [
        "50 text conversions/month",
        "5 basic text styles",
        "Copy to clipboard",
        "Mobile responsive",
        "Community support"
      ],
      limitations: [
        "Limited styles",
        "No API access",
        "No analytics"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "For professionals and content creators",
      features: [
        "Unlimited text conversions",
        "All 15+ text styles",
        "API access (10K calls/month)",
        "Analytics dashboard",
        "Custom style creation",
        "Priority support",
        "Team collaboration (5 users)"
      ],
      limitations: [],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For large teams and organizations",
      features: [
        "Everything in Pro",
        "Unlimited API calls",
        "Advanced analytics & reporting",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "Unlimited team members",
        "White-label options"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-16" id="pricing">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that fits your needs. All plans include our core text styling features.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                Most Popular
              </Badge>
            )}
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>
              <CardDescription className="mt-2">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
                {plan.limitations.map((limitation, limitIndex) => (
                  <li key={limitIndex} className="flex items-center gap-2 opacity-60">
                    <span className="text-red-500">✗</span>
                    <span className="text-sm">{limitation}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                {plan.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Enterprise Features */}
      <div className="mt-16 bg-muted/30 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-center mb-8">Enterprise Features</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
              <span className="text-primary text-xl">🔧</span>
            </div>
            <h4 className="font-semibold mb-2">Custom Integrations</h4>
            <p className="text-sm text-muted-foreground">Seamlessly integrate with your existing tools and workflows</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
              <span className="text-primary text-xl">📊</span>
            </div>
            <h4 className="font-semibold mb-2">Advanced Analytics</h4>
            <p className="text-sm text-muted-foreground">Deep insights into usage patterns and performance metrics</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
              <span className="text-primary text-xl">🛡️</span>
            </div>
            <h4 className="font-semibold mb-2">Enterprise Security</h4>
            <p className="text-sm text-muted-foreground">SOC 2 compliance, SSO, and advanced security features</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
              <span className="text-primary text-xl">🎨</span>
            </div>
            <h4 className="font-semibold mb-2">White Label</h4>
            <p className="text-sm text-muted-foreground">Brand the platform as your own with custom styling</p>
          </div>
        </div>
      </div>
    </section>
  );
}