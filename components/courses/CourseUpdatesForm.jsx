"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function CourseUpdatesForm({ course }) {
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'sent' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("_subject", `Course Updates Signup: ${course} - EnterpriseSI`);
    formData.append("course", course);
    setStatus("sending");

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/abhiroop@enterprisesi.co",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );
      const data = await res.json();
      setStatus(res.ok && String(data.success) === "true" ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="rounded-xl border border-neutral-300/80 bg-white p-5 shadow-xs">
      <h2 className="mb-3 text-sm font-medium uppercase tracking-wide text-neutral-600">
        Get course updates
      </h2>

      {status === "sent" ? (
        <p role="status" className="text-sm text-neutral-700">
          Thanks, we will email you updates about this course.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex gap-2 rounded-xl border border-neutral-200 p-1 focus-within:border-[#047857]"
        >
          <input
            type="email"
            name="email"
            required
            aria-label="Your email"
            placeholder="Your email"
            className="min-w-0 flex-1 bg-transparent px-3 outline-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            aria-label="Sign up for course updates"
            className="rounded-lg bg-[#047857] px-6 py-4 text-white transition-colors hover:bg-[#065f46] cursor-pointer disabled:opacity-60"
          >
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </form>
      )}

      {status === "error" && (
        <p role="alert" className="mt-3 text-sm text-red-700">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
