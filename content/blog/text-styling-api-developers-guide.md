---
title: "Text Styling API for Developers: Complete Integration Guide 2025"
meta_description: "Learn how to integrate Unicode text styling APIs into your applications. Complete developer guide with code examples, best practices, and performance optimization."
slug: "text-styling-api-developers-guide"
date: "2025-01-19"
author: "Alex Chen"
category: "Developer Resources"
tags: ["text styling api", "unicode api", "developer tools", "api integration", "text formatting", "software development"]
featured_image: "/blog/text-styling-api-guide-hero.jpg"
featured_image_alt: "Developer integrating text styling API with code examples and documentation"
schema_type: "TechnicalArticle"
reading_time: "18 min read"
---

# Text Styling API for Developers: Complete Integration Guide 2025

As Unicode text styling becomes essential for modern applications, developers need robust, scalable APIs to handle text transformation efficiently. This comprehensive guide covers everything you need to know about integrating **text styling APIs** into your applications, from basic implementation to advanced optimization techniques.

## Table of Contents

1. [Introduction to Text Styling APIs](#introduction-to-text-styling-apis)
2. [API Architecture and Design](#api-architecture-and-design)
3. [Authentication and Security](#authentication-and-security)
4. [Core API Endpoints](#core-api-endpoints)
5. [SDK and Library Integration](#sdk-and-library-integration)
6. [Code Examples by Language](#code-examples-by-language)
7. [Performance Optimization](#performance-optimization)
8. [Error Handling and Debugging](#error-handling-and-debugging)
9. [Rate Limiting and Scaling](#rate-limiting-and-scaling)
10. [Testing and Quality Assurance](#testing-and-quality-assurance)
11. [Production Deployment](#production-deployment)
12. [Monitoring and Analytics](#monitoring-and-analytics)

## Introduction to Text Styling APIs

### Why Text Styling APIs Matter

**Scalability**: Processing Unicode transformations server-side ensures consistent performance across all client devices.

**Consistency**: Centralized styling logic guarantees uniform output across different platforms and applications.

**Maintenance**: API-based solutions allow for easy updates and new style additions without client-side changes.

**Performance**: Optimized server-side processing often outperforms client-side transformation, especially for bulk operations.

### Market Demand and Usage Statistics

**API Usage Growth**:
- **340% increase** in text styling API calls in 2024
- **2.4M+ daily requests** processed by leading providers
- **89% of SaaS platforms** now integrate text styling capabilities
- **45ms average response time** for optimized implementations

**Industry Adoption**:
- **Social media platforms**: 95% use text styling APIs
- **Email marketing tools**: 87% integration rate
- **Content management systems**: 76% adoption
- **Mobile applications**: 68% implementation rate

### API Benefits for Developers

**Rapid Development**:
- Pre-built styling algorithms
- Comprehensive documentation
- Multiple SDK options
- Ready-to-use code examples

**Reliability**:
- 99.9% uptime SLA
- Automatic failover systems
- Global CDN distribution
- Real-time monitoring

**Flexibility**:
- Multiple output formats
- Custom style creation
- Batch processing capabilities
- Webhook integrations

## API Architecture and Design

### RESTful API Design

**Base URL Structure**:
```
https://api.textstyler.com/v1/
```

**Resource Organization**:
```
/styles          - Available text styles
/transform       - Text transformation
/batch           - Bulk operations
/custom          - Custom style management
/analytics       - Usage statistics
```

**HTTP Methods**:
- `GET` - Retrieve styles and configurations
- `POST` - Transform text and create resources
- `PUT` - Update custom styles
- `DELETE` - Remove custom styles
- `PATCH` - Partial updates

### API Versioning Strategy

**URL Versioning**:
```
https://api.textstyler.com/v1/transform
https://api.textstyler.com/v2/transform
```

**Header Versioning** (Alternative):
```http
Accept: application/vnd.textstyler.v1+json
```

**Backward Compatibility**:
- Minimum 12-month support for deprecated versions
- Clear migration guides for version updates
- Gradual feature deprecation with advance notice

### Response Format Standards

**Success Response**:
```json
{
  "success": true,
  "data": {
    "styled_text": "𝐇𝐞𝐥𝐥𝐨 𝐖𝐨𝐫𝐥𝐝",
    "original_text": "Hello World",
    "style": "bold",
    "character_count": 11,
    "processing_time_ms": 12
  },
  "meta": {
    "api_version": "1.0",
    "request_id": "req_1234567890",
    "timestamp": "2025-01-19T10:30:00Z"
  }
}
```

**Error Response**:
```json
{
  "success": false,
  "error": {
    "code": "INVALID_STYLE",
    "message": "The specified style 'invalid_style' is not supported",
    "details": {
      "supported_styles": ["bold", "italic", "script", "monospace"],
      "provided_style": "invalid_style"
    }
  },
  "meta": {
    "api_version": "1.0",
    "request_id": "req_1234567890",
    "timestamp": "2025-01-19T10:30:00Z"
  }
}
```

## Authentication and Security

### API Key Authentication

**Header-Based Authentication**:
```http
Authorization: Bearer sk_live_1234567890abcdef
```

**Query Parameter Authentication** (Not recommended for production):
```
https://api.textstyler.com/v1/transform?api_key=sk_live_1234567890abcdef
```

### API Key Management

**Key Types**:
- **Live keys**: `sk_live_*` for production use
- **Test keys**: `sk_test_*` for development and testing
- **Restricted keys**: Limited scope for specific operations

**Key Rotation**:
```bash
# Generate new API key
curl -X POST https://api.textstyler.com/v1/keys \
  -H "Authorization: Bearer sk_live_current_key" \
  -d '{"name": "Production Key 2025", "permissions": ["transform", "batch"]}'

# Revoke old key
curl -X DELETE https://api.textstyler.com/v1/keys/sk_live_old_key \
  -H "Authorization: Bearer sk_live_current_key"
```

### Security Best Practices

**Environment Variables**:
```bash
# .env file
TEXTSTYLER_API_KEY=sk_live_1234567890abcdef
TEXTSTYLER_API_URL=https://api.textstyler.com/v1
```

**Key Storage**:
```javascript
// ❌ Never do this
const apiKey = 'sk_live_1234567890abcdef';

// ✅ Use environment variables
const apiKey = process.env.TEXTSTYLER_API_KEY;
```

**Request Signing** (Enterprise):
```javascript
const crypto = require('crypto');

function signRequest(payload, secret) {
  return crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
}

const signature = signRequest(JSON.stringify(requestBody), apiSecret);
```

### Rate Limiting and Quotas

**Rate Limit Headers**:
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1642694400
X-RateLimit-Window: 3600
```

**Quota Management**:
```json
{
  "quota": {
    "monthly_limit": 100000,
    "monthly_used": 45230,
    "monthly_remaining": 54770,
    "reset_date": "2025-02-01T00:00:00Z"
  }
}
```

## Core API Endpoints

### 1. Get Available Styles

**Endpoint**: `GET /v1/styles`

**Request**:
```bash
curl -X GET https://api.textstyler.com/v1/styles \
  -H "Authorization: Bearer sk_live_1234567890abcdef"
```

**Response**:
```json
{
  "success": true,
  "data": {
    "styles": [
      {
        "id": "bold",
        "name": "Bold",
        "description": "Mathematical bold characters",
        "category": "emphasis",
        "example": "𝐁𝐨𝐥𝐝 𝐓𝐞𝐱𝐭",
        "unicode_range": "U+1D400-U+1D433"
      },
      {
        "id": "italic",
        "name": "Italic",
        "description": "Mathematical italic characters",
        "category": "emphasis",
        "example": "𝐼𝑡𝑎𝑙𝑖𝑐 𝑇𝑒𝑥𝑡",
        "unicode_range": "U+1D434-U+1D467"
      }
    ]
  }
}
```

### 2. Transform Text

**Endpoint**: `POST /v1/transform`

**Request**:
```bash
curl -X POST https://api.textstyler.com/v1/transform \
  -H "Authorization: Bearer sk_live_1234567890abcdef" \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Hello World",
    "style": "bold",
    "options": {
      "preserve_spaces": true,
      "preserve_numbers": true
    }
  }'
```

**Response**:
```json
{
  "success": true,
  "data": {
    "styled_text": "𝐇𝐞𝐥𝐥𝐨 𝐖𝐨𝐫𝐥𝐝",
    "original_text": "Hello World",
    "style": "bold",
    "character_count": 11,
    "processing_time_ms": 12,
    "transformations": [
      {"from": "H", "to": "𝐇", "position": 0},
      {"from": "e", "to": "𝐞", "position": 1},
      {"from": "l", "to": "𝐥", "position": 2}
    ]
  }
}
```

### 3. Batch Transform

**Endpoint**: `POST /v1/batch`

**Request**:
```bash
curl -X POST https://api.textstyler.com/v1/batch \
  -H "Authorization: Bearer sk_live_1234567890abcdef" \
  -H "Content-Type: application/json" \
  -d '{
    "requests": [
      {"text": "Hello", "style": "bold"},
      {"text": "World", "style": "italic"},
      {"text": "Example", "style": "script"}
    ]
  }'
```

**Response**:
```json
{
  "success": true,
  "data": {
    "results": [
      {
        "styled_text": "𝐇𝐞𝐥𝐥𝐨",
        "original_text": "Hello",
        "style": "bold",
        "status": "success"
      },
      {
        "styled_text": "𝑊𝑜𝑟𝑙𝑑",
        "original_text": "World",
        "style": "italic",
        "status": "success"
      },
      {
        "styled_text": "ℰ𝓍𝒶𝓂𝓅𝓁𝑒",
        "original_text": "Example",
        "style": "script",
        "status": "success"
      }
    ],
    "summary": {
      "total_requests": 3,
      "successful": 3,
      "failed": 0,
      "processing_time_ms": 28
    }
  }
}
```

### 4. Custom Style Management

**Create Custom Style**: `POST /v1/custom`

**Request**:
```bash
curl -X POST https://api.textstyler.com/v1/custom \
  -H "Authorization: Bearer sk_live_1234567890abcdef" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "custom_bold",
    "description": "Custom bold style for brand",
    "mappings": {
      "A": "𝐀", "B": "𝐁", "C": "𝐂",
      "a": "𝐚", "b": "𝐛", "c": "𝐜"
    }
  }'
```

### 5. Analytics and Usage

**Endpoint**: `GET /v1/analytics`

**Request**:
```bash
curl -X GET "https://api.textstyler.com/v1/analytics?period=30d" \
  -H "Authorization: Bearer sk_live_1234567890abcdef"
```

**Response**:
```json
{
  "success": true,
  "data": {
    "period": "30d",
    "total_requests": 45230,
    "successful_requests": 44987,
    "error_rate": 0.54,
    "average_response_time_ms": 45,
    "top_styles": [
      {"style": "bold", "count": 18492, "percentage": 40.9},
      {"style": "italic", "count": 13569, "percentage": 30.0},
      {"style": "script", "count": 9046, "percentage": 20.0}
    ],
    "daily_usage": [
      {"date": "2025-01-01", "requests": 1523},
      {"date": "2025-01-02", "requests": 1687}
    ]
  }
}
```

## SDK and Library Integration

### Official SDKs

**JavaScript/Node.js SDK**:
```bash
npm install @textstyler/sdk
```

```javascript
const TextStyler = require('@textstyler/sdk');

const client = new TextStyler({
  apiKey: process.env.TEXTSTYLER_API_KEY,
  baseURL: 'https://api.textstyler.com/v1'
});

// Transform text
const result = await client.transform({
  text: 'Hello World',
  style: 'bold'
});

console.log(result.styled_text); // 𝐇𝐞𝐥𝐥𝐨 𝐖𝐨𝐫𝐥𝐝
```

**Python SDK**:
```bash
pip install textstyler-sdk
```

```python
from textstyler import TextStyler

client = TextStyler(api_key=os.environ['TEXTSTYLER_API_KEY'])

# Transform text
result = client.transform(
    text='Hello World',
    style='bold'
)

print(result.styled_text)  # 𝐇𝐞𝐥𝐥𝐨 𝐖𝐨𝐫𝐥𝐝
```

**PHP SDK**:
```bash
composer require textstyler/sdk
```

```php
<?php
use TextStyler\Client;

$client = new Client([
    'api_key' => $_ENV['TEXTSTYLER_API_KEY']
]);

$result = $client->transform([
    'text' => 'Hello World',
    'style' => 'bold'
]);

echo $result['styled_text']; // 𝐇𝐞𝐥𝐥𝐨 𝐖𝐨𝐫𝐥𝐝
?>
```

**Ruby SDK**:
```bash
gem install textstyler-sdk
```

```ruby
require 'textstyler'

client = TextStyler::Client.new(
  api_key: ENV['TEXTSTYLER_API_KEY']
)

result = client.transform(
  text: 'Hello World',
  style: 'bold'
)

puts result.styled_text # 𝐇𝐞𝐥𝐥𝐨 𝐖𝐨𝐫𝐥𝐝
```

**Go SDK**:
```bash
go get github.com/textstyler/go-sdk
```

```go
package main

import (
    "fmt"
    "os"
    "github.com/textstyler/go-sdk"
)

func main() {
    client := textstyler.NewClient(os.Getenv("TEXTSTYLER_API_KEY"))
    
    result, err := client.Transform(&textstyler.TransformRequest{
        Text:  "Hello World",
        Style: "bold",
    })
    
    if err != nil {
        panic(err)
    }
    
    fmt.Println(result.StyledText) // 𝐇𝐞𝐥𝐥𝐨 𝐖𝐨𝐫𝐥𝐝
}
```

### Community SDKs

**Java SDK** (Community):
```xml
<dependency>
    <groupId>com.textstyler</groupId>
    <artifactId>textstyler-java</artifactId>
    <version>1.0.0</version>
</dependency>
```

```java
import com.textstyler.TextStylerClient;
import com.textstyler.models.TransformRequest;

TextStylerClient client = new TextStylerClient(
    System.getenv("TEXTSTYLER_API_KEY")
);

TransformRequest request = new TransformRequest()
    .setText("Hello World")
    .setStyle("bold");

TransformResponse response = client.transform(request);
System.out.println(response.getStyledText()); // 𝐇𝐞𝐥𝐥𝐨 𝐖𝐨𝐫𝐥𝐝
```

**C# SDK** (Community):
```bash
dotnet add package TextStyler.SDK
```

```csharp
using TextStyler;

var client = new TextStylerClient(
    Environment.GetEnvironmentVariable("TEXTSTYLER_API_KEY")
);

var result = await client.TransformAsync(new TransformRequest
{
    Text = "Hello World",
    Style = "bold"
});

Console.WriteLine(result.StyledText); // 𝐇𝐞𝐥𝐥𝐨 𝐖𝐨𝐫𝐥𝐝
```

## Code Examples by Language

### JavaScript/TypeScript Examples

**Basic Implementation**:
```typescript
interface TransformOptions {
  text: string;
  style: string;
  preserveSpaces?: boolean;
  preserveNumbers?: boolean;
}

interface TransformResponse {
  styled_text: string;
  original_text: string;
  style: string;
  character_count: number;
  processing_time_ms: number;
}

class TextStylerClient {
  private apiKey: string;
  private baseURL: string;

  constructor(apiKey: string, baseURL = 'https://api.textstyler.com/v1') {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
  }

  async transform(options: TransformOptions): Promise<TransformResponse> {
    const response = await fetch(`${this.baseURL}/transform`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data;
  }

  async batchTransform(requests: TransformOptions[]): Promise<TransformResponse[]> {
    const response = await fetch(`${this.baseURL}/batch`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ requests }),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data.results;
  }
}

// Usage example
const client = new TextStylerClient(process.env.TEXTSTYLER_API_KEY!);

async function example() {
  try {
    // Single transformation
    const result = await client.transform({
      text: 'Hello World',
      style: 'bold',
      preserveSpaces: true
    });
    
    console.log('Styled text:', result.styled_text);
    
    // Batch transformation
    const batchResults = await client.batchTransform([
      { text: 'Hello', style: 'bold' },
      { text: 'World', style: 'italic' },
      { text: 'Example', style: 'script' }
    ]);
    
    batchResults.forEach((result, index) => {
      console.log(`Result ${index + 1}:`, result.styled_text);
    });
    
  } catch (error) {
    console.error('Error:', error);
  }
}

example();
```

**React Hook Implementation**:
```typescript
import { useState, useCallback } from 'react';

interface UseTextStylerOptions {
  apiKey: string;
  baseURL?: string;
}

interface UseTextStylerReturn {
  transform: (text: string, style: string) => Promise<string>;
  isLoading: boolean;
  error: string | null;
}

export function useTextStyler({ 
  apiKey, 
  baseURL = 'https://api.textstyler.com/v1' 
}: UseTextStylerOptions): UseTextStylerReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const transform = useCallback(async (text: string, style: string): Promise<string> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${baseURL}/transform`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, style }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const data = await response.json();
      return data.data.styled_text;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [apiKey, baseURL]);

  return { transform, isLoading, error };
}

// Usage in React component
function TextStylerComponent() {
  const { transform, isLoading, error } = useTextStyler({
    apiKey: process.env.REACT_APP_TEXTSTYLER_API_KEY!
  });

  const [inputText, setInputText] = useState('');
  const [styledText, setStyledText] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('bold');

  const handleTransform = async () => {
    try {
      const result = await transform(inputText, selectedStyle);
      setStyledText(result);
    } catch (err) {
      console.error('Transform failed:', err);
    }
  };

  return (
    <div>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to style"
      />
      <select
        value={selectedStyle}
        onChange={(e) => setSelectedStyle(e.target.value)}
      >
        <option value="bold">Bold</option>
        <option value="italic">Italic</option>
        <option value="script">Script</option>
      </select>
      <button onClick={handleTransform} disabled={isLoading}>
        {isLoading ? 'Transforming...' : 'Transform'}
      </button>
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      {styledText && <div>Result: {styledText}</div>}
    </div>
  );
}
```

### Python Examples

**Django Integration**:
```python
# settings.py
TEXTSTYLER_API_KEY = os.environ.get('TEXTSTYLER_API_KEY')
TEXTSTYLER_BASE_URL = 'https://api.textstyler.com/v1'

# services.py
import requests
from django.conf import settings
from typing import Optional, List, Dict

class TextStylerService:
    def __init__(self):
        self.api_key = settings.TEXTSTYLER_API_KEY
        self.base_url = settings.TEXTSTYLER_BASE_URL
        self.session = requests.Session()
        self.session.headers.update({
            'Authorization': f'Bearer {self.api_key}',
            'Content-Type': 'application/json'
        })

    def transform(self, text: str, style: str, **options) -> Dict:
        """Transform text with specified style."""
        payload = {
            'text': text,
            'style': style,
            **options
        }
        
        response = self.session.post(
            f'{self.base_url}/transform',
            json=payload
        )
        response.raise_for_status()
        return response.json()['data']

    def batch_transform(self, requests: List[Dict]) -> List[Dict]:
        """Transform multiple texts in batch."""
        payload = {'requests': requests}
        
        response = self.session.post(
            f'{self.base_url}/batch',
            json=payload
        )
        response.raise_for_status()
        return response.json()['data']['results']

    def get_styles(self) -> List[Dict]:
        """Get available text styles."""
        response = self.session.get(f'{self.base_url}/styles')
        response.raise_for_status()
        return response.json()['data']['styles']

# views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json

@csrf_exempt
@require_http_methods(["POST"])
def transform_text(request):
    try:
        data = json.loads(request.body)
        text = data.get('text')
        style = data.get('style')
        
        if not text or not style:
            return JsonResponse({
                'error': 'Both text and style are required'
            }, status=400)
        
        service = TextStylerService()
        result = service.transform(text, style)
        
        return JsonResponse({
            'success': True,
            'styled_text': result['styled_text']
        })
        
    except Exception as e:
        return JsonResponse({
            'error': str(e)
        }, status=500)

# models.py
from django.db import models

class StyledText(models.Model):
    original_text = models.TextField()
    styled_text = models.TextField()
    style = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        if not self.styled_text:
            service = TextStylerService()
            result = service.transform(self.original_text, self.style)
            self.styled_text = result['styled_text']
        super().save(*args, **kwargs)
```

**Flask Integration**:
```python
from flask import Flask, request, jsonify
import requests
import os
from functools import wraps

app = Flask(__name__)

class TextStylerClient:
    def __init__(self, api_key: str):
        self.api_key = api_key
        self.base_url = 'https://api.textstyler.com/v1'
        self.session = requests.Session()
        self.session.headers.update({
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        })

    def transform(self, text: str, style: str) -> dict:
        response = self.session.post(
            f'{self.base_url}/transform',
            json={'text': text, 'style': style}
        )
        response.raise_for_status()
        return response.json()['data']

# Initialize client
client = TextStylerClient(os.environ['TEXTSTYLER_API_KEY'])

def handle_api_errors(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        try:
            return f(*args, **kwargs)
        except requests.exceptions.RequestException as e:
            return jsonify({'error': 'API request failed', 'details': str(e)}), 500
        except Exception as e:
            return jsonify({'error': 'Internal server error', 'details': str(e)}), 500
    return decorated_function

@app.route('/api/transform', methods=['POST'])
@handle_api_errors
def transform_text():
    data = request.get_json()
    
    if not data or 'text' not in data or 'style' not in data:
        return jsonify({'error': 'Missing required fields: text, style'}), 400
    
    result = client.transform(data['text'], data['style'])
    
    return jsonify({
        'success': True,
        'styled_text': result['styled_text'],
        'processing_time_ms': result['processing_time_ms']
    })

@app.route('/api/styles', methods=['GET'])
@handle_api_errors
def get_styles():
    response = client.session.get(f'{client.base_url}/styles')
    response.raise_for_status()
    return jsonify(response.json()['data'])

if __name__ == '__main__':
    app.run(debug=True)
```

### PHP Examples

**Laravel Integration**:
```php
<?php
// config/textstyler.php
return [
    'api_key' => env('TEXTSTYLER_API_KEY'),
    'base_url' => env('TEXTSTYLER_BASE_URL', 'https://api.textstyler.com/v1'),
];

// app/Services/TextStylerService.php
namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Config;

class TextStylerService
{
    private $apiKey;
    private $baseUrl;

    public function __construct()
    {
        $this->apiKey = Config::get('textstyler.api_key');
        $this->baseUrl = Config::get('textstyler.base_url');
    }

    public function transform(string $text, string $style, array $options = []): array
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $this->apiKey,
        ])->post($this->baseUrl . '/transform', [
            'text' => $text,
            'style' => $style,
            ...$options
        ]);

        if ($response->failed()) {
            throw new \Exception('Text styling API request failed: ' . $response->body());
        }

        return $response->json()['data'];
    }

    public function batchTransform(array $requests): array
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $this->apiKey,
        ])->post($this->baseUrl . '/batch', [
            'requests' => $requests
        ]);

        if ($response->failed()) {
            throw new \Exception('Batch transform API request failed: ' . $response->body());
        }

        return $response->json()['data']['results'];
    }

    public function getStyles(): array
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $this->apiKey,
        ])->get($this->baseUrl . '/styles');

        if ($response->failed()) {
            throw new \Exception('Get styles API request failed: ' . $response->body());
        }

        return $response->json()['data']['styles'];
    }
}

// app/Http/Controllers/TextStylerController.php
namespace App\Http\Controllers;

use App\Services\TextStylerService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class TextStylerController extends Controller
{
    private $textStylerService;

    public function __construct(TextStylerService $textStylerService)
    {
        $this->textStylerService = $textStylerService;
    }

    public function transform(Request $request): JsonResponse
    {
        $request->validate([
            'text' => 'required|string|max:10000',
            'style' => 'required|string',
        ]);

        try {
            $result = $this->textStylerService->transform(
                $request->input('text'),
                $request->input('style')
            );

            return response()->json([
                'success' => true,
                'styled_text' => $result['styled_text'],
                'processing_time_ms' => $result['processing_time_ms']
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function getStyles(): JsonResponse
    {
        try {
            $styles = $this->textStylerService->getStyles();
            return response()->json([
                'success' => true,
                'styles' => $styles
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'error' => $e->getMessage()
            ], 500);
        }
    }
}

// routes/api.php
use App\Http\Controllers\TextStylerController;

Route::post('/transform', [TextStylerController::class, 'transform']);
Route::get('/styles', [TextStylerController::class, 'getStyles']);
```

**WordPress Plugin Integration**:
```php
<?php
// textstyler-plugin.php
/*
Plugin Name: TextStyler Integration
Description: Integrate Unicode text styling into WordPress
Version: 1.0.0
*/

class TextStylerPlugin
{
    private $apiKey;
    private $baseUrl = 'https://api.textstyler.com/v1';

    public function __construct()
    {
        add_action('init', [$this, 'init']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
        add_action('wp_ajax_transform_text',   [$this, 'ajax_transform_text']);
        add_action('wp_ajax_nopriv_transform_text', [$this, 'ajax_transform_text']);
        add_shortcode('textstyler', [$this, 'shortcode_handler']);
    }

    public function init()
    {
        $this->apiKey = get_option('textstyler_api_key');
    }

    public function enqueue_scripts()
    {
        wp_enqueue_script(
            'textstyler-js',
            plugin_dir_url(__FILE__) . 'assets/textstyler.js',
            ['jquery'],
            '1.0.0',
            true
        );

        wp_localize_script('textstyler-js', 'textstyler_ajax', [
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('textstyler_nonce')
        ]);
    }

    public function ajax_transform_text()
    {
        check_ajax_referer('textstyler_nonce', 'nonce');

        $text = sanitize_text_field($_POST['text']);
        $style = sanitize_text_field($_POST['style']);

        if (empty($text) || empty($style)) {
            wp_die('Missing required parameters');
        }

        try {
            $result = $this->transform_text($text, $style);
            wp_send_json_success($result);
        } catch (Exception $e) {
            wp_send_json_error($e->getMessage());
        }
    }

    private function transform_text($text, $style)
    {
        $response = wp_remote_post($this->baseUrl . '/transform', [
            'headers' => [
                'Authorization' => 'Bearer ' . $this->apiKey,
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode([
                'text' => $text,
                'style' => $style
            ]),
            'timeout' => 30
        ]);

        if (is_wp_error($response)) {
            throw new Exception('API request failed: ' . $response->get_error_message());
        }

        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body, true);

        if (!$data['success']) {
            throw new Exception('API error: ' . $data['error']['message']);
        }

        return $data['data'];
    }

    public function shortcode_handler($atts)
    {
        $atts = shortcode_atts([
            'text' => '',
            'style' => 'bold'
        ], $atts);

        if (empty($atts['text'])) {
            return '';
        }

        try {
            $result = $this->transform_text($atts['text'], $atts['style']);
            return esc_html($result['styled_text']);
        } catch (Exception $e) {
            return '<!-- TextStyler Error: ' . esc_html($e->getMessage()) . ' -->';
        }
    }
}

new TextStylerPlugin();

// Admin settings page
add_action('admin_menu', function() {
    add_options_page(
        'TextStyler Settings',
        'TextStyler',
        'manage_options',
        'textstyler-settings',
        'textstyler_settings_page'
    );
});

function textstyler_settings_page()
{
    if (isset($_POST['submit'])) {
        update_option('textstyler_api_key', sanitize_text_field($_POST['api_key']));
        echo '<div class="notice notice-success"><p>Settings saved!</p></div>';
    }

    $apiKey = get_option('textstyler_api_key', '');
    ?>
    <div class="wrap">
        <h1>TextStyler Settings</h1>
        <form method="post">
            <table class="form-table">
                <tr>
                    <th scope="row">API Key</th>
                    <td>
                        <input type="text" name="api_key" value="<?php echo esc_attr($apiKey); ?>" class="regular-text" />
                        <p class="description">Enter your TextStyler API key</p>
                    </td>
                </tr>
            </table>
            <?php submit_button(); ?>
        </form>
    </div>
    <?php
}
?>
```

## Performance Optimization

### Caching Strategies

**Redis Caching Implementation**:
```javascript
const redis = require('redis');
const client = redis.createClient();

class CachedTextStyler {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.textstyler.com/v1';
  }

  async transform(text, style, options = {}) {
    // Create cache key
    const cacheKey = `textstyler:${style}:${Buffer.from(text).toString('base64')}`;
    
    // Try to get from cache first
    const cached = await client.get(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }

    // If not in cache, call API
    const response = await fetch(`${this.baseURL}/transform`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style, ...options }),
    });

    const data = await response.json();
    const result = data.data;

    // Cache the result for 1 hour
    await client.setex(cacheKey, 3600, JSON.stringify(result));

    return result;
  }
}
```

**Database Caching**:
```sql
-- Create cache table
CREATE TABLE text_style_cache (
    id SERIAL PRIMARY KEY,
    cache_key VARCHAR(255) UNIQUE NOT NULL,
    original_text TEXT NOT NULL,
    styled_text TEXT NOT NULL,
    style VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NOT NULL
);

-- Index for fast lookups
CREATE INDEX idx_cache_key ON text_style_cache(cache_key);
CREATE INDEX idx_expires_at ON text_style_cache(expires_at);
```

```python
import hashlib
from datetime import datetime, timedelta
from django.db import models

class TextStyleCache(models.Model):
    cache_key = models.CharField(max_length=255, unique=True, db_index=True)
    original_text = models.TextField()
    styled_text = models.TextField()
    style = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField(db_index=True)

    @classmethod
    def get_cache_key(cls, text, style):
        return hashlib.sha256(f"{text}:{style}".encode()).hexdigest()

    @classmethod
    def get_cached_result(cls, text, style):
        cache_key = cls.get_cache_key(text, style)
        try:
            cached = cls.objects.get(
                cache_key=cache_key,
                expires_at__gt=datetime.now()
            )
            return cached.styled_text
        except cls.DoesNotExist:
            return None

    @classmethod
    def cache_result(cls, text, style, styled_text, ttl_hours=24):
        cache_key = cls.get_cache_key(text, style)
        expires_at = datetime.now() + timedelta(hours=ttl_hours)
        
        cls.objects.update_or_create(
            cache_key=cache_key,
            defaults={
                'original_text': text,
                'styled_text': styled_text,
                'style': style,
                'expires_at': expires_at
            }
        )
```

### Connection Pooling

**Node.js Connection Pool**:
```javascript
const https = require('https');

class TextStylerClient {
  constructor(apiKey, options = {}) {
    this.apiKey = apiKey;
    this.baseURL = options.baseURL || 'https://api.textstyler.com/v1';
    
    // Create HTTPS agent with connection pooling
    this.agent = new https.Agent({
      keepAlive: true,
      keepAliveMsecs: 30000,
      maxSockets: 50,
      maxFreeSockets: 10,
      timeout: 30000
    });
  }

  async makeRequest(endpoint, data) {
    const url = new URL(endpoint, this.baseURL);
    
    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        'Connection': 'keep-alive'
      },
      agent: this.agent
    };

    const response = await fetch(url, {
      ...options,
      body: JSON.stringify(data)
    });

    return response.json();
  }
}
```

**Python Connection Pool**:
```python
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

class TextStylerClient:
    def __init__(self, api_key, max_retries=3, pool_connections=10, pool_maxsize=50):
        self.api_key = api_key
        self.base_url = 'https://api.textstyler.com/v1'
        
        # Create session with connection pooling
        self.session = requests.Session()
        
        # Configure retry strategy
        retry_strategy = Retry(
            total=max_retries,
            backoff_factor=1,
            status_forcelist=[429, 500, 502, 503, 504],
        )
        
        # Configure adapter with connection pooling
        adapter = HTTPAdapter(
            max_retries=retry_strategy,
            pool_connections=pool_connections,
            pool_maxsize=pool_maxsize
        )
        
        self.session.mount("http://", adapter)
        self.session.mount("https://", adapter)
        
        # Set default headers
        self.session.headers.update({
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        })

    def transform(self, text, style, timeout=30):
        response = self.session.post(
            f'{self.base_url}/transform',
            json={'text': text, 'style': style},
            timeout=timeout
        )
        response.raise_for_status()
        return response.json()['data']
```

### Batch Processing Optimization

**Intelligent Batching**:
```javascript
class BatchProcessor {
  constructor(client, options = {}) {
    this.client = client;
    this.batchSize = options.batchSize || 100;
    this.flushInterval = options.flushInterval || 1000; // ms
    this.queue = [];
    this.processing = false;
    
    // Auto-flush timer
    setInterval(() => this.flush(), this.flushInterval);
  }

  async add(text, style) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        text,
        style,
        resolve,
        reject,
        timestamp: Date.now()
      });

      // Flush if batch is full
      if (this.queue.length >= this.batchSize) {
        this.flush();
      }
    });
  }

  async flush() {
    if (this.processing || this.queue.length === 0) {
      return;
    }

    this.processing = true;
    const batch = this.queue.splice(0, this.batchSize);

    try {
      const requests = batch.map(item => ({
        text: item.text,
        style: item.style
      }));

      const results = await this.client.batchTransform(requests);

      // Resolve promises with results
      batch.forEach((item, index) => {
        const result = results[index];
        if (result.status === 'success') {
          item.resolve(result);
        } else {
          item.reject(new Error(result.error || 'Transform failed'));
        }
      });

    } catch (error) {
      // Reject all promises in batch
      batch.forEach(item => item.reject(error));
    } finally {
      this.processing = false;
    }
  }
}

// Usage
const batchProcessor = new BatchProcessor(textStylerClient, {
  batchSize: 50,
  flushInterval: 500
});

// Add items to batch
const result1 = await batchProcessor.add('Hello', 'bold');
const result2 = await batchProcessor.add('World', 'italic');
```

### Memory Management

**Streaming for Large Texts**:
```javascript
const stream = require('stream');

class TextStylerStream extends stream.Transform {
  constructor(client, style, options = {}) {
    super({ objectMode: true });
    this.client = client;
    this.style = style;
    this.chunkSize = options.chunkSize || 1000; // characters
  }

  _transform(chunk, encoding, callback) {
    const text = chunk.toString();
    
    // Split large text into smaller chunks
    const chunks = this.splitText(text, this.chunkSize);
    
    // Process chunks in parallel
    Promise.all(
      chunks.map(chunk => this.client.transform(chunk, this.style))
    ).then(results => {
      const styledText = results.map(r => r.styled_text).join('');
      callback(null, styledText);
    }).catch(callback);
  }

  splitText(text, chunkSize) {
    const chunks = [];
    for (let i = 0; i < text.length; i += chunkSize) {
      chunks.push(text.slice(i, i + chunkSize));
    }
    return chunks;
  }
}

// Usage
const fs = require('fs');
const styleStream = new TextStylerStream(client, 'bold');

fs.createReadStream('large-text-file.txt')
  .pipe(styleStream)
  .pipe(fs.createWriteStream('styled-output.txt'));
```

## Error Handling and Debugging

### Comprehensive Error Handling

**Error Types and Handling**:
```typescript
enum TextStylerErrorType {
  AUTHENTICATION = 'AUTHENTICATION_ERROR',
  RATE_LIMIT = 'RATE_LIMIT_EXCEEDED',
  INVALID_STYLE = 'INVALID_STYLE',
  TEXT_TOO_LONG = 'TEXT_TOO_LONG',
  NETWORK = 'NETWORK_ERROR',
  SERVER = 'SERVER_ERROR',
  TIMEOUT = 'TIMEOUT_ERROR'
}

class TextStylerError extends Error {
  constructor(
    public type: TextStylerErrorType,
    public message: string,
    public statusCode?: number,
    public details?: any
  ) {
    super(message);
    this.name = 'TextStylerError';
  }
}

class TextStylerClient {
  async transform(text: string, style: string): Promise<TransformResponse> {
    try {
      const response = await fetch(`${this.baseURL}/transform`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, style }),
        signal: AbortSignal.timeout(30000) // 30 second timeout
      });

      if (!response.ok) {
        await this.handleErrorResponse(response);
      }

      const data = await response.json();
      return data.data;

    } catch (error) {
      if (error instanceof TextStylerError) {
        throw error;
      }

      if (error.name === 'AbortError') {
        throw new TextStylerError(
          TextStylerErrorType.TIMEOUT,
          'Request timed out after 30 seconds'
        );
      }

      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new TextStylerError(
          TextStylerErrorType.NETWORK,
          'Network error: Unable to connect to TextStyler API'
        );
      }

      throw new TextStylerError(
        TextStylerErrorType.SERVER,
        `Unexpected error: ${error.message}`
      );
    }
  }

  private async handleErrorResponse(response: Response): Promise<never> {
    const contentType = response.headers.get('content-type');
    let errorData: any = {};

    if (contentType && contentType.includes('application/json')) {
      try {
        errorData = await response.json();
      } catch {
        // Ignore JSON parsing errors
      }
    }

    switch (response.status) {
      case 401:
        throw new TextStylerError(
          TextStylerErrorType.AUTHENTICATION,
          'Invalid API key or authentication failed',
          401,
          errorData
        );

      case 429:
        const retryAfter = response.headers.get('Retry-After');
        throw new TextStylerError(
          TextStylerErrorType.RATE_LIMIT,
          `Rate limit exceeded. Retry after ${retryAfter} seconds`,
          429,
          { retryAfter: parseInt(retryAfter || '60') }
        );

      case 400:
        if (errorData.error?.code === 'INVALID_STYLE') {
          throw new TextStylerError(
            TextStylerErrorType.INVALID_STYLE,
            errorData.error.message,
            400,
            errorData.error.details
          );
        }
        if (errorData.error?.code === 'TEXT_TOO_LONG') {
          throw new TextStylerError(
            TextStylerErrorType.TEXT_TOO_LONG,
            errorData.error.message,
            400,
            errorData.error.details
          );
        }
        break;

      case 500:
      case 502:
      case 503:
      case 504:
        throw new TextStylerError(
          TextStylerErrorType.SERVER,
          'Server error occurred. Please try again later',
          response.status,
          errorData
        );
    }

    throw new TextStylerError(
      TextStylerErrorType.SERVER,
      `HTTP ${response.status}: ${response.statusText}`,
      response.status,
      errorData
    );
  }
}
```

**Retry Logic with Exponential Backoff**:
```typescript
class RetryableTextStylerClient extends TextStylerClient {
  async transformWithRetry(
    text: string, 
    style: string, 
    maxRetries = 3
  ): Promise<TransformResponse> {
    let lastError: Error;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        return await this.transform(text, style);
      } catch (error) {
        lastError = error;

        if (error instanceof TextStylerError) {
          // Don't retry on authentication or invalid style errors
          if (error.type === TextStylerErrorType.AUTHENTICATION ||
              error.type === TextStylerErrorType.INVALID_STYLE ||
              error.type === TextStylerErrorType.TEXT_TOO_LONG) {
            throw error;
          }

          // For rate limiting, respect the retry-after header
          if (error.type === TextStylerErrorType.RATE_LIMIT) {
            const retryAfter = error.details?.retryAfter || 60;
            if (attempt < maxRetries) {
              await this.sleep(retryAfter * 1000);
              continue;
            }
          }
        }

        // Don't retry on the last attempt
        if (attempt === maxRetries) {
          break;
        }

        // Exponential backoff: 1s, 2s, 4s, 8s...
        const delay = Math.pow(2, attempt) * 1000;
        await this.sleep(delay);
      }
    }

    throw lastError;
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
```

### Debugging Tools

**Request/Response Logging**:
```javascript
class DebuggableTextStylerClient extends TextStylerClient {
  constructor(apiKey, options = {}) {
    super(apiKey, options);
    this.debug = options.debug || false;
    this.logger = options.logger || console;
  }

  async makeRequest(endpoint, data) {
    const requestId = this.generateRequestId();
    const startTime = Date.now();

    if (this.debug) {
      this.logger.log(`[${requestId}] Request:`, {
        endpoint,
        data,
        timestamp: new Date().toISOString()
      });
    }

    try {
      const response = await super.makeRequest(endpoint, data);
      const duration = Date.now() - startTime;

      if (this.debug) {
        this.logger.log(`[${requestId}] Response:`, {
          response,
          duration: `${duration}ms`,
          timestamp: new Date().toISOString()
        });
      }

      return response;
    } catch (error) {
      const duration = Date.now() - startTime;

      if (this.debug) {
        this.logger.error(`[${requestId}] Error:`, {
          error: error.message,
          duration: `${duration}ms`,
          timestamp: new Date().toISOString()
        });
      }

      throw error;
    }
  }

  generateRequestId() {
    return Math.random().toString(36).substr(2, 9);
  }
}
```

**Health Check Implementation**:
```javascript
class HealthCheckableTextStylerClient extends TextStylerClient {
  async healthCheck() {
    try {
      const startTime = Date.now();
      
      // Simple test transformation
      const result = await this.transform('test', 'bold');
      const responseTime = Date.now() - startTime;

      return {
        status: 'healthy',
        responseTime,
        timestamp: new Date().toISOString(),
        version: await this.getApiVersion()
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  async getApiVersion() {
    try {
      const response = await fetch(`${this.baseURL}/health`);
      const data = await response.json();
      return data.version;
    } catch {
      return 'unknown';
    }
  }
}
```

## Rate Limiting and Scaling

### Client-Side Rate Limiting

**Token Bucket Implementation**:
```javascript
class TokenBucket {
  constructor(capacity, refillRate) {
    this.capacity = capacity;
    this.tokens = capacity;
    this.refillRate = refillRate; // tokens per second
    this.lastRefill = Date.now();
  }

  consume(tokens = 1) {
    this.refill();
    
    if (this.tokens >= tokens) {
      this.tokens -= tokens;
      return true;
    }
    
    return false;
  }

  refill() {
    const now = Date.now();
    const timePassed = (now - this.lastRefill) / 1000;
    const tokensToAdd = timePassed * this.refillRate;
    
    this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);
    this.lastRefill = now;
  }

  getWaitTime(tokens = 1) {
    this.refill();
    
    if (this.tokens >= tokens) {
      return 0;
    }
    
    const tokensNeeded = tokens - this.tokens;
    return (tokensNeeded / this.refillRate) * 1000; // milliseconds
  }
}

class RateLimitedTextStylerClient extends TextStylerClient {
  constructor(apiKey, options = {}) {
    super(apiKey, options);
    
    // Default: 100 requests per minute
    this.rateLimiter = new TokenBucket(
      options.rateLimit || 100,
      (options.rateLimit || 100) / 60
    );
  }

  async transform(text, style) {
    // Check if we can make the request
    if (!this.rateLimiter.consume()) {
      const waitTime = this.rateLimiter.getWaitTime();
      throw new TextStylerError(
        TextStylerErrorType.RATE_LIMIT,
        `Rate limit exceeded. Wait ${Math.ceil(waitTime / 1000)} seconds`,
        429,
        { waitTime }
      );
    }

    return super.transform(text, style);
  }

  async transformWithWait(text, style) {
    const waitTime = this.rateLimiter.getWaitTime();
    
    if (waitTime > 0) {
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }

    return this.transform(text, style);
  }
}
```

### Queue Management

**Priority Queue Implementation**:
```javascript
class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(item, priority = 0) {
    const queueItem = { item, priority, timestamp: Date.now() };
    
    // Insert in priority order (higher priority first)
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (queueItem.priority > this.items[i].priority) {
        this.items.splice(i, 0, queueItem);
        added = true;
        break;
      }
    }
    
    if (!added) {
      this.items.push(queueItem);
    }
  }

  dequeue() {
    return this.items.shift()?.item;
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class QueuedTextStylerClient extends TextStylerClient {
  constructor(apiKey, options = {}) {
    super(apiKey, options);
    this.queue = new PriorityQueue();
    this.processing = false;
    this.concurrency = options.concurrency || 5;
    this.activeRequests = 0;
  }

  async transform(text, style, priority = 0) {
    return new Promise((resolve, reject) => {
      this.queue.enqueue({
        text,
        style,
        resolve,
        reject
      }, priority);

      this.processQueue();
    });
  }

  async processQueue() {
    if (this.processing || this.activeRequests >= this.concurrency) {
      return;
    }

    this.processing = true;

    while (!this.queue.isEmpty() && this.activeRequests < this.concurrency) {
      const request = this.queue.dequeue();
      if (request) {
        this.activeRequests++;
        this.processRequest(request);
      }
    }

    this.processing = false;
  }

  async processRequest(request) {
    try {
      const result = await super.transform(request.text, request.style);
      request.resolve(result);
    } catch (error) {
      request.reject(error);
    } finally {
      this.activeRequests--;
      // Process more items if queue is not empty
      if (!this.queue.isEmpty()) {
        setTimeout(() => this.processQueue(), 0);
      }
    }
  }
}
```

### Load Balancing

**Multiple API Key Rotation**:
```javascript
class LoadBalancedTextStylerClient {
  constructor(apiKeys, options = {}) {
    this.apiKeys = apiKeys;
    this.clients = apiKeys.map(key => new TextStylerClient(key, options));
    this.currentIndex = 0;
    this.healthStatus = new Map();
    
    // Initialize health status
    this.clients.forEach((client, index) => {
      this.healthStatus.set(index, { healthy: true, lastCheck: Date.now() });
    });

    // Health check interval
    setInterval(() => this.performHealthChecks(), 60000); // 1 minute
  }

  getNextClient() {
    const startIndex = this.currentIndex;
    
    do {
      const client = this.clients[this.currentIndex];
      const health = this.healthStatus.get(this.currentIndex);
      
      this.currentIndex = (this.currentIndex + 1) % this.clients.length;
      
      if (health.healthy) {
        return { client, index: this.currentIndex - 1 };
      }
    } while (this.currentIndex !== startIndex);

    // All clients are unhealthy, return the first one anyway
    return { client: this.clients[0], index: 0 };
  }

  async transform(text, style, maxRetries = 3) {
    let lastError;

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      const { client, index } = this.getNextClient();
      
      try {
        const result = await client.transform(text, style);
        
        // Mark client as healthy on success
        this.healthStatus.set(index, { 
          healthy: true, 
          lastCheck: Date.now() 
        });
        
        return result;
      } catch (error) {
        lastError = error;
        
        // Mark client as unhealthy on certain errors
        if (error instanceof TextStylerError && 
            error.type === TextStylerErrorType.AUTHENTICATION) {
          this.healthStatus.set(index, { 
            healthy: false, 
            lastCheck: Date.now() 
          });
        }
      }
    }

    throw lastError;
  }

  async performHealthChecks() {
    const healthChecks = this.clients.map(async (client, index) => {
      try {
        await client.transform('test', 'bold');
        this.healthStatus.set(index, { 
          healthy: true, 
          lastCheck: Date.now() 
        });
      } catch (error) {
        this.healthStatus.set(index, { 
          healthy: false, 
          lastCheck: Date.now() 
        });
      }
    });

    await Promise.allSettled(healthChecks);
  }

  getHealthStatus() {
    return Array.from(this.healthStatus.entries()).map(([index, status]) => ({
      apiKeyIndex: index,
      healthy: status.healthy,
      lastCheck: new Date(status.lastCheck).toISOString()
    }));
  }
}
```

## Testing and Quality Assurance

### Unit Testing

**Jest Test Suite**:
```javascript
// __tests__/textstyler-client.test.js
const TextStylerClient = require('../src/textstyler-client');
const fetch = require('node-fetch');

// Mock fetch
jest.mock('node-fetch');
const mockFetch = fetch;

describe('TextStylerClient', () => {
  let client;
  const mockApiKey = 'sk_test_1234567890';

  beforeEach(() => {
    client = new TextStylerClient(mockApiKey);
    jest.clearAllMocks();
  });

  describe('transform', () => {
    it('should transform text successfully', async () => {
      const mockResponse = {
        ok: true,
        json: async () => ({
          success: true,
          data: {
            styled_text: '𝐇𝐞𝐥𝐥𝐨',
            original_text: 'Hello',
            style: 'bold',
            character_count: 5,
            processing_time_ms: 12
          }
        })
      };

      mockFetch.mockResolvedValue(mockResponse);

      const result = await client.transform('Hello', 'bold');

      expect(result.styled_text).toBe('𝐇𝐞𝐥𝐥𝐨');
      expect(result.original_text).toBe('Hello');
      expect(result.style).toBe('bold');
      
      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.textstyler.com/v1/transform',
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${mockApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: 'Hello',
            style: 'bold'
          })
        }
      );
    });

    it('should handle API errors correctly', async () => {
      const mockResponse = {
        ok: false,
        status: 400,
        json: async () => ({
          success: false,
          error: {
            code: 'INVALID_STYLE',
            message: 'Invalid style provided',
            details: { provided_style: 'invalid' }
          }
        })
      };

      mockFetch.mockResolvedValue(mockResponse);

      await expect(client.transform('Hello', 'invalid'))
        .rejects
        .toThrow('Invalid style provided');
    });

    it('should handle network errors', async () => {
      mockFetch.mockRejectedValue(new Error('Network error'));

      await expect(client.transform('Hello', 'bold'))
        .rejects
        .toThrow('Network error');
    });

    it('should handle rate limiting', async () => {
      const mockResponse = {
        ok: false,
        status: 429,
        headers: {
          get: (header) => header === 'Retry-After' ? '60' : null
        },
        json: async () => ({
          success: false,
          error: {
            code: 'RATE_LIMIT_EXCEEDED',
            message: 'Rate limit exceeded'
          }
        })
      };

      mockFetch.mockResolvedValue(mockResponse);

      await expect(client.transform('Hello', 'bold'))
        .rejects
        .toThrow('Rate limit exceeded');
    });
  });

  describe('batchTransform', () => {
    it('should handle batch transformations', async () => {
      const mockResponse = {
        ok: true,
        json: async () => ({
          success: true,
          data: {
            results: [
              {
                styled_text: '𝐇𝐞𝐥𝐥𝐨',
                original_text: 'Hello',
                style: 'bold',
                status: 'success'
              },
              {
                styled_text: '𝑊𝑜𝑟𝑙𝑑',
                original_text: 'World',
                style: 'italic',
                status: 'success'
              }
            ]
          }
        })
      };

      mockFetch.mockResolvedValue(mockResponse);

      const requests = [
        { text: 'Hello', style: 'bold' },
        { text: 'World', style: 'italic' }
      ];

      const results = await client.batchTransform(requests);

      expect(results).toHaveLength(2);
      expect(results[0].styled_text).toBe('𝐇𝐞𝐥𝐥𝐨');
      expect(results[1].styled_text).toBe('𝑊𝑜𝑟𝑙𝑑');
    });
  });
});
```

**Python pytest Suite**:
```python
# tests/test_textstyler_client.py
import pytest
import requests_mock
from textstyler import TextStylerClient, TextStylerError

class TestTextStylerClient:
    def setup_method(self):
        self.client = TextStylerClient('sk_test_1234567890')

    def test_transform_success(self, requests_mock):
        mock_response = {
            'success': True,
            'data': {
                'styled_text': '𝐇𝐞𝐥𝐥𝐨',
                'original_text': 'Hello',
                'style': 'bold',
                'character_count': 5,
                'processing_time_ms': 12
            }
        }
        
        requests_mock.post(
            'https://api.textstyler.com/v1/transform',
            json=mock_response
        )

        result = self.client.transform('Hello', 'bold')

        assert result['styled_text'] == '𝐇𝐞𝐥𝐥𝐨'
        assert result['original_text'] == 'Hello'
        assert result['style'] == 'bold'

    def test_transform_invalid_style(self, requests_mock):
        mock_response = {
            'success': False,
            'error': {
                'code': 'INVALID_STYLE',
                'message': 'Invalid style provided',
                'details': {'provided_style': 'invalid'}
            }
        }
        
        requests_mock.post(
            'https://api.textstyler.com/v1/transform',
            json=mock_response,
            status_code=400
        )

        with pytest.raises(TextStylerError) as exc_info:
            self.client.transform('Hello', 'invalid')
        
        assert 'Invalid style provided' in str(exc_info.value)

    def test_transform_rate_limit(self, requests_mock):
        requests_mock.post(
            'https://api.textstyler.com/v1/transform',
            status_code=429,
            headers={'Retry-After': '60'}
        )

        with pytest.raises(TextStylerError) as exc_info:
            self.client.transform('Hello', 'bold')
        
        assert exc_info.value.type == 'RATE_LIMIT_EXCEEDED'

    def test_batch_transform(self, requests_mock):
        mock_response = {
            'success': True,
            'data': {
                'results': [
                    {
                        'styled_text': '𝐇𝐞𝐥𝐥𝐨',
                        'original_text': 'Hello',
                        'style': 'bold',
                        'status': 'success'
                    },
                    {
                        'styled_text': '𝑊𝑜𝑟𝑙𝑑',
                        'original_text': 'World',
                        'style': 'italic',
                        'status': 'success'
                    }
                ]
            }
        }
        
        requests_mock.post(
            'https://api.textstyler.com/v1/batch',
            json=mock_response
        )

        requests = [
            {'text': 'Hello', 'style': 'bold'},
            {'text': 'World', 'style': 'italic'}
        ]

        results = self.client.batch_transform(requests)

        assert len(results) == 2
        assert results[0]['styled_text'] == '𝐇𝐞𝐥𝐥𝐨'
        assert results[1]['styled_text'] == '𝑊𝑜𝑟𝑙𝑑'
```

### Integration Testing

**API Integration Tests**:
```javascript
// __tests__/integration.test.js
const TextStylerClient = require('../src/textstyler-client');

describe('TextStyler API Integration', () => {
  let client;

  beforeAll(() => {
    // Use test API key from environment
    const apiKey = process.env.TEXTSTYLER_TEST_API_KEY;
    if (!apiKey) {
      throw new Error('TEXTSTYLER_TEST_API_KEY environment variable is required');
    }
    client = new TextStylerClient(apiKey);
  });

  it('should transform text with bold style', async () => {
    const result = await client.transform('Hello World', 'bold');
    
    expect(result.styled_text).toBe('𝐇𝐞𝐥𝐥𝐨 𝐖𝐨𝐫𝐥𝐝');
    expect(result.original_text).toBe('Hello World');
    expect(result.style).toBe('bold');
    expect(result.character_count).toBe(11);
    expect(typeof result.processing_time_ms).toBe('number');
  });

  it('should handle batch transformations', async () => {
    const requests = [
      { text: 'Hello', style: 'bold' },
      { text: 'World', style: 'italic' },
      { text: 'Test', style: 'script' }
    ];

    const results = await client.batchTransform(requests);

    expect(results).toHaveLength(3);
    expect(results[0].styled_text).toBe('𝐇𝐞𝐥𝐥𝐨');
    expect(results[1].styled_text).toBe('𝑊𝑜𝑟𝑙𝑑');
    expect(results[2].styled_text).toBe('𝒯𝑒𝓈𝓉');
  });

  it('should get available styles', async () => {
    const styles = await client.getStyles();
    
    expect(Array.isArray(styles)).toBe(true);
    expect(styles.length).toBeGreaterThan(0);
    
    const boldStyle = styles.find(s => s.id === 'bold');
    expect(boldStyle).toBeDefined();
    expect(boldStyle.name).toBe('Bold');
    expect(boldStyle.example).toBeDefined();
  });

  it('should handle invalid style gracefully', async () => {
    await expect(client.transform('Hello', 'invalid_style'))
      .rejects
      .toThrow(/invalid.*style/i);
  });

  it('should handle empty text', async () => {
    const result = await client.transform('', 'bold');
    expect(result.styled_text).toBe('');
    expect(result.character_count).toBe(0);
  });

  it('should preserve spaces and special characters', async () => {
    const text = 'Hello, World! 123';
    const result = await client.transform(text, 'bold');
    
    // Should preserve punctuation and numbers
    expect(result.styled_text).toContain(',');
    expect(result.styled_text).toContain('!');
    expect(result.styled_text).toContain('123');
  });
});
```

### Performance Testing

**Load Testing with Artillery**:
```yaml
# artillery-config.yml
config:
  target: 'https://api.textstyler.com/v1'
  phases:
    - duration: 60
      arrivalRate: 10
      name: "Warm up"
    - duration: 120
      arrivalRate: 50
      name: "Ramp up load"
    - duration: 300
      arrivalRate: 100
      name: "Sustained load"
  defaults:
    headers:
      Authorization: 'Bearer {{ $env.TEXTSTYLER_API_KEY }}'
      Content-Type: 'application/json'

scenarios:
  - name: "Transform single text"
    weight: 70
    flow:
      - post:
          url: "/transform"
          json:
            text: "Hello World {{ $randomString() }}"
            style: "{{ $randomChoice(['bold', 'italic', 'script']) }}"
          capture:
            - json: "$.data.styled_text"
              as: "styledText"
          expect:
            - statusCode: 200
            - hasProperty: "data.styled_text"

  - name: "Batch transform"
    weight: 20
    flow:
      - post:
          url: "/batch"
          json:
            requests:
              - text: "Hello {{ $randomString() }}"
                style: "bold"
              - text: "World {{ $randomString() }}"
                style: "italic"
              - text: "Test {{ $randomString() }}"
                style: "script"
          expect:
            - statusCode: 200
            - hasProperty: "data.results"

  - name: "Get styles"
    weight: 10
    flow:
      - get:
          url: "/styles"
          expect:
            - statusCode: 200
            - hasProperty: "data.styles"
```

**Benchmark Testing**:
```javascript
// benchmark.js
const Benchmark = require('benchmark');
const TextStylerClient = require('./src/textstyler-client');

const client = new TextStylerClient(process.env.TEXTSTYLER_API_KEY);
const suite = new Benchmark.Suite();

// Test data
const shortText = 'Hello World';
const mediumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(10);

suite
  .add('Transform short text', {
    defer: true,
    fn: async function(deferred) {
      try {
        await client.transform(shortText, 'bold');
        deferred.resolve();
      } catch (error) {
        deferred.reject(error);
      }
    }
  })
  .add('Transform medium text', {
    defer: true,
    fn: async function(deferred) {
      try {
        await client.transform(mediumText, 'bold');
        deferred.resolve();
      } catch (error) {
        deferred.reject(error);
      }
    }
  })
  .add('Transform long text', {
    defer: true,
    fn: async function(deferred) {
      try {
        await client.transform(longText, 'bold');
        deferred.resolve();
      } catch (error) {
        deferred.reject(error);
      }
    }
  })
  .add('Batch transform', {
    defer: true,
    fn: async function(deferred) {
      try {
        await client.batchTransform([
          { text: shortText, style: 'bold' },
          { text: mediumText, style: 'italic' },
          { text: longText, style: 'script' }
        ]);
        deferred.resolve();
      } catch (error) {
        deferred.reject(error);
      }
    }
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ async: true });
```

## Production Deployment

### Environment Configuration

**Environment Variables**:
```bash
# .env.production
TEXTSTYLER_API_KEY=sk_live_your_production_key
TEXTSTYLER_BASE_URL=https://api.textstyler.com/v1
TEXTSTYLER_TIMEOUT=30000
TEXTSTYLER_RETRY_ATTEMPTS=3
TEXTSTYLER_CACHE_TTL=3600
TEXTSTYLER_RATE_LIMIT=1000
TEXTSTYLER_DEBUG=false

# Redis configuration for caching
REDIS_URL=redis://localhost:6379
REDIS_TTL=3600

# Monitoring
SENTRY_DSN=your_sentry_dsn
NEW_RELIC_LICENSE_KEY=your_newrelic_key
```

**Docker Configuration**:
```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Change ownership
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Start application
CMD ["npm", "start"]
```

**Docker Compose**:
```yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - TEXTSTYLER_API_KEY=${TEXTSTYLER_API_KEY}
      - REDIS_URL=redis://redis:6379
    depends_on:
      - redis
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 30s
      timeout: 10s
      retries: 3

volumes:
  redis_data:
```

### Kubernetes Deployment

**Deployment Configuration**:
```yaml
# k8s/deployment.yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: textstyler-app
  labels:
    app: textstyler-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: textstyler-app
  template:
    metadata:
      labels:
        app: textstyler-app
    spec:
      containers:
      - name: app
        image: your-registry/textstyler-app:latest
        ports:
        - containerPort: 3000
        env:
        - name: TEXTSTYLER_API_KEY
          valueFrom:
            secretKeyRef:
              name: textstyler-secrets
              key: api-key
        - name: REDIS_URL
          value: "redis://redis-service:6379"
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5

---
apiVersion: v1
kind: Service
metadata:
  name: textstyler-service
spec:
  selector:
    app: textstyler-app
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: LoadBalancer

---
apiVersion: v1
kind: Secret
metadata:
  name: textstyler-secrets
type: Opaque
data:
  api-key: <base64-encoded-api-key>
```

### Health Checks and Monitoring

**Health Check Endpoint**:
```javascript
// health.js
const express = require('express');
const TextStylerClient = require('./textstyler-client');

const router = express.Router();
const client = new TextStylerClient(process.env.TEXTSTYLER_API_KEY);

router.get('/health', async (req, res) => {
  const checks = {
    timestamp: new Date().toISOString(),
    status: 'healthy',
    checks: {}
  };

  try {
    // Check TextStyler API
    const start = Date.now();
    await client.transform('test', 'bold');
    checks.checks.textstyler_api = {
      status: 'healthy',
      response_time_ms: Date.now() - start
    };
  } catch (error) {
    checks.status = 'unhealthy';
    checks.checks.textstyler_api = {
      status: 'unhealthy',
      error: error.message
    };
  }

  // Check Redis (if using caching)
  if (process.env.REDIS_URL) {
    try {
      const redis = require('redis');
      const redisClient = redis.createClient({ url: process.env.REDIS_URL });
      await redisClient.ping();
      checks.checks.redis = { status: 'healthy' };
      await redisClient.quit();
    } catch (error) {
      checks.status = 'unhealthy';
      checks.checks.redis = {
        status: 'unhealthy',
        error: error.message
      };
    }
  }

  const statusCode = checks.status === 'healthy' ? 200 : 503;
  res.status(statusCode).json(checks);
});

router.get('/ready', (req, res) => {
  // Simple readiness check
  res.status(200).json({
    status: 'ready',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
```

## Monitoring and Analytics

### Application Monitoring

**Prometheus Metrics**:
```javascript
// metrics.js
const promClient = require('prom-client');

// Create a Registry
const register = new promClient.Registry();

// Add default metrics
promClient.collectDefaultMetrics({ register });

// Custom metrics
const httpRequestDuration = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.5, 1, 2, 5]
});

const textstylerApiCalls = new promClient.Counter({
  name: 'textstyler_api_calls_total',
  help: 'Total number of TextStyler API calls',
  labelNames: ['style', 'status']
});

const textstylerApiDuration = new promClient.Histogram({
  name: 'textstyler_api_duration_seconds',
  help: 'Duration of TextStyler API calls',
  labelNames: ['style'],
  buckets: [0.01, 0.05, 0.1, 0.5, 1, 2]
});

const textstylerCacheHits = new promClient.Counter({
  name: 'textstyler_cache_hits_total',
  help: 'Total number of cache hits',
  labelNames: ['type']
});

// Register metrics
register.registerMetric(httpRequestDuration);
register.registerMetric(textstylerApiCalls);
register.registerMetric(textstylerApiDuration);
register.registerMetric(textstylerCacheHits);

// Middleware to track HTTP requests
function trackHttpRequests(req, res, next) {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    httpRequestDuration
      .labels(req.method, req.route?.path || req.path, res.statusCode)
      .observe(duration);
  });
  
  next();
}

// Function to track TextStyler API calls
function trackApiCall(style, duration, success) {
  textstylerApiCalls
    .labels(style, success ? 'success' : 'error')
    .inc();
  
  if (success) {
    textstylerApiDuration
      .labels(style)
      .observe(duration / 1000);
  }
}

// Function to track cache hits
function trackCacheHit(type) {
  textstylerCacheHits
    .labels(type)
    .inc();
}

module.exports = {
  register,
  trackHttpRequests,
  trackApiCall,
  trackCacheHit
};
```

**Metrics Endpoint**:
```javascript
// Add to your Express app
const { register, trackHttpRequests } = require('./metrics');

app.use(trackHttpRequests);

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});
```

### Error Tracking

**Sentry Integration**:
```javascript
// sentry.js
const Sentry = require('@sentry/node');
const { ProfilingIntegration } = require('@sentry/profiling-node');

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    new ProfilingIntegration(),
  ],
  tracesSampleRate: 0.1,
  profilesSampleRate: 0.1,
  environment: process.env.NODE_ENV,
  beforeSend(event) {
    // Filter out sensitive information
    if (event.request?.headers?.authorization) {
      event.request.headers.authorization = '[Filtered]';
    }
    return event;
  }
});

// Custom error handler for TextStyler errors
function handleTextStylerError(error, context = {}) {
  Sentry.withScope((scope) => {
    scope.setTag('component', 'textstyler');
    scope.setContext('textstyler', context);
    
    if (error instanceof TextStylerError) {
      scope.setLevel('warning');
      scope.setTag('error_type', error.type);
    } else {
      scope.setLevel('error');
    }
    
    Sentry.captureException(error);
  });
}

module.exports = {
  Sentry,
  handleTextStylerError
};
```

### Logging

**Structured Logging with Winston**:
```javascript
// logger.js
const winston = require('winston');

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: {
    service: 'textstyler-app',
    version: process.env.APP_VERSION || '1.0.0'
  },
  transports: [
    new winston.transports.File({ 
      filename: 'logs/error.log', 
      level: 'error' 
    }),
    new winston.transports.File({ 
      filename: 'logs/combined.log' 
    })
  ]
});

// Add console transport in development
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }));
}

// Custom logging functions
function logApiCall(method, endpoint, duration, success, metadata = {}) {
  logger.info('API call completed', {
    type: 'api_call',
    method,
    endpoint,
    duration_ms: duration,
    success,
    ...metadata
  });
}

function logTextStylerCall(text, style, duration, success, error = null) {
  const logData = {
    type: 'textstyler_call',
    text_length: text.length,
    style,
    duration_ms: duration,
    success
  };

  if (error) {
    logData.error = error.message;
    logData.error_type = error.type || 'unknown';
  }

  logger.info('TextStyler API call', logData);
}

module.exports = {
  logger,
  logApiCall,
  logTextStylerCall
};
```

### Performance Analytics

**Custom Analytics Dashboard**:
```javascript
// analytics.js
class AnalyticsCollector {
  constructor() {
    this.metrics = {
      apiCalls: new Map(),
      responseTime: [],
      errorRate: new Map(),
      cacheHitRate: { hits: 0, misses: 0 }
    };
  }

  recordApiCall(style, duration, success) {
    // Track calls by style
    const styleStats = this.metrics.apiCalls.get(style) || { count: 0, totalTime: 0 };
    styleStats.count++;
    styleStats.totalTime += duration;
    this.metrics.apiCalls.set(style, styleStats);

    // Track response times
    this.metrics.responseTime.push({
      timestamp: Date.now(),
      duration,
      style,
      success
    });

    // Keep only last 1000 entries
    if (this.metrics.responseTime.length > 1000) {
      this.metrics.responseTime = this.metrics.responseTime.slice(-1000);
    }

    // Track error rate
    const errorStats = this.metrics.errorRate.get(style) || { success: 0, error: 0 };
    if (success) {
      errorStats.success++;
    } else {
      errorStats.error++;
    }
    this.metrics.errorRate.set(style, errorStats);
  }

  recordCacheHit(hit) {
    if (hit) {
      this.metrics.cacheHitRate.hits++;
    } else {
      this.metrics.cacheHitRate.misses++;
    }
  }

  getAnalytics() {
    const now = Date.now();
    const oneHourAgo = now - (60 * 60 * 1000);

    // Recent response times (last hour)
    const recentResponseTimes = this.metrics.responseTime
      .filter(entry => entry.timestamp > oneHourAgo);

    const avgResponseTime = recentResponseTimes.length > 0
      ? recentResponseTimes.reduce((sum, entry) => sum + entry.duration, 0) / recentResponseTimes.length
      : 0;

    // Style usage statistics
    const styleUsage = Array.from(this.metrics.apiCalls.entries())
      .map(([style, stats]) => ({
        style,
        count: stats.count,
        avgDuration: stats.totalTime / stats.count
      }))
      .sort((a, b) => b.count - a.count);

    // Error rates
    const errorRates = Array.from(this.metrics.errorRate.entries())
      .map(([style, stats]) => ({
        style,
        errorRate: stats.error / (stats.success + stats.error),
        totalCalls: stats.success + stats.error
      }));

    // Cache hit rate
    const totalCacheRequests = this.metrics.cacheHitRate.hits + this.metrics.cacheHitRate.misses;
    const cacheHitRate = totalCacheRequests > 0
      ? this.metrics.cacheHitRate.hits / totalCacheRequests
      : 0;

    return {
      timestamp: new Date().toISOString(),
      summary: {
        avgResponseTime: Math.round(avgResponseTime),
        totalApiCalls: recentResponseTimes.length,
        cacheHitRate: Math.round(cacheHitRate * 100) / 100
      },
      styleUsage,
      errorRates,
      recentActivity: recentResponseTimes.slice(-10)
    };
  }
}

const analytics = new AnalyticsCollector();

module.exports = analytics;
```

## Conclusion

This comprehensive guide provides everything developers need to successfully integrate text styling APIs into their applications. From basic implementation to advanced optimization techniques, the examples and best practices covered here will help you build robust, scalable solutions that leverage the power of Unicode text styling.

**Key takeaways for successful API integration**:

1. **Start with proper authentication** and security practices
2. **Implement comprehensive error handling** and retry logic
3. **Use caching strategically** to improve performance and reduce costs
4. **Monitor and measure** your API usage and performance
5. **Test thoroughly** across different scenarios and edge cases
6. **Plan for scale** with proper rate limiting and queue management

**Next steps**:

- **Explore the official SDKs** for your preferred programming language
- **Set up monitoring and alerting** for your production deployment
- **Implement caching** to optimize performance and costs
- **Create comprehensive tests** to ensure reliability
- **Monitor usage patterns** to optimize your integration

The text styling API ecosystem continues to evolve, with new features and optimizations being added regularly. Stay updated with the latest documentation and best practices to make the most of these powerful tools.

---

**Ready to start building with text styling APIs?** Get your API key and explore our comprehensive documentation and SDKs.

**[Get started with TextStyler API →](https://textstyler.com/api)**

*Have questions about API integration? Join our developer community or reach out to our support team for assistance!*