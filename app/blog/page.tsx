import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog - TextStyler | Professional Text Formatting Insights",
  description: "Discover the latest trends, tips, and best practices for Unicode text styling, LinkedIn formatting, and professional communication.",
  robots: "index, follow"
};

const blogPosts = [
  {
    slug: "linkedin-text-formatting-guide-2025",
    title: "LinkedIn Text Formatting: The Complete Guide to Stand Out in 2025",
    excerpt: "Master LinkedIn text formatting with Unicode styles. Learn how to create bold, italic, and stylized text that increases engagement by 340%.",
    author: "Sarah Chen",
    date: "2025-01-15",
    readTime: "12 min read",
    category: "LinkedIn Marketing",
    featured: true
  },
  {
    slug: "unicode-text-styling-complete-guide",
    title: "Unicode Text Styling: The Complete Guide for Professionals in 2025",
    excerpt: "Master Unicode text styling with our comprehensive guide. Learn how to create bold, italic, and decorative text that works across all platforms.",
    author: "Michael Rodriguez",
    date: "2025-01-16",
    readTime: "15 min read",
    category: "Text Formatting"
  },
  {
    slug: "social-media-text-formatting-trends-2025",
    title: "Social Media Text Formatting Trends 2025: What's Working Now",
    excerpt: "Discover the latest social media text formatting trends for 2025. Learn which Unicode styles boost engagement across Instagram, TikTok, LinkedIn, and Twitter.",
    author: "Emma Thompson",
    date: "2025-01-17",
    readTime: "10 min read",
    category: "Social Media Marketing"
  },
  {
    slug: "professional-email-text-formatting-guide",
    title: "Professional Email Text Formatting: Boost Open Rates by 250% in 2025",
    excerpt: "Master professional email text formatting with Unicode styles. Learn how to create compelling subject lines and email content that increases open rates by 250%.",
    author: "David Kim",
    date: "2025-01-18",
    readTime: "12 min read",
    category: "Email Marketing"
  },
  {
    slug: "text-styling-api-developers-guide",
    title: "Text Styling API for Developers: Complete Integration Guide 2025",
    excerpt: "Learn how to integrate Unicode text styling APIs into your applications. Complete developer guide with code examples, best practices, and performance optimization.",
    author: "Alex Chen",
    date: "2025-01-19",
    readTime: "18 min read",
    category: "Developer Resources"
  }
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-200 dark:border-blue-800">
              <Calendar className="w-4 h-4" />
              Latest Insights & Trends
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
              TextStyler Blog
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover the latest trends, tips, and best practices for Unicode text styling, 
              professional communication, and digital content optimization.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800 rounded-3xl p-8 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
                
                <Link href={`/blog/${featuredPost.slug}`} className="group">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4">
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <time className="text-xs text-slate-500 dark:text-slate-400">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get the latest insights on text formatting, professional communication, and digital marketing 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}