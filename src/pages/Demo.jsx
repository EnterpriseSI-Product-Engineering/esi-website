import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Demo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.target);
      formData.append("_subject", "New Demo Request - KloudStac");
      formData.append("_template", "table");

      await fetch("https://formsubmit.co/abhiroop@enterprisesi.co", {
        method: "POST",
        body: formData,
      });

      setIsLoading(false);
      setIsSubmitted(true);
      e.target.reset();
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-40 pb-30 px-4">
      <h1 className="text-center text-3xl md:text-5xl -mb-10">Schedule a Demo</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto mt-20 space-y-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 space-y-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input
              id="first-name"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="flex-1 space-y-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input
              id="last-name"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              type="text"
              placeholder="Enter your company name"
              required
            />
          </div>
          <div className="flex-1 space-y-2">
            <Label htmlFor="job-title">Job Title</Label>
            <Input
              id="job-title"
              name="jobTitle"
              type="text"
              placeholder="Enter your job title"
              required
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              type="text"
              placeholder="Enter your city"
              required
            />
          </div>
          <div className="flex-1 space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              name="country"
              type="text"
              placeholder="Enter your country"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="purpose">Purpose of Meeting</Label>
          <Textarea
            id="purpose"
            name="purpose"
            placeholder="Describe the purpose of the meeting"
            className="resize-none bg-white"
            required
          />
        </div>

        <div className="pt-4">
          <Button type="submit" disabled={isLoading || isSubmitted}>
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </div>

        {isSubmitted && (
          <div className="text-center text-green-600 font-medium">
            Your demo request has been successfully received. A member of our
            team will reach out to you within 24-48 business hours to schedule a
            personalized consultation.
          </div>
        )}
      </form>
    </div>
  );
};

export default Demo;
