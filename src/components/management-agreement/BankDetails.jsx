import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

const BankDetails = ({ expandedSections, setExpandedSections }) => {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="accountName">Account Name</Label>
              <Input id="accountName" placeholder="Enter account name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="accountNumber">Account Number</Label>
              <Input id="accountNumber" placeholder="Enter account number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reference">Reference</Label>
              <Input id="reference" placeholder="Enter reference" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bankBranch">Bank/Branch</Label>
              <Input id="bankBranch" placeholder="Enter bank/branch" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-lg text-deep-teal dark:text-light-teal">Payment Frequency</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="monthly" />
                  <Label htmlFor="monthly">Monthly</Label>
                </div>
                <Input placeholder="Specify date" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="bimonthly" />
                  <Label htmlFor="bimonthly">Bi-monthly</Label>
                </div>
                <Input placeholder="Specify dates" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-lg text-deep-teal dark:text-light-teal">Accounts to be Paid</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Water Rates', 'Council Rates', 'Insurance', 'Body Corporate', 'Other'].map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <Checkbox id={item.toLowerCase().replace(/\s/g, '')} />
                  <Label htmlFor={item.toLowerCase().replace(/\s/g, '')}>{item}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-lg text-deep-teal dark:text-light-teal">Verification Required</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                'Copy of bank statement header',
                'Copy of deposit slip',
                'Screenshot of bank account'
              ].map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <Checkbox id={item.toLowerCase().replace(/\s/g, '')} />
                  <Label htmlFor={item.toLowerCase().replace(/\s/g, '')}>{item}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BankDetails;