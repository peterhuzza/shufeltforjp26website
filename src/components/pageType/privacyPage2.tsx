import React from 'react';
import Button from '@/components/buttons/button';

// Define the shape of the data coming in
interface PrivacyPageProps {
  campaignName: string;
  email: string;
  lastUpdated: string;
}

export default function PrivacyPolicy({
  campaignName,
  email,
  lastUpdated
}: PrivacyPageProps) {

  return (
    <main className="min-h-screen bg-brand-color2 py-16 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-12 border-b border-inferno pb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy (Template)</h1>
          <p className="text-gray-500">Last Updated: {lastUpdated}</p>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
          <h2 className="text-amber-800 font-bold mb-2">⚠️ Important: Action Required</h2>
          <p className="text-amber-700">
            This is a placeholder privacy policy. Because your business or campaign may have unique data
            handling requirements, <strong>you must create and provide your own official privacy policy </strong>
            to remain compliant with local and international laws (such as GDPR, CCPA, etc.).
          </p>
          <p className="text-amber-700 mt-4 text-sm">
            Please replace the content below with your actual legal documentation. We recommend consulting with
            a legal professional to ensure your policy is accurate and covers your specific data practices.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              Welcome to the official platform for <strong className="text-gray-900">{campaignName}</strong>.
              We value your privacy and are committed to protecting your personal information.
              This page serves as a template; please update it with your specific terms.
              If you have questions, contact us at <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Information Collection</h2>
            <p>
              <em>[Action Required: Describe what information you collect from your users here.]</em>
              <br />
              Example: "We may collect names, email addresses, and phone numbers if you choose to sign up for our newsletter or register for our upcoming events."
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p>
              <em>[Action Required: Describe how you use the collected data here.]</em>
              <br />
              Example: "We use your information to process registrations, send you updates regarding our campaign, and provide customer support."
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Data Sharing & Third Parties</h2>
            <p>
              <em>[Action Required: State clearly if you share data with third parties.]</em>
              <br />
              Example: "We do not sell your personal data. We may share information with trusted service providers (like email platforms) only to the extent necessary to provide our services."
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Your Rights</h2>
            <p>
              Depending on your location, you may have the right to access, delete, or correct the personal information we hold about you. Please contact us at {email} to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Contact Us</h2>
            <p>
              For more information or to request a copy of your data, please reach out to:
            </p>
            <p className="mt-2 font-bold">{email}</p>
          </section>

          {/* Back Home Button */}
          <div className="pt-8 border-t border-inferno">
            <Button variant='secondary' href="/" className="px-5 py-3 inline-block relative z-10">
              ← Return to Home
            </Button>
          </div>

        </div>
      </div>
    </main>
  );
}
