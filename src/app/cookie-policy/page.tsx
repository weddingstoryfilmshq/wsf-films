import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Cookie Policy | WSF",
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy">
      <p>
        This Cookie Policy explains how WSF uses cookies and similar
        technologies to improve your browsing experience and enhance the
        performance of our website.
      </p>

      <h2>What Are Cookies?</h2>

      <p>
        Cookies are small text files stored on your device when you visit a
        website. They help websites remember your preferences, improve
        functionality, and provide useful insights into website usage.
      </p>

      <h2>How We Use Cookies</h2>

      <p>
        WSF may use cookies to remember your preferences, improve website
        performance, analyse visitor behaviour, and provide a smoother browsing
        experience.
      </p>

      <h2>Types of Cookies</h2>

      <ul>
        <li><strong>Essential Cookies</strong> – Required for the website to function correctly.</li>
        <li><strong>Performance Cookies</strong> – Help us understand how visitors use our website.</li>
        <li><strong>Functional Cookies</strong> – Remember your preferences and settings.</li>
        <li><strong>Analytics Cookies</strong> – Help improve our website through anonymous usage statistics.</li>
      </ul>

      <h2>Managing Cookies</h2>

      <p>
        Most web browsers allow you to control, block, or delete cookies
        through their settings. Please note that disabling certain cookies may
        affect the functionality of this website.
      </p>

      <h2>Third-Party Cookies</h2>

      <p>
        We may use trusted third-party services, such as analytics providers,
        which may place cookies on your device to help us understand website
        performance and improve our services.
      </p>

      <h2>Changes to This Policy</h2>

      <p>
        We may update this Cookie Policy from time to time to reflect changes
        in legal requirements or website functionality. The latest version will
        always be published on this page.
      </p>

      <h2>Contact</h2>

      <p>
        If you have any questions regarding our use of cookies, please contact
        WSF through the Contact page.
      </p>
    </LegalLayout>
  );
}