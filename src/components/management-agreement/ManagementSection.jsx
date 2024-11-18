import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const ManagementSection = ({ expandedSections, setExpandedSections }) => {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="commencementDate">Commencement Date</Label>
            <Input 
              id="commencementDate" 
              type="date" 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="minimumTerm">Minimum Term of Management</Label>
            <Input 
              id="minimumTerm" 
              placeholder="Enter minimum term" 
              required 
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ManagementSection;