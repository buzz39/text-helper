import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { Scale, FileText, AlertTriangle, Shield } from "lucide-react";

export const metadata = {
  title: "Terms of Service - TextStyler",
  description: "Read TextStyler's Terms of Service to understand your rights and responsibilities when using our text styling platform.",
  robots: "index, follow"
};

export default function TermsPage() {
  const lastUpdated = "January 15, 2025";

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-200 dark:border-blue-800">
                <Scale className="w-4 h-4" />
                Legal Terms
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
                Terms of Service
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
                These terms govern your use of TextStyler and outline the rights and responsibilities of both parties.
              </p>
              
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Last updated: {lastUpdated}
              </p>
            </div>

            {/* Quick Summary */}
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Terms Summary
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-green-700 dark:text-green-400">Your Rights</h3>
                  <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                    <li>• Use our service for legitimate purposes</li>
                    <li>• Keep your styled text and creations</li>
                    <li>• Cancel your subscription anytime</li>
                    <li>• Export your data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-orange-700 dark:text-orange-400">Your Responsibilities</h3>
                  <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                    <li>• Use the service lawfully and respectfully</li>
                    <li>• Keep your account secure</li>
                    <li>• Pay applicable fees on time</li>
                    <li>• Respect intellectual property rights</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">1. Acceptance of Terms</h2>
                
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    By accessing or using TextStyler ("Service"), you agree to be bound by these Terms of Service ("Terms"). 
                    If you disagree with any part of these terms, you may not access the Service.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    These Terms apply to all visitors, users, and others who access or use the Service, including but not 
                    limited to users who contribute content, information, and other materials or services on the Service.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">2. Description of Service</h2>
                
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">What TextStyler Provides</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      <li>• Unicode text styling and formatting tools</li>
                      <li>• Real-time text transformation capabilities</li>
                      <li>• Copy and paste functionality for styled text</li>
                      <li>• Analytics and usage insights (for paid plans)</li>
                      <li>• API access for developers (for applicable plans)</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Service Availability</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      We strive to maintain 99.9% uptime but cannot guarantee uninterrupted access. The Service may be 
                      temporarily unavailable due to maintenance, updates, or circumstances beyond our control.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">3. User Accounts</h2>
                
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Account Creation</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      To access certain features, you may need to create an account. You agree to:
                    </p>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      <li>• Provide accurate and complete information</li>
                      <li>• Maintain the security of your password</li>
                      <li>• Update your information as necessary</li>
                      <li>• Accept responsibility for all activities under your account</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Account Termination</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      You may terminate your account at any time. We may suspend or terminate your account if you 
                      violate these Terms or engage in harmful behavior toward our Service or other users.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">4. Acceptable Use</h2>
                
                <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2 text-red-800 dark:text-red-200">Prohibited Activities</h3>
                      <p className="text-red-700 dark:text-red-300 text-sm">
                        The following activities are strictly prohibited and may result in immediate account termination.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                      <h4 className="font-semibold mb-2">Illegal Content</h4>
                      <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                        <li>• Creating or distributing illegal content</li>
                        <li>• Harassment, threats, or hate speech</li>
                        <li>• Spam or unsolicited communications</li>
                        <li>• Phishing or fraudulent activities</li>
                      </ul>
                    </div>

                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                      <h4 className="font-semibold mb-2">Technical Abuse</h4>
                      <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                        <li>• Attempting to hack or breach security</li>
                        <li>• Reverse engineering our software</li>
                        <li>• Overloading our servers or infrastructure</li>
                        <li>• Using automated tools without permission</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                      <h4 className="font-semibold mb-2">Intellectual Property</h4>
                      <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                        <li>• Infringing on copyrights or trademarks</li>
                        <li>• Using our service to violate IP rights</li>
                        <li>• Copying or redistributing our content</li>
                        <li>• Creating competing services using our data</li>
                      </ul>
                    </div>

                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                      <h4 className="font-semibold mb-2">Commercial Misuse</h4>
                      <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                        <li>• Reselling our service without authorization</li>
                        <li>• Using free accounts for commercial purposes</li>
                        <li>• Circumventing usage limits or restrictions</li>
                        <li>• Creating multiple accounts to avoid limits</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">5. Intellectual Property Rights</h2>
                
                <div className="space-y-6">
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Our Rights</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      The Service and its original content, features, and functionality are and will remain the exclusive 
                      property of TextStyler and its licensors. The Service is protected by copyright, trademark, and 
                      other laws.
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      Our trademarks and trade dress may not be used in connection with any product or service without 
                      our prior written consent.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Your Rights</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      You retain all rights to the text content you input into our Service. The styled output you create 
                      using our Service belongs to you, and you may use it for any lawful purpose.
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      By using our Service, you grant us a limited license to process your content solely for the purpose 
                      of providing the styling service to you.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">DMCA Policy</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      We respect intellectual property rights and will respond to clear notices of alleged copyright 
                      infringement. If you believe your work has been copied in a way that constitutes copyright 
                      infringement, please contact us at dmca@textstyler.com.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">6. Payment Terms</h2>
                
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Subscription Plans</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      We offer both free and paid subscription plans. Paid plans provide additional features and higher usage limits.
                    </p>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      <li>• Subscription fees are billed in advance</li>
                      <li>• All fees are non-refundable except as required by law</li>
                      <li>• We may change pricing with 30 days notice</li>
                      <li>• You can cancel your subscription at any time</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Payment Processing</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Payments are processed by third-party payment processors. You agree to their terms and authorize 
                      us to charge your payment method for all fees incurred.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Failed Payments</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      If payment fails, we may suspend your access to paid features until payment is resolved. 
                      Accounts with failed payments for more than 30 days may be terminated.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">7. Privacy and Data Protection</h2>
                
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Your Privacy Matters</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-3">
                        Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect 
                        your information when you use our Service.
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">
                        By using our Service, you agree to the collection and use of information in accordance with 
                        our Privacy Policy. Please review our <a href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a> 
                        for detailed information.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">8. Disclaimers and Limitations</h2>
                
                <div className="space-y-4">
                  <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Service Disclaimer</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      The Service is provided "as is" and "as available" without warranties of any kind, either express 
                      or implied. We do not warrant that the Service will be uninterrupted, error-free, or completely secure.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Limitation of Liability</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      To the maximum extent permitted by law, TextStyler shall not be liable for any indirect, incidental, 
                      special, consequential, or punitive damages, including but not limited to:
                    </p>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                      <li>• Loss of profits, data, or business opportunities</li>
                      <li>• Service interruptions or security breaches</li>
                      <li>• Errors or inaccuracies in content</li>
                      <li>• Third-party actions or content</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Maximum Liability</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Our total liability to you for all claims arising from or relating to the Service shall not exceed 
                      the amount you paid us in the 12 months preceding the claim, or $100, whichever is greater.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">9. Indemnification</h2>
                
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                  <p className="text-slate-600 dark:text-slate-400">
                    You agree to indemnify, defend, and hold harmless TextStyler and its officers, directors, employees, 
                    and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt, 
                    and expenses (including attorney's fees) arising from your use of the Service or violation of these Terms.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">10. Termination</h2>
                
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Termination by You</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      You may terminate your account at any time by contacting us or using the account deletion feature. 
                      Upon termination, your right to use the Service will cease immediately.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Termination by Us</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      We may terminate or suspend your account immediately, without prior notice, if you breach these 
                      Terms or engage in conduct that we determine is harmful to our Service or other users.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Effect of Termination</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Upon termination, all provisions of these Terms which by their nature should survive termination 
                      shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">11. Governing Law</h2>
                
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    These Terms shall be governed by and construed in accordance with the laws of the State of California, 
                    United States, without regard to its conflict of law provisions.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Any disputes arising from these Terms or your use of the Service shall be resolved through binding 
                    arbitration in accordance with the rules of the American Arbitration Association.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">12. Changes to Terms</h2>
                
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    We reserve the right to modify these Terms at any time. We will notify you of any changes by posting 
                    the new Terms on this page and updating the "Last updated" date.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Your continued use of the Service after any such changes constitutes your acceptance of the new Terms. 
                    If you do not agree to the modified Terms, you must stop using the Service.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">13. Contact Information</h2>
                
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  
                  <div className="space-y-2 text-slate-600 dark:text-slate-400">
                    <p><strong>Email:</strong> legal@textstyler.com</p>
                    <p><strong>Address:</strong> TextStyler Inc., 123 Privacy Street, San Francisco, CA 94105</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}