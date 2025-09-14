import React from 'react';
import { config } from '../../../config';

const TermsAndConditions = () => {
  return (
    <main>
      <section className="sm:py-20 py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-hero text-primary mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <div>
              <h2 className="text-section text-primary mb-4">Agreement to Terms</h2>
              <p className="mb-4">
                By accessing and using EasyMove services, you accept and agree to be bound 
                by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-section text-primary mb-4">Services</h2>
              <p className="mb-4">
                GalaxyRemovals provides professional moving and removal services including:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Residential moving services</li>
                <li>Commercial relocations</li>
                <li>Packing and unpacking services</li>
                <li>Storage solutions</li>
                <li>Furniture assembly</li>
              </ul>
            </div>

            <div>
              <h2 className="text-section text-primary mb-4">Booking and Payment</h2>
              <p className="mb-4">
                All bookings are subject to availability and confirmation. Payment terms 
                will be specified in your individual service agreement.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Free quotes are provided without obligation</li>
                <li>Deposits may be required for certain services</li>
                <li>Final payment is due upon completion of services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-section text-primary mb-4">Liability</h2>
              <p className="mb-4">
                GalaxyRemovals is fully insured and takes responsibility for damages caused by 
                our negligence during the moving process, subject to the terms of our 
                insurance policy.
              </p>
            </div>

            <div>
              <h2 className="text-section text-primary mb-4">Cancellation Policy</h2>
              <p className="mb-4">
                Cancellations must be made at least 24 hours before the scheduled service. 
                Cancellation fees may apply for short notice cancellations.
              </p>
            </div>

            <div>
              <h2 className="text-section text-primary mb-4">Contact Information</h2>
              <p className="mb-4">
                For questions regarding these terms, please contact us:
              </p>
              <ul className="list-disc list-inside space-y-2">
                {/* <li>Email: <a href={`mailto:${config.email}`} className="hover:underline hover:text-primary">{config.email}</a></li> */}
                <li>Phone: <a href={`tel:${config.phoneNumber}`} className="hover:underline hover:text-primary">{config.phoneNumber}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;