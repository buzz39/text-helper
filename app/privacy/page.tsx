import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { Shield, Eye, Lock, Users, Database, Globe } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - TextStyler",
  description: "Learn how TextStyler protects your privacy and handles your personal data in compliance with GDPR and CCPA regulations.",
  robots: "index, follow"
};

export default function PrivacyPage() {
  const lastUpdated = "January 15, 2025";

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16">
          {/* Header */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-200 dark:border-blue-800">
                <Shield className="w-4 h-4" />
                Your Privacy Matters
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
                We are committed to protecting your privacy and ensuring transparency about how we collect, use, and protect your personal information.
              </p>
              
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Last updated: {lastUpdated}
              </p>
            </div>

            {/* Quick Summary */}
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Privacy at a Glance
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-green-700 dark:text-green-400">✓ What we do</h3>
                  <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                    <li>• Collect minimal data necessary for service</li>
                    <li>• Use encryption to protect your information</li>
                    <li>• Give you control over your data</li>
                    <li>• Comply with GDPR and CCPA regulations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-red-700 dark:text-red-400">✗ What we don't do</h3>
                  <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                    <li>• Sell your personal information</li>
                    <li>• Share data without your consent</li>
                    <li>• Store unnecessary personal data</li>
                    <li>• Use dark patterns or deceptive practices</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Database className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                  Information We Collect
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Information You Provide</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      <li><strong>Account Information:</strong> Email address, username, and password when you create an account</li>
                      <li><strong>Profile Data:</strong> Optional profile information such as name, company, and job title</li>
                      <li><strong>Communication:</strong> Messages you send us through contact forms or support channels</li>
                      <li><strong>Payment Information:</strong> Billing details processed securely through our payment providers</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Information We Collect Automatically</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      <li><strong>Usage Data:</strong> How you interact with our service, features used, and time spent</li>
                      <li><strong>Device Information:</strong> Browser type, operating system, and device identifiers</li>
                      <li><strong>Log Data:</strong> IP addresses, access times, and pages viewed</li>
                      <li><strong>Cookies:</strong> Small data files to improve your experience (see Cookie Policy below)</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Text Content</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      <strong>Important:</strong> We do not store the text content you style through our service. 
                      Text processing happens in real-time and is not saved to our servers unless you explicitly 
                      save it to your account for future reference.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                  How We Use Your Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Service Provision</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      <li>• Provide and maintain our text styling service</li>
                      <li>• Process your text styling requests</li>
                      <li>• Manage your account and preferences</li>
                      <li>• Provide customer support</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Improvement & Analytics</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      <li>• Analyze usage patterns to improve our service</li>
                      <li>• Develop new features and functionality</li>
                      <li>• Monitor and prevent fraud or abuse</li>
                      <li>• Ensure security and technical stability</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Communication</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      <li>• Send important service updates</li>
                      <li>• Respond to your inquiries and support requests</li>
                      <li>• Send marketing communications (with consent)</li>
                      <li>• Notify you of changes to our terms or policies</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">Legal Compliance</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      <li>• Comply with applicable laws and regulations</li>
                      <li>• Respond to legal requests and court orders</li>
                      <li>• Protect our rights and prevent illegal activity</li>
                      <li>• Enforce our terms of service</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                  Information Sharing
                </h2>
                
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-green-700 dark:text-green-400">
                    We do not sell your personal information
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    We have never sold personal information and we never will. We may share your information only in the following limited circumstances:
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h4 className="font-semibold mb-2">Service Providers</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      We work with trusted third-party service providers who help us operate our service, such as hosting providers, 
                      payment processors, and analytics services. These providers are contractually bound to protect your information.
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h4 className="font-semibold mb-2">Legal Requirements</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      We may disclose your information if required by law, court order, or government request, or to protect 
                      our rights, property, or safety, or that of our users or the public.
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h4 className="font-semibold mb-2">Business Transfers</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      In the event of a merger, acquisition, or sale of assets, your information may be transferred as part 
                      of that transaction. We will notify you of any such change in ownership or control.
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h4 className="font-semibold mb-2">With Your Consent</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      We may share your information with third parties when you give us explicit consent to do so.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Cookie Policy</h2>
                
                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-3">What are cookies?</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Cookies are small text files stored on your device when you visit our website. They help us provide 
                    you with a better experience and allow certain features to work properly.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                      <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400">Necessary Cookies</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Essential for the website to function. These cannot be disabled and include authentication, 
                        security, and basic functionality cookies.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                      <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-400">Analytics Cookies</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Help us understand how visitors interact with our website by collecting and reporting 
                        information anonymously.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                      <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">Marketing Cookies</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Used to deliver relevant advertisements and track the effectiveness of our advertising campaigns.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                      <h4 className="font-semibold mb-2 text-orange-700 dark:text-orange-400">Preference Cookies</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Remember your settings and preferences to provide you with a personalized experience.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                  Your Rights
                </h2>
                
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
                  <p className="text-slate-700 dark:text-slate-300">
                    Depending on your location, you may have certain rights regarding your personal information under 
                    laws such as GDPR (EU) and CCPA (California). These rights include:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                      <h4 className="font-semibold mb-2">Access & Portability</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Request a copy of the personal information we hold about you in a portable format.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                      <h4 className="font-semibold mb-2">Rectification</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Request correction of inaccurate or incomplete personal information.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                      <h4 className="font-semibold mb-2">Erasure</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Request deletion of your personal information under certain circumstances.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                      <h4 className="font-semibold mb-2">Restriction</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Request limitation of processing of your personal information in certain situations.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                      <h4 className="font-semibold mb-2">Objection</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Object to processing of your personal information for direct marketing or other purposes.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                      <h4 className="font-semibold mb-2">Withdraw Consent</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Withdraw your consent for processing where we rely on consent as the legal basis.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mt-6">
                  <h4 className="font-semibold mb-2">How to Exercise Your Rights</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">
                    To exercise any of these rights, please contact us at <strong>privacy@textstyler.com</strong> or 
                    use our data request form. We will respond to your request within 30 days.
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    You also have the right to lodge a complaint with a supervisory authority if you believe 
                    we have not handled your personal information in accordance with applicable law.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Data Security</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h4 className="font-semibold mb-3">Technical Safeguards</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li>• SSL/TLS encryption for data in transit</li>
                      <li>• AES-256 encryption for data at rest</li>
                      <li>• Regular security audits and penetration testing</li>
                      <li>• Multi-factor authentication for admin access</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h4 className="font-semibold mb-3">Organizational Measures</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li>• Employee training on data protection</li>
                      <li>• Access controls and principle of least privilege</li>
                      <li>• Incident response and breach notification procedures</li>
                      <li>• Regular backup and disaster recovery testing</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mt-6">
                  <h4 className="font-semibold mb-2">Data Breach Notification</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    In the unlikely event of a data breach that poses a risk to your rights and freedoms, 
                    we will notify you and relevant authorities within 72 hours as required by law.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">International Transfers</h2>
                
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Our service is hosted in the United States. If you are accessing our service from outside the US, 
                    please be aware that your information may be transferred to, stored, and processed in the US.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    We ensure that any international transfers of personal data are protected by appropriate safeguards, 
                    including Standard Contractual Clauses approved by the European Commission.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Data Retention</h2>
                
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h4 className="font-semibold mb-2">Account Data</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      We retain your account information for as long as your account is active or as needed to provide services. 
                      After account deletion, we may retain some information for legal compliance purposes.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h4 className="font-semibold mb-2">Usage Data</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Analytics and usage data is typically retained for 26 months to help us improve our service, 
                      after which it is anonymized or deleted.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                    <h4 className="font-semibold mb-2">Text Content</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Text content processed through our service is not stored unless you explicitly save it to your account. 
                      Saved content is retained until you delete it or close your account.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Children's Privacy</h2>
                
                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
                  <p className="text-slate-600 dark:text-slate-400">
                    Our service is not intended for children under 13 years of age. We do not knowingly collect 
                    personal information from children under 13. If you are a parent or guardian and believe your 
                    child has provided us with personal information, please contact us immediately.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Changes to This Policy</h2>
                
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices, 
                    technology, legal requirements, or other factors.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    We will notify you of any material changes by posting the new Privacy Policy on this page 
                    and updating the "Last updated" date. For significant changes, we may also send you an email notification.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  
                  <div className="space-y-2 text-slate-600 dark:text-slate-400">
                    <p><strong>Email:</strong> privacy@textstyler.com</p>
                    <p><strong>Address:</strong> TextStyler Inc., 123 Privacy Street, San Francisco, CA 94105</p>
                    <p><strong>Data Protection Officer:</strong> dpo@textstyler.com</p>
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