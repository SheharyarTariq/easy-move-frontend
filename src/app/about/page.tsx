import React from "react";
import { CheckCircle, Users, Award, Shield } from "lucide-react";
import Map from "@/components/common/map";
import {
  leadershipTeam,
  values,
  whyChooseUsFeatures,
} from "@/lib/constants";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Galaxy Removals | Trusted House Removal Experts",
  description:
    "Learn about Galaxy Removals, a trusted UK moving company with over 15 years of experience. We specialize in house removal services, furniture removals, and affordable relocations across the UK.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Galaxy Removals | Trusted House Removal Experts",
    description:
      "Founded in 2009, Galaxy Removals has grown into one of the UK's most trusted moving companies. Discover our story, values, and commitment to stress-free relocations.",
    url: "https://galaxyremovals.co.uk/about",
    images: ["/assets/blueLogo.png"],
  },
  twitter: {
    card: "summary",
    title: "About Galaxy Removals | Trusted House Removal Experts",
    description:
      "With 15+ years of experience, Galaxy Removals provides affordable and professional moving services across the UK.",
    images: ["/assets/blueLogo.png"],
  },
};

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
                  {whyChooseUsFeatures.map((feature, index) => (
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
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-card rounded-xl p-8 shadow-card-custom border border-border text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
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
            {leadershipTeam.map((member, index) => (
              <div
                key={member.name}
                className="bg-card rounded-xl p-6 shadow-card-custom border border-border text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* For better E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), I recommend using real photos of your team. */}
                {/* Example: <Image src={member.image} alt={member.name} width={96} height={96} className="rounded-full mx-auto mb-4" /> */}
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
