export const navigationConfig = {
  forOwners: [
    {
      category: "Property Management",
      items: [
        {
          to: "/landlord-services",
          label: "Landlord Services"
        },
        {
          to: "/management-agreement",
          label: "Management Agreement"
        },
        {
          label: "Property Management"
        },
        {
          label: "Tenant Screening"
        },
        {
          label: "Property Marketing"
        },
        {
          label: "Rent Collection"
        },
        {
          label: "Financial Reporting"
        }
      ]
    }
  ],
  forTenants: [
    {
      category: "Tenant Services",
      items: [
        {
          to: "/tenant-services",
          label: "Tenant Services"
        },
        {
          to: "/services/maintenance",
          label: "Maintenance Request"
        },
        {
          to: "/rental-application",
          label: "Rental Application"
        },
        {
          label: "Rent Payment"
        },
        {
          label: "Lease Renewal"
        }
      ]
    }
  ],
  resources: [
    {
      category: "Help Center",
      items: [
        {
          to: "/faq",
          label: "FAQ"
        },
        {
          label: "Blog"
        },
        {
          label: "Guides"
        }
      ]
    }
  ],
  about: [
    {
      category: "Company",
      items: [
        {
          to: "/about",
          label: "Our Story"
        },
        {
          label: "Team"
        },
        {
          label: "Careers"
        }
      ]
    }
  ]
};