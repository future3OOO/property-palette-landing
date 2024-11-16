import { ExternalLink } from 'lucide-react';
import React from 'react';

export const faqCategories = {
  general: {
    title: "General Information",
    items: [
      {
        question: "What services do you offer?",
        answer: (
          <div className="space-y-6">
            <div className="p-4 bg-deep-teal/5 dark:bg-light-teal/5 rounded-lg">
              <h4 className="text-lg font-semibold text-deep-teal dark:text-light-teal mb-4">Core Services</h4>
              <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Tenant finding</li>
                  <li>• Tenant management</li>
                  <li>• Ongoing support</li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-cream dark:bg-charcoal-gray rounded-lg">
              <p className="text-deep-teal dark:text-light-teal text-sm">
                <strong>Fee Structure:</strong> All services included for a flat rate fee of 8% +GST
              </p>
            </div>
          </div>
        )
      },
      {
        question: "Where is your service available?",
        answer: (
          <div className="space-y-6">
            <div className="p-4 bg-deep-teal/5 dark:bg-light-teal/5 rounded-lg">
              <h4 className="text-lg font-semibold text-deep-teal dark:text-light-teal mb-4">Service Area</h4>
              <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                <p className="text-gray-600 dark:text-gray-300">
                  We manage a small selective rent role of around ~80 properties throughout Christchurch, New Zealand.
                </p>
              </div>
            </div>
          </div>
        )
      },
      {
        question: "What are your fees?",
        answer: (
          <div className="space-y-6">
            <div className="p-4 bg-deep-teal/5 dark:bg-light-teal/5 rounded-lg">
              <h4 className="text-lg font-semibold text-deep-teal dark:text-light-teal mb-4">Fee Structure</h4>
              <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                <p className="text-gray-600 dark:text-gray-300">
                  We charge a flat rate fee of 8% + GST on all rent monies collected and no charges on anything else.
                </p>
              </div>
            </div>
          </div>
        )
      },
      {
        question: "Are your fees tax deductible?",
        answer: (
          <div className="space-y-6">
            <div className="p-4 bg-deep-teal/5 dark:bg-light-teal/5 rounded-lg">
              <h4 className="text-lg font-semibold text-deep-teal dark:text-light-teal mb-4">Tax Benefits</h4>
              <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Yes - our fees are tax-deductible, and we send you an end of financial year summary statement of all rent monies and outgoing expenses, to simplify things for your accountant/tax advisor.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  We can also pay your rates and insurance with funds from your rent account, with no additional fees charged. Just have them redirected to us so then all your property expenses will be reflected on your statements and summary statement.
                </p>
              </div>
            </div>
            <div className="p-4 bg-cream dark:bg-charcoal-gray rounded-lg">
              <p className="text-deep-teal dark:text-light-teal text-sm">
                <strong>Note:</strong> This makes things easy for you at the end of the financial year.
              </p>
            </div>
          </div>
        )
      }
    ]
  },
  propertyManagement: {
    title: "Property Management",
    items: [
      {
        question: "How do you take care of my property?",
        answer: (
          <div className="space-y-6">
            <div className="p-4 bg-deep-teal/5 dark:bg-light-teal/5 rounded-lg">
              <h4 className="text-lg font-semibold text-deep-teal dark:text-light-teal mb-4">Property Care Process</h4>
              <div className="space-y-4">
                <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                  <h5 className="font-semibold mb-2">Regular Inspections</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    We inspect properties quarterly and email you a detailed report + photos following each inspection, so you can see for yourself how your property is being looked after.
                  </p>
                </div>
                
                <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                  <h5 className="font-semibold mb-2">Maintenance Management</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Inspections detail both immediate maintenance and recommended maintenance for future budgeting. "Immediate maintenance" refers to repairs needed to comply with the residential tenancies act.
                  </p>
                </div>

                <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                  <h5 className="font-semibold mb-2">Contractor Network</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    We have a comprehensive team of reasonably priced trades' people- Some we have used for over a decade.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-cream dark:bg-charcoal-gray rounded-lg">
              <p className="text-deep-teal dark:text-light-teal text-sm">
                <strong>Maintenance Cost Policy:</strong> We typically action immediate maintenance under one week's rent value. For costs exceeding this, we'll provide a quote first.
              </p>
            </div>
          </div>
        )
      },
      {
        question: "Do you review rent prices?",
        answer: (
          <div className="space-y-6">
            <div className="p-4 bg-deep-teal/5 dark:bg-light-teal/5 rounded-lg">
              <h4 className="text-lg font-semibold text-deep-teal dark:text-light-teal mb-4">Rent Review Process</h4>
              <div className="space-y-4">
                <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                  <h5 className="font-semibold mb-2">Regular Reviews</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    We are constantly observing property/rental trends and will increase rents accordingly within the scope of the residential tenancies act.
                  </p>
                </div>
                
                <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                  <h5 className="font-semibold mb-2">Review Schedule</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    We conduct 12 monthly rental price reviews on all properties we manage which is inline with the current legislation that limits rent increases to once every 12 months.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-cream dark:bg-charcoal-gray rounded-lg">
              <p className="text-deep-teal dark:text-light-teal text-sm">
                <strong>Important:</strong> Rent increases require 60 days written notice before they take effect.
              </p>
              <a 
                href="https://www.tenancy.govt.nz/rent-bond-and-bills/rent/increasing-rent/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-teal dark:text-light-teal hover:underline inline-flex items-center mt-2"
              >
                Read more about rent increases <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        )
      },
      {
        question: "How do I receive rental payments?",
        answer: (
          <div className="space-y-6">
            <div className="p-4 bg-deep-teal/5 dark:bg-light-teal/5 rounded-lg">
              <h4 className="text-lg font-semibold text-deep-teal dark:text-light-teal mb-4">Payment Schedule</h4>
              <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Weekly payments every Monday</li>
                  <li>• Direct transfer to your nominated bank account</li>
                  <li>• Rent collected less our flat fee and any accounts paid</li>
                  <li>• Statement and contractor invoices emailed after each payment</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      {
        question: "How do I review property documentation, invoices, statements etc?",
        answer: (
          <div className="space-y-6">
            <div className="p-4 bg-deep-teal/5 dark:bg-light-teal/5 rounded-lg">
              <h4 className="text-lg font-semibold text-deep-teal dark:text-light-teal mb-4">Property Tree Portal Access</h4>
              <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                <p className="text-gray-600 dark:text-gray-300">
                  Our Property Management service is run via a modern cloud-based management system (called Property Tree). Both landlords & tenants have access to their own web-based portal.
                </p>
              </div>
            </div>
            
            <div className="p-4 bg-cream dark:bg-charcoal-gray rounded-lg">
              <p className="text-deep-teal dark:text-light-teal text-sm">
                <strong>Available Documentation:</strong> Property documentation, agreements, inspection reports, invoices, statements, and more.
              </p>
            </div>
          </div>
        )
      }
    ]
  },
  tenancy: {
    title: "Tenancy Process",
    items: [
      {
        question: "How do you find tenants?",
        answer: (
          <div className="space-y-6">
            <div className="p-4 bg-deep-teal/5 dark:bg-light-teal/5 rounded-lg">
              <h4 className="text-lg font-semibold text-deep-teal dark:text-light-teal mb-4">Tenant Finding Process</h4>
              <div className="space-y-4">
                <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                  <h5 className="font-semibold mb-2">Marketing Strategy</h5>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Physical signboards</li>
                    <li>• Multiple online networks (TradeMe, Facebook, Realestate.co.nz)</li>
                    <li>• Complimentary video walk-through presentations</li>
                  </ul>
                </div>
                
                <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                  <h5 className="font-semibold mb-2">Market Positioning</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    We ensure your property is properly marketed and priced accordingly with the market to attract the best tenants.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-cream dark:bg-charcoal-gray rounded-lg">
              <p className="text-deep-teal dark:text-light-teal text-sm">
                <strong>Note:</strong> No additional charges for any listing fees.
              </p>
            </div>
          </div>
        )
      },
      {
        question: "Do you screen potential tenants?",
        answer: (
          <div className="space-y-6">
            <div className="p-4 bg-deep-teal/5 dark:bg-light-teal/5 rounded-lg">
              <h4 className="text-lg font-semibold text-deep-teal dark:text-light-teal mb-4">Tenant Screening Process</h4>
              <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Previous tenancy/character references check</li>
                  <li>• Social media profile screening</li>
                  <li>• Multi-bureau credit & background checks</li>
                  <li>• Proprietary database screening for red flags</li>
                </ul>
              </div>
            </div>
            
            <div className="p-4 bg-cream dark:bg-charcoal-gray rounded-lg">
              <p className="text-deep-teal dark:text-light-teal text-sm">
                <strong>Our Standard:</strong> We won't approve an application without good references to back it up, minimizing risk from day one.
              </p>
            </div>
          </div>
        )
      },
      {
        question: "Who selects the tenant?",
        answer: (
          <div className="space-y-6">
            <div className="p-4 bg-deep-teal/5 dark:bg-light-teal/5 rounded-lg">
              <h4 className="text-lg font-semibold text-deep-teal dark:text-light-teal mb-4">Tenant Selection Process</h4>
              <div className="space-y-4">
                <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                  <h5 className="font-semibold mb-2">Collaborative Approach</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    After completing thorough screening and identifying strong candidates, we'll present their application(s) to you for feedback.
                  </p>
                </div>
                
                <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                  <h5 className="font-semibold mb-2">Final Decision</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Once you're satisfied, we'll move forward with offering the property to the approved tenant.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-cream dark:bg-charcoal-gray rounded-lg">
              <p className="text-deep-teal dark:text-light-teal text-sm">
                <strong>Owner Involvement:</strong> This ensures you stay involved in the decision-making process and can confirm the tenant aligns well with your expectations.
              </p>
            </div>
          </div>
        )
      },
      {
        question: "What happens once an application is approved?",
        answer: (
          <div className="space-y-6">
            <div className="p-4 bg-deep-teal/5 dark:bg-light-teal/5 rounded-lg">
              <h4 className="text-lg font-semibold text-deep-teal dark:text-light-teal mb-4">Application Process Steps</h4>
              <div className="space-y-4">
                <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                  <h5 className="font-semibold mb-2">1. Tenancy Agreement</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    We send the approved tenant(s) an official Tenancy Agreement offer for them to sign and return. After they complete this step, we co-sign on your behalf, making the agreement legally binding.
                  </p>
                  <p className="text-sm text-deep-teal dark:text-light-teal mt-2">
                    Note: A tenancy is only confirmed once the agreement has been signed by all parties involved. You will receive a copy of the signed agreement for your records.
                  </p>
                </div>

                <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                  <h5 className="font-semibold mb-2">2. Bond and Initial Rent Payment</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    The approved tenant(s) are required to complete a bond lodgment form and pay a bond deposit (equivalent to 4 weeks' rent) along with the first week's rent in advance. These payments must be made before the tenancy start date.
                  </p>
                </div>

                <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                  <h5 className="font-semibold mb-2">3. Clear Expectations</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    It's essential that tenants fully understand their responsibilities and our expectations. To facilitate this, we provide a detailed ingoing condition report, which includes up to 1,000 photos documenting the property's condition.
                  </p>
                </div>

                <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                  <h5 className="font-semibold mb-2">4. Ingoing Condition Report</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Upon moving in, the tenant(s) review the condition report and must return it, noting any discrepancies, within seven (7) days of the tenancy commencement date. If the report is not returned within this timeframe, the tenant(s) are assumed to accept the premises in the documented condition.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-cream dark:bg-charcoal-gray rounded-lg">
              <p className="text-deep-teal dark:text-light-teal text-sm">
                This thorough process ensures all parties are clear on their obligations, contributing to a smooth tenancy experience for everyone involved.
              </p>
            </div>
          </div>
        )
      }
    ]
  },
  forTenants: {
    title: "For Tenants",
    items: [
      {
        question: "How can I apply for a property you have listed?",
        answer: (
          <div className="space-y-6">
            <div className="p-4 bg-deep-teal/5 dark:bg-light-teal/5 rounded-lg">
              <h4 className="text-lg font-semibold text-deep-teal dark:text-light-teal mb-4">Application Process</h4>
              <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                <p className="text-gray-600 dark:text-gray-300">
                  You can easily apply for any of our listed properties through our online application portal.
                </p>
              </div>
            </div>

            <div className="p-4 bg-cream dark:bg-charcoal-gray rounded-lg">
              <p className="text-deep-teal dark:text-light-teal text-sm flex items-center gap-2">
                <strong>Apply Now:</strong>
                <a 
                  href="https://apply.tpsportal.co.nz/tps1205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-deep-teal dark:text-light-teal hover:underline inline-flex items-center"
                >
                  Online Application Portal <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </p>
            </div>
          </div>
        )
      },
      {
        question: "How should problems during a tenancy be reported?",
        answer: (
          <div className="space-y-6">
            <div className="p-4 bg-deep-teal/5 dark:bg-light-teal/5 rounded-lg">
              <h4 className="text-lg font-semibold text-deep-teal dark:text-light-teal mb-4">Maintenance Reporting Process</h4>
              <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Report maintenance issues promptly to ensure they are addressed in a timely manner.
                </p>
                <h5 className="text-md font-semibold mb-2">Required Information:</h5>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Your name and contact information</li>
                  <li>• The property address</li>
                  <li>• A detailed description of the issue</li>
                  <li>• Any relevant photos or videos</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-cream dark:bg-charcoal-gray rounded-lg">
              <p className="text-deep-teal dark:text-light-teal text-sm">
                <strong>Submit Request:</strong> Visit our Maintenance Portal to submit your maintenance request with all required details.
              </p>
            </div>
          </div>
        )
      },
      {
        question: "How do I end a fixed-term tenancy?",
        answer: (
          <div className="space-y-6">
            <div className="p-4 bg-deep-teal/5 dark:bg-light-teal/5 rounded-lg">
              <h4 className="text-lg font-semibold text-deep-teal dark:text-light-teal mb-4">Notice Requirements</h4>
              <div className="space-y-4">
                <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                  <h5 className="text-md font-semibold mb-2">Fixed Term Tenancy</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    If you don't wish to continue beyond the fixed term, provide at least 28 days' notice before the term ends.
                  </p>
                </div>
                <div className="pl-4 border-l-4 border-deep-teal dark:border-light-teal">
                  <h5 className="text-md font-semibold mb-2">Periodic Tenancy</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Provide a minimum of 28 days' notice at any time.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-cream dark:bg-charcoal-gray rounded-lg">
              <div className="space-y-3">
                <p className="text-deep-teal dark:text-light-teal text-sm">
                  <strong>Send Notice To:</strong> mckenzie@propertypartner.co.nz
                </p>
                <p className="text-deep-teal dark:text-light-teal text-sm">
                  <strong>Important:</strong> Notice period starts the day after receipt. For example, a notice emailed Monday before 5pm starts Tuesday.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <a 
                href="https://www.tenancy.govt.nz/ending-a-tenancy/giving-notice-to-end-tenancy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-teal dark:text-light-teal hover:underline inline-flex items-center text-sm"
              >
                Learn more about giving notice <ExternalLink className="ml-1 h-4 w-4" />
              </a>
              <a 
                href="https://www.tenancy.govt.nz/ending-a-tenancy/serving-notices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-teal dark:text-light-teal hover:underline inline-flex items-center text-sm"
              >
                Learn about serving notices <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        )
      }
    ]
  }
};