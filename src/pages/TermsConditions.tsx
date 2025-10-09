import { Helmet } from "react-helmet-async";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Helmet>
        <title>Terms & Conditions - Hiran EduPro Academy</title>
        <meta name="description" content="Terms and Conditions for Hiran EduPro Academy. Read our terms of service and enrollment policies." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Terms & Conditions</h1>
            <p className="text-lg text-muted-foreground">
              Please read these terms and conditions carefully before enrolling in our courses.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="bg-card p-8 rounded-xl shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Acceptance of Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By enrolling in courses at Hiran EduPro Academy or using our services, you agree to be 
                  bound by these Terms and Conditions. If you do not agree with any part of these terms, 
                  you may not enroll in our courses or use our services.
                </p>
              </div>
            </section>

            <section className="bg-card p-8 rounded-xl shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Course Enrollment</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-semibold text-primary">Enrollment Process</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Enrollment is subject to availability and age requirements for specific courses</li>
                  <li>All enrollment forms must be completed accurately and truthfully</li>
                  <li>Required documents must be submitted before the first class</li>
                  <li>Payment of fees confirms enrollment and reserves your spot</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-primary mt-6">Age Requirements</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Abacus Training: Ages 5-14</li>
                  <li>Vedic Mathematics: Ages 8-16</li>
                  <li>Robotics: Ages 7-15</li>
                  <li>Mnemonic Science: Ages 6-16</li>
                  <li>Phonics & Reading: Ages 3-8</li>
                </ul>
              </div>
            </section>

            <section className="bg-card p-8 rounded-xl shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Fees and Payment</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-semibold text-primary">Payment Terms</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Course fees must be paid in full before the commencement of classes</li>
                  <li>Monthly installment options are available for certain courses</li>
                  <li>Late payment fees may apply after the due date</li>
                  <li>All fees are non-transferable between students</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-primary mt-6">Refund Policy</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Full refund available if cancelled within 48 hours of enrollment</li>
                  <li>50% refund available if cancelled within one week of course start</li>
                  <li>No refund available after the first week of classes</li>
                  <li>Refunds for medical emergencies will be considered on a case-by-case basis</li>
                </ul>
              </div>
            </section>

            <section className="bg-card p-8 rounded-xl shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Attendance and Conduct</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-semibold text-primary">Attendance Requirements</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Regular attendance is essential for effective learning</li>
                  <li>Notify the academy in advance for planned absences</li>
                  <li>Make-up classes may be arranged for excused absences</li>
                  <li>Excessive absences may result in course dismissal without refund</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-primary mt-6">Code of Conduct</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Students must treat instructors and peers with respect</li>
                  <li>Disruptive behavior will not be tolerated</li>
                  <li>Students must come prepared with required materials</li>
                  <li>Use of mobile phones during class is prohibited</li>
                  <li>Parents are responsible for their child's behavior</li>
                </ul>
              </div>
            </section>

            <section className="bg-card p-8 rounded-xl shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Intellectual Property</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All course materials, including but not limited to lesson plans, worksheets, videos, 
                  and teaching methodologies, are the intellectual property of Hiran EduPro Academy. 
                  Students and parents may not:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Reproduce or distribute course materials without permission</li>
                  <li>Record classes without explicit consent</li>
                  <li>Share proprietary teaching methods with third parties</li>
                  <li>Use academy materials for commercial purposes</li>
                </ul>
              </div>
            </section>

            <section className="bg-card p-8 rounded-xl shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Limitation of Liability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hiran EduPro Academy strives to provide quality education but cannot guarantee specific 
                  learning outcomes. The academy is not liable for:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Individual learning pace or academic performance</li>
                  <li>Personal property damage or loss on academy premises</li>
                  <li>Injuries sustained during normal academy activities</li>
                  <li>Schedule changes due to unforeseen circumstances</li>
                </ul>
              </div>
            </section>

            <section className="bg-card p-8 rounded-xl shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Photography and Media</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By enrolling, you consent to the academy photographing and recording students for:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Marketing and promotional materials</li>
                  <li>Social media posts showcasing academy activities</li>
                  <li>Academic progress documentation</li>
                  <li>Website and brochure content</li>
                </ul>
                <p className="mt-4">
                  If you do not consent to photography, please notify us in writing upon enrollment.
                </p>
              </div>
            </section>

            <section className="bg-card p-8 rounded-xl shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Changes to Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hiran EduPro Academy reserves the right to modify these terms and conditions at any time. 
                  Changes will be communicated to enrolled students and parents via email or notice. 
                  Continued enrollment after notification constitutes acceptance of the revised terms.
                </p>
              </div>
            </section>

            <section className="bg-card p-8 rounded-xl shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Contact Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> info@hiranedupro.com</p>
                  <p><strong>Phone:</strong> +91 99999 99999</p>
                  <p><strong>Address:</strong> 123 Education Street, Govind Nagar</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;