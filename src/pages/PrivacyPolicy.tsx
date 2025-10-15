import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Helmet>
        <title>Privacy Policy - Hiran EduPro Academyy</title>
        <meta name="description" content="Privacy Policy for Hiran EduPro Academyy. Learn how we collect, use, and protect your personal information." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              Your privacy is important to us. This policy explains how we collect and use your information.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="bg-card p-8 rounded-xl shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  enroll in courses, contact us, or participate in our educational programs.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Personal information (name, email, phone number, address)</li>
                  <li>Student information (age, grade level, learning preferences)</li>
                  <li>Academic progress and assessment data</li>
                  <li>Communication preferences</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                </ul>
              </div>
            </section>

            <section className="bg-card p-8 rounded-xl shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">How We Use Your Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide, maintain, and improve our educational services</li>
                  <li>Process enrollments and manage student accounts</li>
                  <li>Communicate with students and parents about courses and progress</li>
                  <li>Customize learning experiences based on individual needs</li>
                  <li>Send important updates about classes, schedules, and academy news</li>
                  <li>Ensure the safety and security of our students and staff</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </div>
            </section>

            <section className="bg-card p-8 rounded-xl shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Information Sharing</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>With service providers who assist in our operations (subject to confidentiality agreements)</li>
                  <li>When required by law or to protect our rights and safety</li>
                  <li>In connection with a business transfer (merger, acquisition, etc.)</li>
                  <li>With your explicit consent for specific purposes</li>
                </ul>
              </div>
            </section>

            <section className="bg-card p-8 rounded-xl shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Data Security</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Secure servers and encrypted data transmission</li>
                  <li>Regular security audits and updates</li>
                  <li>Restricted access to personal information on a need-to-know basis</li>
                  <li>Staff training on data protection and privacy practices</li>
                </ul>
              </div>
            </section>

            <section className="bg-card p-8 rounded-xl shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Your Rights</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your personal information (subject to legal requirements)</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the information provided in our Contact section.
                </p>
              </div>
            </section>

            <section className="bg-card p-8 rounded-xl shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Children's Privacy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We are committed to protecting the privacy of children under 13. We do not knowingly 
                  collect personal information from children under 13 without parental consent. If you 
                  believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </div>
            </section>

            <section className="bg-card p-8 rounded-xl shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Contact Us</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@hiranedupro.com</p>
                  <p><strong>Phone:</strong> +918208368355 </p>
                  <p><strong>Address:</strong> First floor Hemsuraj kirana, Near Sundar Selection Aajad Road, Manmad, Maharashtra 423104</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
