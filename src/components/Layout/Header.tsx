'use client'
import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from '@/components/ui/button';
import {Menu, X, Phone, Mail} from 'lucide-react';
import { config } from '../../../config';

const Header = () => {
  const location = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && location === '/') return true;
    return href !== '/' && location.startsWith(href);
  };

  return (
    <header className="border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/90">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href={`tel:${config.phoneNumber}`} className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{config.phoneNumber}</span>
            </a>
            {/* <a href={`mailto:${config.email}`} className="flex items-center gap-2">
              <Mail className="hidden sm:flex h-4 w-4" />
              <span>{config.email}</span>
            </a> */}
          </div>
          <div className="hidden md:block">
            <span>Free Quotes • Professional Service • Fully Insured</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-hero-gradient p-2 rounded-lg">
              <div className="text-primary-foreground font-bold text-xl">EM</div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">EasyMove</h1>
              <p className="text-xs text-muted-foreground">Professional Removals</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a href={`tel:${config.phoneNumber}`}>
              <Button variant="outline" className="hidden lg:flex hover:cursor-pointer border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </a>
            <Link href="/contact">
              <Button className="hidden md:flex bg-cta-gradient hover:cursor-pointer hover:opacity-90 shadow-button-custom">
                Get Free Quote
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium transition-colors hover:text-primary px-2 py-1 ${
                    isActive(item.href)
                      ? 'text-primary bg-secondary rounded'
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact">
                <Button className="mt-4 bg-cta-gradient hover:opacity-90 shadow-button-custom w-full">
                  Get Free Quote
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;