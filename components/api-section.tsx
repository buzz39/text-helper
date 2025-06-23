"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function APISection() {
  return (
    <section className="py-12" id="api">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Developer API</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Integrate our text styling capabilities into your applications with our upcoming REST API.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
          <CardHeader className="relative text-center pb-8">
            <div className="flex justify-center mb-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                🚀 Coming Soon
              </Badge>
            </div>
            <CardTitle className="text-3xl mb-4">API Access</CardTitle>
            <CardDescription className="text-lg max-w-2xl mx-auto">
              We're building a powerful REST API that will allow developers to integrate our text styling 
              capabilities directly into their applications, websites, and services.
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  🔧 Planned Features
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    RESTful API with JSON responses
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    All 15+ text styles available
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Batch processing support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Rate limiting and usage analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    SDKs for popular languages
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  📊 Expected Capabilities
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    99.9% uptime SLA
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Sub-100ms response times
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Webhook support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Comprehensive documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Developer-friendly pricing
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-xl p-6 mb-6">
              <h3 className="font-bold mb-3 text-center">Sample API Call (Preview)</h3>
              <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-600 mb-1"># Coming soon - API endpoint</div>
                <div className="text-muted-foreground">curl -X POST https://api.textstyler.com/v1/style \</div>
                <div className="text-muted-foreground ml-4">-H "Authorization: Bearer YOUR_API_KEY" \</div>
                <div className="text-muted-foreground ml-4">-d '{"text": "Hello World", "style": "bold"}'</div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Want to be notified when our API launches?
              </p>
              <Button size="lg" className="mr-4">
                Join API Waitlist
              </Button>
              <Button variant="outline" size="lg">
                Request Early Access
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}