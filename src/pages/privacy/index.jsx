import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">
        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. If you do not agree with the terms of this Privacy Policy, please do not access the site.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-3">Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We may collect information about you in a variety of ways. The information we may collect on the site includes personal data, derivative data, and data from forms you submit (e.g., newsletter signup).
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-3">Use of Your Information</h2>
      <p className="text-gray-700 mb-4">
        Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We may use information collected about you via the site to improve our services and communicate with you.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-3">Contact Us</h2>
      <p className="text-gray-700">
        If you have questions about this Privacy Policy, contact us at
        {" "}
        <a className="text-[#e14242] font-semibold hover:underline" href="mailto:info@rounddigital.co">info@rounddigital.co</a>.
      </p>
    </main>
  );
}
