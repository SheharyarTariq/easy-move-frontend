import LocationMap from '@/components/Map/LocationMap'
import React from 'react'

const Map = () => {
  return (
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl p-8 shadow-card-custom border border-border">
            <h3 className="text-section text-primary mb-4 text-center">Find Our Office</h3>
            <LocationMap />
            <p className="text-muted-foreground text-center mt-4">
              Located in Hayes, West London at 13 Coronation Road (UB3 4JS), with easy access to all major transport links. We serve London, Guildford, Reading, Watford, Aylesbury, Redhill, and Heathrow areas.
            </p>
          </div>
        </div>
  )
}

export default Map