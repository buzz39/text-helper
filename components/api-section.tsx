/** @jsx React.createElement */
"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function APISection() {
  return (
    <section className="py-12" id="api">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Developer-First API</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Integrate our text styling capabilities into your applications with our robust REST API. 
          Built for scale with 99.9% uptime SLA.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🚀 Quick Start
              <Badge variant="secondary">RESTful</Badge>
            </CardTitle>
            <CardDescription>Get started in minutes with our simple API</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-600"># Install our SDK</div>
              <div>npm install @textstyler/sdk</div>
              <br />
              <div className="text-green-600"># Make your first API call</div>
              <div>curl -X POST https://api.textstyler.com/v1/style \</div>
              <div className="ml-4">-H "Authorization: Bearer YOUR_API_KEY" \</div>
              <div className="ml-4">-d '{"text": "Hello World", "style": "bold"}'</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📊 API Stats
              <Badge>Live</Badge>
            </CardTitle>
            <CardDescription>Real-time API performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Response Time</span>
                <span className="font-bold text-green-600">45ms avg</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Uptime</span>
                <span className="font-bold text-green-600">99.98%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Daily API Calls</span>
                <span className="font-bold">2.4M+</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Rate Limit</span>
                <span className="font-bold">1000/min</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-3">🔧 SDKs & Libraries</h3>
            <ul className="space-y-2 text-sm">
              <li>• JavaScript/TypeScript</li>
              <li>• Python</li>
              <li>• PHP</li>
              <li>• Ruby</li>
              <li>• Go</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">🛡️ Enterprise Features</h3>
            <ul className="space-y-2 text-sm">
              <li>• Webhook support</li>
              <li>• Batch processing</li>
              <li>• Custom rate limits</li>
              <li>• Dedicated endpoints</li>
              <li>• SLA guarantees</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">📚 Resources</h3>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                📖 API Documentation
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                🧪 Interactive Playground
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                💬 Developer Discord
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}