'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts, featuredPost, BlogPost } from './blog-posts';

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  const getFilteredPosts = (category: string) => {
    if (category === "all") return blogPosts;
    return blogPosts.filter(post => post.category.toLowerCase().startsWith(category.toLowerCase()));
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground sm:py-20 py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold sm:font-extrabold mb-6 animate-fade-up">
            Moving Tips & Guides
          </h1>
          <p className="sm:text-xl text-lg max-w-3xl mx-auto animate-fade-up">
            Expert advice, practical tips, and comprehensive guides to make your 
            move as smooth and stress-free as possible.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="sm:py-20 py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-hero-custom border border-border overflow-hidden animate-fade-up">
              <div className="relative w-full h-64">
                <Image
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  fill
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full sm:text-sm text-xs font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-muted-foreground sm:text-sm text-xs ">
                    Featured Post
                  </span>
                </div>
                
                <h2 className="sm:text-4xl text-2xl font-bold text-primary mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                
                <p className="sm:text-lg text-base text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center sm:justify-between sm:flex-row flex-col">
                  <div className="flex items-center sm:gap-6 gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center sm:gap-2 gap-1">
                      <User className="h-4 w-4" />
                      <span className="text-xs whitespace-nowrap">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-xs whitespace-nowrap">{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center sm:gap-2 gap-1">
                      <Clock className="h-4 w-4" />
                      <span className="text-xs truncate">{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button className="sm:mt-0 mt-1 bg-cta-gradient hover:cursor-pointer hover:opacity-90 shadow-button-custom">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid with Tabs */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 max-w-2xl mx-auto">
              <TabsTrigger value="all" className="truncate">All Posts</TabsTrigger>
              <TabsTrigger value="moving" className="truncate">Moving Tips</TabsTrigger>
              <TabsTrigger value="packing" className="truncate">Packing Tips</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getFilteredPosts("all").slice(0, visiblePosts).map((post, index) => (
                  <BlogCard key={index} post={post} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="moving" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getFilteredPosts("moving").map((post, index) => (
                  <BlogCard key={index} post={post} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="packing" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getFilteredPosts("packing").map((post, index) => (
                  <BlogCard key={index} post={post} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Load More for All Posts tab only */}
          {activeTab === "all" && showLoadMore && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  setVisiblePosts(prev => {
                    const newCount = prev + 3;
                    if (newCount >= blogPosts.length) {
                      setShowLoadMore(false);
                    }
                    return Math.min(newCount, blogPosts.length);
                  });
                }}
              >
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="sm:py-20 py-10 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-card rounded-2xl p-12 shadow-hero-custom border border-border max-w-2xl mx-auto">
            <h2 className="text-display text-primary mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest moving tips, industry insights, 
              and exclusive offers delivered straight to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="bg-cta-gradient hover:opacity-90 shadow-button-custom">
                Subscribe
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

// Blog Card Component for better readability
const BlogCard = ({ post, index }: { post: BlogPost, index: number }) => (
  <article 
    className="bg-card rounded-xl shadow-card-custom border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in group overflow-hidden"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="relative w-full h-48 object-cover ">
      <Image
        src={post.image} 
        alt={post.title}
        fill
        className="transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    
    <div className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/20">
          {post.category}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-primary mb-3 leading-tight group-hover:text-primary/80 cursor-pointer transition-colors duration-200 line-clamp-2">
        {post.title}
      </h3>
      
      <p className="text-muted-foreground mb-6 text-sm leading-relaxed line-clamp-3">
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 pb-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="flex items-center gap-1 mr-1">
            <Clock className="h-3 w-3" />
            <span className="whitespace-nowrap">{post.readTime}</span>
          </div>
        </div>
        <span className="text-xs text-muted-foreground truncate">{post.date}</span>
      </div>
      
      <div className="flex items-center justify-between">
        <Link href={`/blog/${post.slug}`}>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-primary hover:cursor-pointer hover:text-primary/80 hover:bg-primary/5 transition-all duration-200 font-semibold"
          >
            Read Full Article
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  </article>
);

export default Blog;