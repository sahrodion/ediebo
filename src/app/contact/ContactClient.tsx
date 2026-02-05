"use client";

import { useState } from "react";
import { Input, Select, Textarea } from "@/components/Inputs";
import { Button } from "@/components/Button";

type FormState = {
  name: string;
  email: string;
  company: string;
  website: string;
  budget: string;
  timeline: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  website: "",
  budget: "",
  timeline: "",
  message: "",
};

export const ContactClient = () => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (field: keyof FormState, value: string): void => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data?.message || "Submission failed");
      }

      setStatus("success");
      setFormState(initialState);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl bg-surface/90 p-6 shadow-soft"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.3em] text-textSecondary">
            Name
          </label>
          <Input
            required
            value={formState.name}
            onChange={(event) => handleChange("name", event.target.value)}
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.3em] text-textSecondary">
            Email
          </label>
          <Input
            required
            type="email"
            value={formState.email}
            onChange={(event) => handleChange("email", event.target.value)}
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.3em] text-textSecondary">
            Company
          </label>
          <Input
            required
            value={formState.company}
            onChange={(event) => handleChange("company", event.target.value)}
            placeholder="Company name"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.3em] text-textSecondary">
            Website (optional)
          </label>
          <Input
            value={formState.website}
            onChange={(event) => handleChange("website", event.target.value)}
            placeholder="https://"
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.3em] text-textSecondary">
            Budget
          </label>
          <Select
            required
            value={formState.budget}
            onChange={(event) => handleChange("budget", event.target.value)}
          >
            <option value="">Select</option>
            <option value="£120-£250">£120-£250</option>
            <option value="£250-£450">£250-£450</option>
            <option value="£450+">£450+</option>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.3em] text-textSecondary">
            Timeline
          </label>
          <Select
            required
            value={formState.timeline}
            onChange={(event) => handleChange("timeline", event.target.value)}
          >
            <option value="">Select</option>
            <option value="2-4 weeks">2-4 weeks</option>
            <option value="4-8 weeks">4-8 weeks</option>
            <option value="8+ weeks">8+ weeks</option>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-[0.3em] text-textSecondary">
          Project details
        </label>
        <Textarea
          required
          rows={5}
          value={formState.message}
          onChange={(event) => handleChange("message", event.target.value)}
          placeholder="Tell us about your goals, audience, and what success looks like."
        />
      </div>
      {status === "error" && errorMessage ? (
        <p className="text-sm text-red-400">{errorMessage}</p>
      ) : null}
      {status === "success" ? (
        <p className="text-sm text-accent">
          Thanks - we'll be in touch shortly.
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto"
      >
        {status === "loading" ? "Submitting..." : "Submit enquiry"}
      </Button>
    </form>
  );
};
