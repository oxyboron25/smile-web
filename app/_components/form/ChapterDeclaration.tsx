"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "./schemas";

type ChapterDeclarationProps = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

export default function ChapterDeclaration({ register, errors }: ChapterDeclarationProps) {
  return (
    <section className="mt-10 space-y-10">
      {/* Chapter Plan */}
      <div>
        <label
          htmlFor="chapterPlan"
          className="block text-white font-medium mb-2"
        >
          Chapter Plan*
        </label>
        <textarea
          id="chapterPlan"
          rows={6}
          {...register("uploads.chapterPlan")}
          className={`w-full rounded-xl border ${
            errors.uploads?.chapterPlan ? "border-red-500" : "border-gray-400"
          } bg-gray-700/50 text-white placeholder-gray-400 px-4 py-3 focus:ring-2 focus:ring-[#3ECF8E] focus:border-[#3ECF8E] outline-none`}
          placeholder="Describe your proposed chapter plan, including objectives, activities, and expected outcomes..."
        ></textarea>
        {errors.uploads?.chapterPlan && (
          <p className="text-red-500 text-sm mt-1">
            {errors.uploads?.chapterPlan.message}
          </p>
        )}
      </div>

      {/* Declaration */}
      <div>
        <fieldset className="space-y-2">
          <legend className="text-white font-medium">
            Declaration of truthfulness*
          </legend>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("uploads.declaration")}
              className="mt-1 h-5 w-5 accent-[#3ECF8E] rounded"
            />
            <span className="text-[#7ED7CA] leading-relaxed">
              I declare that the information provided is true and accurate to the
              best of my knowledge.
            </span>
          </label>
          {errors.uploads?.declaration && (
            <p className="text-red-500 text-sm mt-1">
              {errors.uploads?.declaration.message}
            </p>
          )}
        </fieldset>
      </div>

      {/* Consent */}
      <div>
        <fieldset className="space-y-2">
          <legend className="text-white font-medium">Consent*</legend>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("uploads.consent")}
              className="mt-1 h-5 w-5 accent-[#3ECF8E] rounded"
            />
            <span className="text-[#7ED7CA] leading-relaxed">
              I consent to having my information processed by SMILE and shared with
              SMILE’s members and/or partners. My data will be used to process this
              request, generate statistics, and promote SMILE, its members, and
              partners.
            </span>
          </label>
          {errors.uploads?.consent && (
            <p className="text-red-500 text-sm mt-1">
              {errors.uploads?.consent.message}
            </p>
          )}
        </fieldset>
      </div>
    </section>
  );
}
