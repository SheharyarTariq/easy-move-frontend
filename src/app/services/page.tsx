import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Building, 
  Package, 
  Warehouse, 
  Wrench,
  CheckCircle,
  ArrowRight,
  Phone 
} from 'lucide-react';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Moving',
      description: 'Professional home relocations with complete care and attention to detail.',
      features: [
        'Free home survey and quote',
        'Professional packing materials',
        'Furniture disassembly/reassembly',
        'Appliance disconnection/connection',
        'Fragile items specialist handling',
        'Same-day local moves available'
      ],
      pricing: 'Starting from £299 for 1-bedroom properties'
    },
    {
      icon: Building,
      title: 'Commercial Relocations',
      description: 'Office and business moves designed to minimize downtime and disruption.',
      features: [
        'Project management service',
        'Weekend and evening moves',
        'IT equipment specialist handling',
        'File and document management',
        'Furniture planning and setup',
        'Minimal business disruption'
      ],
      pricing: 'Custom quotes based on requirements'
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground sm:py-20 py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold sm:font-extrabold mb-6 animate-fade-up">
            Professional Moving Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 animate-fade-up">
            Comprehensive moving solutions for every need. From local residential moves 
            to international relocations, we have the expertise and resources to make 
            your move seamless.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-button-custom animate-scale-in"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="sm:py-20 py-10">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="bg-card rounded-2xl p-8 shadow-card-custom border border-border">
                      <div className="flex items-center mb-6">
                        <div className="bg-primary p-4 rounded-lg mr-4">
                          <service.icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div>
                          <h2 className="sm:text-4xl text-2xl font-bold text-primary">{service.title}</h2>
                          <p className="text-muted-foreground text-sm sm:text-base">{service.description}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                            <span className="sm:text-sm text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-secondary/50 rounded-lg p-4 mb-6">
                        <h4 className="font-semibold text-primary mb-2">Pricing</h4>
                        <p className="text-muted-foreground">{service.pricing}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link href="/contact" className="flex justify-center">
                          <Button className="bg-cta-gradient hover:opacity-90 shadow-button-custom flex-1">
                            Get Quote for This Service
                          </Button>
                        </Link>
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          // onClick={() => alert('Call us now: 08001234567')}
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          08001234567
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="space-y-6">
                      <h3 className="text-section text-primary">Why Choose Our {service.title}?</h3>
                      <div className="prose prose-lg text-muted-foreground">
                        <p>
                          Our {service.title.toLowerCase()} service is designed with your peace of mind in mind. 
                          We understand that every move is unique, which is why we provide personalized 
                          solutions tailored to your specific requirements.
                        </p>
                        <p>
                          With over 15 years of experience and thousands of successful moves, our team 
                          has the expertise and equipment to handle any challenge that may arise during 
                          your relocation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="sm:py-20 py-10 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-display text-primary mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete your moving experience with our comprehensive range of additional services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-card-custom border border-border text-center">
              <Package className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Packing Services</h3>
              <p className="text-muted-foreground mb-4">Professional packing with quality materials</p>
              <p className="text-primary font-semibold">From £89</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card-custom border border-border text-center">
              <Warehouse className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Storage Solutions</h3>
              <p className="text-muted-foreground mb-4">Secure, climate-controlled facilities</p>
              <p className="text-primary font-semibold">From £25/week</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card-custom border border-border text-center">
              <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Furniture Assembly</h3>
              <p className="text-muted-foreground mb-4">Expert assembly and installation</p>
              <p className="text-primary font-semibold">From £45/hour</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sm:py-20 py-10">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-card rounded-2xl sm:p-12 p-6 shadow-hero-custom border border-border max-w-4xl mx-auto">
            <h2 className="text-display text-primary mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote for your move today. Our friendly team is standing by 
              to help make your relocation as smooth as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="flex justify-center">
                <Button size="lg" className="bg-cta-gradient hover:opacity-90 shadow-button-custom  flex-1">
                  Free Quote Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
                <Button 
                  size="lg" 
                  variant="outline"
                  // onClick={() => alert('Call us now: 08001234567')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  08001234567
                </Button>
            </div>
          </div>
        </div>
      </section> 
    </main>
  );
};

export default Services;