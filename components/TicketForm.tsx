"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// 1. Zod Schema for Validation
const ticketSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters long." }),
  description: z
    .string()
    .min(20, { message: "Description must be at least 20 characters long." }),
  priority: z.enum(["low", "medium", "high"]),
});

// Infer the TypeScript type from the schema
type TicketFormData = z.infer<typeof ticketSchema>;

export default function TicketForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. React Hook Form Setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TicketFormData>({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      title: "",
      description: "",
      priority: "medium",
    },
  });

  // 3. Simulated Submit Handler
  const onSubmit = async (data: TicketFormData) => {
    setIsSubmitting(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Validated Ticket Data:", data);

    setIsSubmitting(false);
    reset(); // Reset form after successful submission
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Submit a Ticket</h2>
        <p className="text-gray-500 text-sm mt-1">
          Please fill out the details below to report an issue.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Title Field */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="E.g., Cannot access email"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
              errors.title
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
            }`}
            aria-invalid={errors.title ? "true" : "false"}
            {...register("title")}
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500" role="alert">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Description Field */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            placeholder="Please describe the issue in detail..."
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
              errors.description
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
            }`}
            aria-invalid={errors.description ? "true" : "false"}
            {...register("description")}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-500" role="alert">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Priority Field */}
        <div>
          <label
            htmlFor="priority"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Priority
          </label>
          <select
            id="priority"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 focus:outline-none bg-white transition-colors"
            {...register("priority")}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-colors focus:ring-4 focus:ring-blue-300 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </>
          ) : (
            "Submit Ticket"
          )}
        </button>
      </form>
    </div>
  );
}
