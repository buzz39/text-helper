"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

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
        "No priority support"
      ],
      cta: "Get Started Free",
      popular: false,
      gradient: "from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700"
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "For professionals and content creators",
      features: [
        "Unlimited text conversions",
        "All 15+ text styles",
        "Priority support",
        "Advanced analytics",
        "Custom style creation",
        "Team collaboration (5 users)",
        "Export options"
      ],
      limitations: [],
      cta: "Start Free Trial",
      popular: true,
      gradient: "from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For large teams and organizations",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Advanced integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "Custom branding",
        "Advanced security",
        "Training & onboarding"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20"
    }
  ];

  return (
    <section className="py-20" id="pricing">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-200 dark:border-blue-800">
          <Star className="w-4 h-4" />
          Simple, transparent pricing
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
          Choose Your Plan
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Start free and upgrade as you grow. All plans include our core text styling features.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative border-2 transition-all duration-300 hover:shadow-2xl ${
            plan.popular 
              ? 'border-blue-500 shadow-xl scale-105 bg-gradient-to-br ' + plan.gradient
              : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-gradient-to-br ' + plan.gradient
          }`}>
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
                Most Popular
              </Badge>
            )}
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">{plan.name}</CardTitle>
              <div className="mt-6">
                <span className="text-5xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                <span className="text-slate-600 dark:text-slate-400 ml-2">/{plan.period}</span>
              </div>
              <CardDescription className="mt-4 text-base">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full h-12 text-base font-semibold ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                    : ''
                }`}
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
      <div className="mt-20 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-12 border border-slate-200 dark:border-slate-600">
        <h3 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">Enterprise Features</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-blue-600 dark:text-blue-400 text-2xl">🔧</span>
            </div>
            <h4 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">Custom Integrations</h4>
            <p className="text-slate-600 dark:text-slate-400">Seamlessly integrate with your existing tools and workflows</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-green-600 dark:text-green-400 text-2xl">📊</span>
            </div>
            <h4 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">Advanced Analytics</h4>
            <p className="text-slate-600 dark:text-slate-400">Deep insights into usage patterns and performance metrics</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-purple-600 dark:text-purple-400 text-2xl">🛡️</span>
            </div>
            <h4 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">Enterprise Security</h4>
            <p className="text-slate-600 dark:text-slate-400">SOC 2 compliance, SSO, and advanced security features</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-orange-600 dark:text-orange-400 text-2xl">🎨</span>
            </div>
            <h4 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">White Label</h4>
            <p className="text-slate-600 dark:text-slate-400">Brand the platform as your own with custom styling</p>
          </div>
        </div>
      </div>
    </section>
  );
}