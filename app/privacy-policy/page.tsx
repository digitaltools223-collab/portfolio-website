import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Muhammad Danish Raza',
  description: 'Privacy policy covering personal data, cookies, analytics, forms, and third-party processing tools.'
};

export default function PrivacyPolicyPage() {
  return (
    <section className="prose prose-invert max-w-4xl py-16">
      <h1>Privacy Policy</h1>
      <p>Effective date: April 1, 2026. This policy explains how information is collected, used, and protected when you use this website.</p>
      <h2>1. Information Collected</h2>
      <p>We may collect personal details you submit through the contact form, including name, email address, and message content. Technical data such as device type, browser, pages visited, and timestamps may also be collected.</p>
      <h2>2. How Information Is Used</h2>
      <p>Data is used to respond to inquiries, deliver requested services, improve website performance, and maintain service security and reliability.</p>
      <h2>3. Cookies and Analytics</h2>
      <p>This website may use cookies and analytics tools to measure engagement and optimize user experience. You can manage cookie preferences through your browser settings.</p>
      <h2>4. Third-Party Tools</h2>
      <p>Third-party services such as hosting providers, analytics providers, and communication tools may process data under their own privacy terms.</p>
      <h2>5. Data Retention and Security</h2>
      <p>Reasonable technical and organizational safeguards are applied to protect data. Information is retained only as long as necessary for communication, legal, or operational purposes.</p>
      <h2>6. Your Rights</h2>
      <p>You may request access, correction, or deletion of your data by contacting us directly.</p>
      <h2>7. Updates</h2>
      <p>This policy may be updated periodically. Continued use of the website indicates acceptance of the latest version.</p>
    </section>
  );
}
