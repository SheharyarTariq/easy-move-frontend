import React from "react";
import { CheckCircle, Users, Award, Shield } from "lucide-react";
import Map from "@/components/common/map";

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground sm:py-20 py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold sm:font-extrabold mb-6 animate-fade-up">
            About Galaxy Removals
          </h1>
          <p className="sm:text-xl text-lg  max-w-3xl mx-auto animate-fade-up">
            Professional moving services you can trust. We&apos;ve been helping
            families and businesses relocate safely and efficiently for over 15
            years.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="sm:py-20 py-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center sm:mb-16 mb-4">
            <div className="animate-fade-up">
              <h2 className="text-display text-primary mb-6">Our Story</h2>
              <div className="prose prose-lg text-muted-foreground space-y-6">
                <p>
                  Founded in 2009, GalaxyRemovals began with a simple mission:
                  to make moving stress-free and affordable for everyone. What
                  started as a small family business has grown into one of the
                  UK&apos;s most trusted moving companies.
                </p>
                <p>
                  Over the years, we&apos;ve helped thousands of families and
                  businesses relocate across the UK and internationally. Our
                  commitment to exceptional service, competitive pricing, and
                  customer satisfaction has earned us numerous awards and a
                  4.9-star rating.
                </p>
                <p>
                  Today, we operate a modern fleet of vehicles, employ highly
                  trained professionals, and maintain secure storage facilities
                  across the country. Despite our growth, we&apos;ve never lost
                  sight of our core values: treating every customer like family
                  and every move as if it were our own.
                </p>
              </div>
            </div>

            <div className="animate-scale-in">
              <div className="bg-card rounded-2xl p-8 shadow-card-custom border border-border">
                <h3 className="text-section text-primary mb-6 text-center">
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  {[
                    "Over 15 years of experience",
                    "5,000+ successful moves completed",
                    "Fully licensed and insured",
                    "4.9/5 star customer rating",
                    "Modern fleet and equipment",
                    "24/7 customer support",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="sm:py-20 py-10 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-display text-primary mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and ensure every customer
              receives the exceptional service they deserve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-card-custom border border-border text-center animate-scale-in">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-4 text-primary">
                Trust & Reliability
              </h3>
              <p className="text-muted-foreground">
                We understand you&apos;re trusting us with your most precious
                belongings. That&apos;s why we&apos;re fully licensed, insured,
                and committed to handling every item with the utmost care.
              </p>
            </div>

            <div
              className="bg-card rounded-xl p-8 shadow-card-custom border border-border text-center animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-4 text-primary">
                Customer First
              </h3>
              <p className="text-muted-foreground">
                Every decision we make puts our customers first. From
                transparent pricing to flexible scheduling, we work around your
                needs, not the other way around.
              </p>
            </div>

            <div
              className="bg-card rounded-xl p-8 shadow-card-custom border border-border text-center animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-4 text-primary">
                Excellence
              </h3>
              <p className="text-muted-foreground">
                We&apos;re not satisfied with good enough. Our team is trained
                to the highest standards, and we continuously invest in better
                equipment and processes to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="sm:py-20 py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-display text-primary mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our experienced leadership team brings decades of industry
              expertise and a passion for exceptional customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Junaid Asif",
                role: "Founder & CEO",
                description:
                  "15+ years in logistics and moving industry. Committed to innovation and customer satisfaction.",
              },
              {
                name: "Shahzaib Asif",
                role: "Operations Director",
                description:
                  "Expert in operational efficiency and quality control. Ensures every move meets our high standards.",
              },
              {
                name: "Akhter",
                role: "Customer Relations Manager",
                description:
                  "Dedicated to customer experience and support. Available 24/7 to assist with any concerns.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card-custom border border-border text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-secondary/30">
        <Map />
      </section>
    </main>
  );
};

export default About;
