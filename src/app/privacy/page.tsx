import React from 'react';
import { config } from '../../../config';

const Privacy = () => {
  return (
    <main>
      <section className="sm:py-20 py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-hero text-primary mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <div>
              <h2 className="text-section text-primary mb-4">Information We Collect</h2>
              <p className="mb-4">
                At GalaxyRemovals, we collect information to provide better services to all our users. 
                We collect information in the following ways:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Information you give us directly through forms and contact methods</li>
                <li>Information we get from your use of our services</li>
                <li>Contact information including name, email, and phone number</li>
                <li>Moving details including addresses and service requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-section text-primary mb-4">How We Use Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your moving requests and provide quotes</li>
                <li>Send you service updates and important notices</li>
                <li>Respond to your comments and questions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-section text-primary mb-4">Information Sharing</h2>
              <p className="mb-4">
                We do not share personal information with companies, organizations, 
                or individuals outside of GalaxyRemovals except in the following cases:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>With your consent</li>
                <li>For legal reasons when required by law</li>
                <li>To protect rights, property, or safety</li>
              </ul>
            </div>

            <div>
              <h2 className="text-section text-primary mb-4">Data Security</h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-section text-primary/20 mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
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

export default Privacy;