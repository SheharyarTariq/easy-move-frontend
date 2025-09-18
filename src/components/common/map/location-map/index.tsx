"use client";
import React from "react";

const LocationMap = () => {
  // Lahore coordinates
  const latitude = 51.496991;
  const longitude = -0.419569;

  const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
  const embedMapLink = `https://www.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed`;

  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
      {/* Google Maps Embed without API key */}
      {/* <iframe */}
      <iframe 
        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.0222847472755!2d73.06567980000001!3d33.76009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf49c71bac3b%3A0x440c38883a64cd51!2sThe%20Monal%20Restaurant!5e0!3m2!1sen!2s!4v1757465876569!5m2!1sen!2s"
        title="Location Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={embedMapLink}
      ></iframe>

      {/* Floating Directions Button */}
      <a
        href={googleMapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg hover:bg-primary/90 transition"
      >
        Get Directions
      </a>
    </div>
  );
};

export default LocationMap;
