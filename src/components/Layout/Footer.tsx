import React from 'react';
import Link from 'next/link';
import { config } from '../../../config';
import { Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:py-12 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            {/* <div className="flex items-center space-x-2">
              <div className="bg-primary-foreground p-2 rounded-lg">
                <div className="text-primary font-bold text-xl">EM</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">EasyMove</h3>
                <p className="text-sm opacity-90">Professional Removals</p>
              </div>
            </div> */}
            <Image src="/assets/whiteMainLogo.png" alt="Galaxy Removal Logo" width={190} height={20} className="rounded -ml-8 -mb-8 -mt-10"/>
            <p className="text-sm opacity-90 leading-relaxed">
              Professional moving and removal services across the UK. 
              Trusted by thousands of families and businesses for safe, 
              reliable relocations.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 opacity-75 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter className="h-5 w-5 opacity-75 hover:opacity-100 cursor-pointer transition-opacity" />
              <Instagram className="h-5 w-5 opacity-75 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>

          {/* Services */}
          <div className="hidden md:flex md:flex-col ">
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="opacity-90 hover:opacity-100 transition-opacity">Residential Moving</Link></li>
              <li><Link href="/services" className="opacity-90 hover:opacity-100 transition-opacity">Commercial Relocations</Link></li>
              
              <li><Link href="/services" className="opacity-90 hover:opacity-100 transition-opacity">Packing Services</Link></li>
              <li><Link href="/services" className="opacity-90 hover:opacity-100 transition-opacity">Storage Solutions</Link></li>
              <li><Link href="/services" className="opacity-90 hover:opacity-100 transition-opacity">Furniture Assembly</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="hidden md:flex md:flex-col ">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="opacity-90 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link href="/blog" className="opacity-90 hover:opacity-100 transition-opacity">Moving Tips</Link></li>
              <li><Link href="/contact" className="opacity-90 hover:opacity-100 transition-opacity">Get Quote</Link></li>
              <li><Link href="/contact" className="opacity-90 hover:opacity-100 transition-opacity">Contact Us</Link></li>
              <li><a href="#reviews" className="opacity-90 hover:opacity-100 transition-opacity">Reviews</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex md:flex-col ">
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <a href={`tel:${config.phoneNumber}`} className="flex hover:cursor-pointer items-start space-x-3">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">{config.phoneNumber}</p>
                  <p className="opacity-75">Free consultation</p>
                </div>
              </a>
              {/* <a href={`mailto:${config.email}`} className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">{config.email}</p>
                  <p className="opacity-75">24/7 support</p>
                </div>
              </a> */}
              <a
                href={config.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3"
              >
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">West London, UK</p>
                  <p className="opacity-75">Nationwide coverage</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light/20 sm:mt-8 mt-4 sm:pt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="opacity-75">
            © 2025 GalaxyRemovals. All rights reserved.
          </p>
          <div className="hidden sm:flex space-x-6 sm:mt-4 md:mt-0">
            <Link href="/privacy" className=" opacity-75 hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="opacity-75 hover:opacity-100 transition-opacity">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;