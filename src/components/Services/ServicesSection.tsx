import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Building, 
  Globe, 
  Package, 
  Warehouse, 
  Wrench,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';


const services = [
  {
    icon: Home,
    title: 'House & Flat Removals',
    description: 'Professional residential moving services for all property types with careful handling.',
    features: ['All property sizes', 'Careful handling', 'Free quotes'],
    price: 'Call for quote',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Building,
    title: 'Office Removals',
    description: 'Commercial relocations with minimal business disruption and secure equipment handling.',
    features: ['Weekend moves', 'IT equipment care', 'Minimal downtime'],
    price: 'Call for quote',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Globe,
    title: 'National & International',
    description: 'Long-distance and international moves with secure transportation and customs handling.',
    features: ['Nationwide coverage', 'International moves', 'Customs support'],
    price: 'Call for quote',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Package,
    title: 'Man and Van Service',
    description: 'Flexible man and van service for smaller moves, deliveries, and collections.',
    features: ['Flexible booking', 'Small to medium loads', 'Same day service'],
    price: 'Call for quote',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Warehouse,
    title: 'Storage & Packing',
    description: 'Professional packing services and secure storage solutions for your belongings.',
    features: ['Professional packing', 'Secure storage', 'Flexible terms'],
    price: 'Call for quote',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Wrench,
    title: 'IKEA Services',
    description: 'IKEA delivery and furniture assembly services with expert installation.',
    features: ['IKEA deliveries', 'Professional assembly', 'Tools provided'],
    price: 'Call for quote',
    color: 'from-red-500 to-red-600'
  }
];

const ServicesSection = () => {
  return (
    <section className="sm:py-20 py-10 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-display text-primary mb-4">
            Our Moving Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Call or text 24/7 for free quotes. We provide man and van & removal services 
            from London, Guildford, Reading, Watford, Aylesbury, Redhill, Heathrow to anywhere in the UK.
          </p>
        </div>

        {/* Additional Services List */}
        <div className="bg-card rounded-2xl p-8 mb-12 shadow-card-custom border border-border">
          <h3 className="text-section text-primary mb-6 text-center">Complete Service List</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Student moves',
              'eBay collections', 
              'House/flat/garage clearance',
              'Piano removals',
              'Motorbike Transport',
              'Same day delivery service',
              'Luton vans service'
            ].map((service, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-4 w-4 text-success mr-3 flex-shrink-0" />
                <span className="text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl shadow-card-custom border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in group overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Icon Header with Enhanced Design */}
              <div className={`bg-gradient-to-br ${service.color} p-6 rounded-t-2xl relative overflow-hidden`}>
                {/* Animated Background Patterns */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/20 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/15 rounded-full group-hover:scale-125 transition-transform duration-500 delay-100"></div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-8 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-200">
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                </div>
                
                {/* Content Container */}
                <div className="relative z-10">
                  <div className="bg-white/25 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                    <service.icon className="h-10 w-10 text-white drop-shadow-sm" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                    {service.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <p className="text-sm font-semibold text-white">{service.price}</p>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse delay-300"></div>
                      <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse delay-500"></div>
                    </div>
                  </div>
                </div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-success mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href="/contact" >
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/20 hover:cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-card rounded-2xl p-8 shadow-card-custom border border-border max-w-2xl mx-auto">
            <h3 className="text-section text-primary mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Every move is unique. Contact us for a personalized quote and service plan 
              that perfectly fits your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="flex justify-center">
                <Button className="bg-cta-gradient hover:opacity-90 hover:cursor-pointer shadow-button-custom flex-1">
                  Contact Us Today
                </Button>
              </Link>
              <Link href="/services" className="flex justify-center ">
                <Button variant="outline" className="flex-1 hover:cursor-pointer">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;