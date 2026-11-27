"use client";

import { useState } from "react";
import {
  Calendar,
  CheckCircle2,
  Send,
  Briefcase,
  GraduationCap,
  Linkedin,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Demo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState("employee"); // 'employee' | 'student'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.target);
      formData.append(
        "_subject",
        `New Demo / Strategy Call Request (${status === "employee" ? "Employee" : "Student"}) - EnterpriseSI`
      );
      formData.append("_template", "table");
      formData.append("userStatus", status === "employee" ? "Employee" : "Student");

      await fetch("https://formsubmit.co/abhiroop@enterprisesi.co", {
        method: "POST",
        body: formData,
      });

      setIsLoading(false);
      setIsSubmitted(true);
      e.target.reset();
    } catch {
      setIsLoading(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#047857]/10 text-[#047857] text-xs font-semibold tracking-wider uppercase mb-4">
            <Calendar className="w-3.5 h-3.5" />
            Book a Strategy Call
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Schedule a Consultation with Our{" "}
            <span className="bg-gradient-to-r from-[#047857] to-[#065f46] bg-clip-text text-transparent">
              AI Architects
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Fill in your details below and a senior solutions architect will coordinate a personalized 30-minute consultation tailored to your goals.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-3xl bg-[#f8fafc] border border-neutral-300/90 shadow-xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
          {isSubmitted ? (
            <div className="py-16 px-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                Your Request Has Been Received!
              </h2>
              <p className="text-base text-neutral-600 max-w-lg mx-auto leading-relaxed">
                Thank you for reaching out to EnterpriseSI. Our team will review your submission and reach out within 24 business hours with calendar coordinates.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 px-6 py-3 rounded-xl border border-neutral-300 text-neutral-700 text-sm font-semibold hover:bg-[#eef2f7] transition-colors cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="demo-firstName" className="text-sm font-semibold text-neutral-700">
                    First Name *
                  </Label>
                  <Input
                    id="demo-firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    required
                    className="bg-[#f8fafc] border-neutral-300 focus:border-[#047857] h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="demo-lastName" className="text-sm font-semibold text-neutral-700">
                    Last Name *
                  </Label>
                  <Input
                    id="demo-lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    required
                    className="bg-[#f8fafc] border-neutral-300 focus:border-[#047857] h-11"
                  />
                </div>
              </div>

              {/* Email & LinkedIn Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="demo-email" className="text-sm font-semibold text-neutral-700">
                    Email Address *
                  </Label>
                  <Input
                    id="demo-email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    required
                    className="bg-[#f8fafc] border-neutral-300 focus:border-[#047857] h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="demo-linkedin" className="text-sm font-semibold text-neutral-700 flex items-center gap-1.5">
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    LinkedIn Profile *
                  </Label>
                  <Input
                    id="demo-linkedin"
                    name="linkedin"
                    type="url"
                    placeholder="https://linkedin.com/in/username"
                    required
                    className="bg-[#f8fafc] border-neutral-300 focus:border-[#047857] h-11"
                  />
                </div>
              </div>

              {/* Status Toggle (Employee vs Student) */}
              <div className="space-y-3 pt-2">
                <Label className="text-sm font-semibold text-neutral-700 block">
                  Current Status *
                </Label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setStatus("employee")}
                    className={`flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl border text-sm sm:text-base font-semibold transition-all cursor-pointer ${
                      status === "employee"
                        ? "bg-[#047857] text-white border-[#047857] shadow-sm"
                        : "bg-[#f8fafc] text-neutral-700 border-neutral-300 hover:border-neutral-400 hover:bg-[#eef2f7]"
                    }`}
                  >
                    <Briefcase className="w-4 h-4" />
                    <span>Employee / Professional</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStatus("student")}
                    className={`flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl border text-sm sm:text-base font-semibold transition-all cursor-pointer ${
                      status === "student"
                        ? "bg-[#047857] text-white border-[#047857] shadow-sm"
                        : "bg-[#f8fafc] text-neutral-700 border-neutral-300 hover:border-neutral-400 hover:bg-[#eef2f7]"
                    }`}
                  >
                    <GraduationCap className="w-5 h-5" />
                    <span>Student</span>
                  </button>
                </div>
              </div>

              {/* Conditional Fields based on Status */}
              {status === "employee" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 rounded-2xl bg-neutral-100/60 border border-neutral-200/80 transition-all">
                  <div className="space-y-2">
                    <Label htmlFor="demo-company" className="text-sm font-semibold text-neutral-700">
                      Current Company *
                    </Label>
                    <Input
                      id="demo-company"
                      name="company"
                      type="text"
                      placeholder="e.g. Microsoft, Deloitte, Acme Corp"
                      required
                      className="bg-[#f8fafc] border-neutral-300 focus:border-[#047857] h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="demo-role" className="text-sm font-semibold text-neutral-700">
                      Current Role / Job Title *
                    </Label>
                    <Input
                      id="demo-role"
                      name="role"
                      type="text"
                      placeholder="e.g. Head of Engineering, AI Architect"
                      required
                      className="bg-[#f8fafc] border-neutral-300 focus:border-[#047857] h-11"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 rounded-2xl bg-neutral-100/60 border border-neutral-200/80 transition-all">
                  <div className="space-y-2">
                    <Label htmlFor="demo-university" className="text-sm font-semibold text-neutral-700">
                      University / Institution Name *
                    </Label>
                    <Input
                      id="demo-university"
                      name="university"
                      type="text"
                      placeholder="e.g. Stanford University, IIT, BITS"
                      required
                      className="bg-[#f8fafc] border-neutral-300 focus:border-[#047857] h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="demo-degree" className="text-sm font-semibold text-neutral-700">
                      Degree / Program *
                    </Label>
                    <Input
                      id="demo-degree"
                      name="degree"
                      type="text"
                      placeholder="e.g. B.Tech Computer Science, MS AI"
                      required
                      className="bg-[#f8fafc] border-neutral-300 focus:border-[#047857] h-11"
                    />
                  </div>
                </div>
              )}

              {/* Optional Notes / Purpose */}
              <div className="space-y-2">
                <Label htmlFor="demo-purpose" className="text-sm font-semibold text-neutral-700">
                  Purpose of Meeting / Specific Objectives (optional)
                </Label>
                <Textarea
                  id="demo-purpose"
                  name="purpose"
                  rows={4}
                  placeholder="Tell us about the AI use case, architecture goals, or questions you would like to explore..."
                  className="bg-[#f8fafc] border-neutral-300 focus:border-[#047857] resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white font-semibold text-base transition-all duration-200 shadow-md shadow-[#047857]/25 hover:shadow-lg hover:shadow-[#047857]/35 cursor-pointer disabled:opacity-60"
                >
                  {isLoading ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Schedule Strategy Call</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="pt-4 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-2 text-center sm:text-left">
                <span>By submitting, you agree to EnterpriseSI privacy and confidentiality policies.</span>
                <span className="font-medium text-[#047857]">
                  Direct inquiries: abhiroop@enterprisesi.co
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;
