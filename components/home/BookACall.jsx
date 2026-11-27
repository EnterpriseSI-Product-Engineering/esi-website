"use client";

import { useState } from "react";
import {
  Calendar,
  CheckCircle2,
  Clock,
  Mail,
  Shield,
  Sparkles,
  Send,
  Briefcase,
  GraduationCap,
  Linkedin,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function BookACall() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState("employee"); // 'employee' | 'student'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.target);
      formData.append("_subject", `New Call Request (${status === "employee" ? "Employee" : "Student"}) - EnterpriseSI`);
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
    <section id="book-a-call" className="relative py-20 md:py-28 bg-[#f8fafc] border-b border-neutral-300/60 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-emerald-100/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-amber-100/30 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Value Prop & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#047857]/10 text-[#047857] text-xs font-semibold tracking-wider uppercase">
              <Calendar className="w-3.5 h-3.5" />
              Schedule a Consultation
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
              Book a Strategy Call with Our{" "}
              <span className="bg-gradient-to-r from-[#047857] to-[#065f46] bg-clip-text text-transparent">
                AI Architects
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Whether you are an enterprise team looking to deploy agentic pilot accelerators or an academic learner exploring our builder playgrounds, schedule a 30-minute session with our AI team.
            </p>

            {/* What to Expect */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                What you can expect on the call
              </h4>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#047857]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#047857]" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-neutral-900">
                      30-Minute Targeted Architecture Review
                    </h5>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      Evaluate your current AI stack, compute requirements, and high-impact automation targets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#047857]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4 text-[#047857]" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-neutral-900">
                      Live Pilot Accelerator Test Drive
                    </h5>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      Explore interactive copilots in Finance, Auditing, or Risk customized to your domain workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#047857]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-[#047857]" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-neutral-900">
                      Enterprise Governance & Security Blueprint
                    </h5>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      Review isolated sandbox security, data isolation, and audit compliance protocols.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Email Contacts */}
            <div className="pt-4 border-t border-neutral-300">
              <p className="text-xs font-medium text-neutral-500 mb-2">Prefer direct email?</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium text-[#047857]">
                <a href="mailto:abhiroop@enterprisesi.co" className="hover:underline flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" /> abhiroop@enterprisesi.co
                </a>
                <a href="mailto:bd@enterprisesi.co" className="hover:underline flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" /> bd@enterprisesi.co
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#f8fafc] border border-neutral-300/90 shadow-xl p-6 sm:p-8 md:p-10 relative">
              <div className="mb-6 pb-4 border-b border-neutral-300 flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    Request a Discovery Call
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                    Fill in your details and an EnterpriseSI AI strategist will confirm a calendar invite within 24 hours.
                  </p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="py-12 px-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-neutral-900">
                    Call Request Received!
                  </h4>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. A senior solutions architect from EnterpriseSI will review your request and send calendar coordinates to your email.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-5 py-2.5 rounded-xl border border-neutral-300 text-neutral-700 text-sm font-medium hover:bg-[#eef2f7] transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Name Row: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="call-firstName" className="text-xs font-semibold text-neutral-700">
                        First Name *
                      </Label>
                      <Input
                        id="call-firstName"
                        name="firstName"
                        type="text"
                        placeholder="e.g. John"
                        required
                        className="bg-[#f8fafc] border-neutral-300 focus:border-[#047857]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="call-lastName" className="text-xs font-semibold text-neutral-700">
                        Last Name *
                      </Label>
                      <Input
                        id="call-lastName"
                        name="lastName"
                        type="text"
                        placeholder="e.g. Doe"
                        required
                        className="bg-[#f8fafc] border-neutral-300 focus:border-[#047857]"
                      />
                    </div>
                  </div>

                  {/* Email & LinkedIn Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="call-email" className="text-xs font-semibold text-neutral-700">
                        Email Address *
                      </Label>
                      <Input
                        id="call-email"
                        name="email"
                        type="email"
                        placeholder="john.doe@company.com"
                        required
                        className="bg-[#f8fafc] border-neutral-300 focus:border-[#047857]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="call-linkedin" className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5">
                        <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                        LinkedIn Profile *
                      </Label>
                      <Input
                        id="call-linkedin"
                        name="linkedin"
                        type="url"
                        placeholder="https://linkedin.com/in/username"
                        required
                        className="bg-[#f8fafc] border-neutral-300 focus:border-[#047857]"
                      />
                    </div>
                  </div>

                  {/* Status Toggle (Employee vs Student) */}
                  <div className="space-y-2 pt-1">
                    <Label className="text-xs font-semibold text-neutral-700 block">
                      Current Status *
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setStatus("employee")}
                        className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
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
                        className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                          status === "student"
                            ? "bg-[#047857] text-white border-[#047857] shadow-sm"
                            : "bg-[#f8fafc] text-neutral-700 border-neutral-300 hover:border-neutral-400 hover:bg-[#eef2f7]"
                        }`}
                      >
                        <GraduationCap className="w-4 h-4" />
                        <span>Student</span>
                      </button>
                    </div>
                  </div>

                  {/* Conditional Fields based on Status */}
                  {status === "employee" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-neutral-100/60 border border-neutral-200/80 transition-all">
                      <div className="space-y-1.5">
                        <Label htmlFor="call-company" className="text-xs font-semibold text-neutral-700">
                          Current Company *
                        </Label>
                        <Input
                          id="call-company"
                          name="company"
                          type="text"
                          placeholder="e.g. Microsoft, Deloitte, Acme Corp"
                          required
                          className="bg-[#f8fafc] border-neutral-300 focus:border-[#047857]"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="call-role" className="text-xs font-semibold text-neutral-700">
                          Current Role / Job Title *
                        </Label>
                        <Input
                          id="call-role"
                          name="role"
                          type="text"
                          placeholder="e.g. Lead AI Architect, VP Engineering"
                          required
                          className="bg-[#f8fafc] border-neutral-300 focus:border-[#047857]"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-neutral-100/60 border border-neutral-200/80 transition-all">
                      <div className="space-y-1.5">
                        <Label htmlFor="call-university" className="text-xs font-semibold text-neutral-700">
                          University / College Name *
                        </Label>
                        <Input
                          id="call-university"
                          name="university"
                          type="text"
                          placeholder="e.g. Stanford University, IIT, BITS"
                          required
                          className="bg-[#f8fafc] border-neutral-300 focus:border-[#047857]"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="call-degree" className="text-xs font-semibold text-neutral-700">
                          Degree / Major *
                        </Label>
                        <Input
                          id="call-degree"
                          name="degree"
                          type="text"
                          placeholder="e.g. B.Tech Computer Science, MS AI"
                          required
                          className="bg-[#f8fafc] border-neutral-300 focus:border-[#047857]"
                        />
                      </div>
                    </div>
                  )}

                  {/* Optional Message */}
                  <div className="space-y-1.5">
                    <Label htmlFor="call-message" className="text-xs font-semibold text-neutral-700">
                      Notes or Discussion Objectives (optional)
                    </Label>
                    <Textarea
                      id="call-message"
                      name="message"
                      rows={3}
                      placeholder="Share any specific AI topics, pilot initiatives, or questions you would like to discuss..."
                      className="bg-[#f8fafc] border-neutral-300 focus:border-[#047857] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white font-medium text-sm sm:text-base transition-all duration-200 shadow-md shadow-[#047857]/25 hover:shadow-lg hover:shadow-[#047857]/35 cursor-pointer disabled:opacity-60"
                    >
                      {isLoading ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <span>Schedule Call</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-neutral-500 mt-2">
                    By submitting, you agree to our privacy policy. We will never share your personal or company information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
