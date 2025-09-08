"use client";
import React from "react";

const LocationMap = () => {
  // Lahore coordinates
  const latitude = 51.496991;
  const longitude = -0.419569;

  const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
      {/* Google Maps Embed without API key */}
      <iframe
        title="Location Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
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
