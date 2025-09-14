'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import LocationMap from '@/components/Map/LocationMap';
import GetQuote from '@/components/common/get-quote';
import { config } from '../../../config';

const Contact = () => {

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground sm:py-20 py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold sm:font-extrabold mb-6 animate-fade-up">
            Get In Touch
          </h1>
          <p className="sm:text-xl text-lg max-w-3xl mx-auto animate-fade-up">
            Ready to make your move? Contact us today for a free consultation 
            and quote. Our friendly team is here to help every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="sm:py-20 py-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-up">
              <h2 className="text-display text-primary mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-card-custom border border-border">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <a href={`tel:${config.phoneNumber}`} className="text-lg font-medium">
                      {config.phoneNumber}
                    </a>
                    <p className="text-sm text-muted-foreground">Free calls from UK landlines and mobiles</p>
                  </div>
                </div>

                {/* Email */}
                {/* <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-card-custom border border-border">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <a href={`mailto:${config.email}`} className="text-lg font-medium">{config.email}</a>
                    <p className="text-sm text-muted-foreground">We&apos;ll respond within 2 hours</p>
                  </div>
                </div> */}

                {/* Address */}
                <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-card-custom border border-border">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Head Office</h3>
                    <p className="text-lg font-medium">Hayes, West London at 13 Coronation Road</p>
                    <p className="text-muted-foreground">Serving London and surrounding areas</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-card-custom border border-border">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Business Hours</h3>
                    <div className="space-y-1 text-sm">
                      <p><span className="font-medium">Mon-Fri:</span> 7:00 AM - 7:00 PM</p>
                      <p><span className="font-medium">Saturday:</span> 8:00 AM - 5:00 PM</p>
                      <p><span className="font-medium">Sunday:</span> 9:00 AM - 4:00 PM</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Emergency moves available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-8 p-6 bg-cta-gradient rounded-xl text-white">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-6 w-6 mr-3" />
                  <h3 className="text-lg font-semibold">Need Immediate Help?</h3>
                </div>
                <p className="mb-4">Call us now for urgent moving requirements or emergency assistance.</p>
                <a href={`tel:${config.phoneNumber}`}>
                  <Button 
                    variant="outline" 
                    className="border-white/30 hover:cursor-pointer hover:bg-white hover:text-primary text-primary"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now: {config.phoneNumber}
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-scale-in">
              <div className="bg-card rounded-2xl p-8 shadow-card-custom border border-border">
                <h2 className="text-display text-primary mb-6">Get Your Free Quote</h2>
                  <GetQuote/>
                <div className="text-xs text-muted-foreground mt-4">
                  <p className="mb-2"><strong>We pickup from:</strong> London, Guildford, Reading, Watford, Aylesbury, Redhill, Heathrow</p>
                  <p><strong>Call or text 24/7</strong> for immediate assistance</p>
                </div>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  No spam. Your information is safe with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl p-8 shadow-card-custom border border-border">
            <h3 className="text-section text-primary mb-4 text-center">Find Our Office</h3>
            <LocationMap />
            <p className="text-muted-foreground text-center mt-4">
              Located in Hayes, West London at 13 Coronation Road (UB3 4JS), with easy access to all major transport links. We serve London, Guildford, Reading, Watford, Aylesbury, Redhill, and Heathrow areas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;