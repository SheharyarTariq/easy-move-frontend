"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import { config } from "../../../config";
import GetQuote from "../common/get-quote";

const HeroSection = () => {
  const [isFormExpanded, setIsFormExpanded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/assets/hero-moving.jpg')` }}
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:py-20 py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold sm:font-extrabold text-primary-foreground mb-6 leading-tight">
              Professional Moving Services
              <span className="block text-accent">You Can Trust</span>
            </h1>

            <p className="sm:text-xl text-lg text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
              Experience stress-free relocations with our expert team. From
              residential moves to commercial relocations, we handle everything
              with care and precision.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 content-center ">
              {[
                "Fully Licensed & Insured",
                "Free No-Obligation Quotes",
                "Professional Packing Service",
                "5-Star Customer Reviews",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center text-primary-foreground/90"
                >
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}

<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full">
  <Link href="/contact" className="w-full sm:w-auto">
    <Button
      size="lg"
      variant="outline"
      className="w-full sm:w-auto border-primary-foreground/30 hover:cursor-pointer bg-accent hover:bg-accent/90 text-accent-foreground shadow-button-custom text-lg px-8 py-6"
    >
      Get Free Quote
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  </Link>

  <a href={`tel:${config.phoneNumber}`} className="w-full sm:w-auto">
    <Button
      size="lg"
      variant="outline"
      className="w-full sm:w-auto border-primary-foreground/30 hover:cursor-pointer hover:bg-primary-foreground text-primary hover:text-primary text-lg px-8 py-6"
    >
      <Phone className="mr-2 h-5 w-5" />
      <span>{config.phoneNumber}</span>
    </Button>
  </a>
</div>


            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 hover:cursor-pointer bg-accent hover:bg-accent/90 text-accent-foreground shadow-button-custom text-lg px-8 py-6"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href={`tel:${config.phoneNumber}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 hover:cursor-pointer hover:bg-primary-foreground text-primary hover:text-primary text-lg px-8 py-6"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  <span>{config.phoneNumber}</span>
                </Button>
              </a>
            </div> */}
            {/* ✅ Extra Content (only when form expanded + visible on lg+) */}
            {isFormExpanded && (
              <div className="hidden lg:block bg-gradient-to-br from-accent/30 via-accent/10 to-card/70 border border-border/40 rounded-3xl shadow-xl shadow-accent/20 mt-16 p-10 mb-8 animate-fade-up backdrop-blur-sm text-white">
                {/* Heading */}
                <div className="mb-11">
                  <span className="text-4xl font-bold tracking-wide text-accent uppercase">
                    Why Choose Us
                  </span>
                  <h3 className="text-4xl font-bold mb-4">
                    Moving Made Simple, Secure & Stress-Free
                  </h3>
                  <p className="text-lg text-white/80 leading-relaxed max-w-3xl">
                    When you expand the form, you&apos;re not just requesting a
                    quote — you&apos;re unlocking a moving experience backed by
                    reliability, transparency, and customer-first service.
                    Here&apos;s how we deliver excellence:
                  </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {[
                    {
                      title: "Tailored Moving Plans",
                      desc: "Every move is unique. We design relocation plans that match your budget and timeline.",
                      icon: CheckCircle,
                    },
                    {
                      title: "Personal Move Coordinator",
                      desc: "Get a dedicated expert to answer questions and guide you through every step.",
                      icon: Phone,
                    },
                    {
                      title: "Safety Above All",
                      desc: "From packing to transport, our safety standards keep your belongings secure.",
                      icon: ArrowRight,
                    },
                    {
                      title: "Transparent Pricing",
                      desc: "No hidden fees. You’ll always know exactly what you’re paying for from day one.",
                      icon: ChevronDown,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors"
                    >
                      <div className="hidden xl:flex flex-shrink-0 w-10 h-10 items-center justify-center rounded-full bg-accent/30 text-accent">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-white/80">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-6">
                  <Link href="/services">
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/30 px-8 py-5 text-lg rounded-xl transition-transform hover:scale-105">
                      Explore Our Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <p className="text-base text-white/70">
                    Already planning?{" "}
                    <Link
                      href="/contact"
                      className="text-primary/70 hover:text-primary/90 hover:underline font-medium"
                    >
                      Get in touch today
                    </Link>
                    .
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Quick Quote Form */}
          <div className="animate-scale-in">
            <div className="shadow-hero-custom rounded-2xl border border-border/20 backdrop-blur-sm bg-card/95 overflow-hidden">
              <div
                className="p-6 cursor-pointer"
                onClick={() => setIsFormExpanded(!isFormExpanded)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-display text-primary">
                    Get Your Free Quote
                  </h3>
                  {isFormExpanded ? (
                    <ChevronUp className="h-6 w-6 text-primary" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-primary" />
                  )}
                </div>
                {!isFormExpanded && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Click to expand form
                  </p>
                )}
              </div>

              {isFormExpanded && (
                <div className="px-6 pb-6">
                  <GetQuote />
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    No spam. Your information is safe with us.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
