import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactFormFields = ({ register, errors }) => {
  return (
    <>
      <div className="space-y-4">
        <div>
          <Input
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
            className="w-full"
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </div>
        
        <div>
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            type="email"
            placeholder="Email Address"
            className="w-full"
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div>
          <Input
            {...register("phone")}
            type="tel"
            placeholder="Phone Number (Optional)"
            className="w-full"
          />
        </div>

        <div>
          <Textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Your Message"
            className="w-full min-h-[120px]"
          />
          {errors.message && (
            <span className="text-sm text-red-500">{errors.message.message}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default React.memo(ContactFormFields);