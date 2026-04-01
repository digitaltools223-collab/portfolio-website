import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Muhammad Danish Raza',
  description: 'Website usage terms, disclaimers, liability limits, and intellectual property conditions.'
};

export default function TermsPage() {
  return (
    <section className="prose prose-invert max-w-4xl py-16">
      <h1>Terms & Conditions</h1>
      <p>Effective date: April 1, 2026. By using this website, you agree to the following terms.</p>
      <h2>1. Website Use</h2>
      <p>Content is provided for informational and business inquiry purposes. You agree not to misuse the website, attempt unauthorized access, or disrupt service availability.</p>
      <h2>2. No Professional Warranty</h2>
      <p>Website content is provided “as is” without guarantees of completeness, accuracy, or fitness for a specific purpose.</p>
      <h2>3. Intellectual Property</h2>
      <p>All content, branding, text, and design elements are the intellectual property of Muhammad Danish Raza unless otherwise stated. Unauthorized reuse is prohibited.</p>
      <h2>4. Third-Party Links</h2>
      <p>This website may contain links to external services. We are not responsible for third-party content, policies, or practices.</p>
      <h2>5. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, we are not liable for direct or indirect damages resulting from use of this website.</p>
      <h2>6. Governing Terms</h2>
      <p>Terms may be revised at any time. Continued use of the website indicates acceptance of updated terms.</p>
    </section>
  );
}
