"use client";

import { useState } from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import countryDialCodes from "./constants/countryDialCodes";
import { roleMap, studyMap } from "./constants/mappings";
import { formSchema, FormData } from "./schemas";
import HeroSection from "./HeroSection";
import UniversityDetails from "./UniversityDetails";
import PointOfContact from "./PointOfContact";
import FoundingMembers from "./FoundingMembers";
import UploadsSection from "./UploadSection";
import ChapterDeclaration from "./ChapterDeclaration";
import toast, { Toaster } from "react-hot-toast";

export default function Form() {
  const [submitting, setSubmitting] = useState(false);

  // Form setup
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foundingMembers: [],
    },
  });

  // Founding members array
  const { fields, append, remove } = useFieldArray({
    control,
    name: "foundingMembers",
  });

  // Phone code hook
  const selectedCountry = useWatch({ control, name: "university.country" });
  const phoneCode = countryDialCodes.find(c => c.name === selectedCountry)?.code || "";

  // Helper to map form data to API payload
  const mapFormDataToPayload = (data: FormData) => ({
    university_chapter: {
      university: {
        id: null,
        name: data.university.university,
        address: data.university.address,
        country: data.university.country,
        state: data.university.state,
        pin_code: data.university.pincode,
        website: data.university.website,
      },
      point_of_contact: {
        id: null,
        contact: {
          id: null,
          linkedin: data.contact.linkedin,
        },
      },
      founding_members: data.foundingMembers.map(m => ({
        id: null,
        contact: {
          id: null,
          name: m.name,
          email: m.email,
          phone_number: phoneCode ? `${phoneCode}${m.phone}` : m.phone,
          linkedin: m.linkedin,
        },
        role: roleMap[m.role] || m.customRole || m.role,
        current_level_of_study: studyMap[m.study] || m.study,
        discipline: m.discipline,
        resume: m.resume?.[0] || null,
        proof_of_association: null,
      })),
    },
  });

  // Submit handler
  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const payload = mapFormDataToPayload(data);
      const res = await fetch("https://smile-forms.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to submit");
      const result = await res.json();
      toast.success("✅ Submitted successfully!");
      console.log(result);
    } catch (err) {
      toast.error("❌ Submission failed. Please try again.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="p-10 space-y-8 bg-black text-white"
      >
        <HeroSection />

        <UniversityDetails register={register} errors={errors} control={control} />

        <PointOfContact register={register} errors={errors} phoneCode={phoneCode} />

        <FoundingMembers
          control={control}
          register={register}
          errors={errors}
          fields={fields}
          append={append}
          remove={remove}
          phoneCode={phoneCode}
        />

        <UploadsSection register={register} errors={errors} />

        <ChapterDeclaration register={register} errors={errors} />

        <button
          type="submit"
          disabled={submitting}
          className={`bg-gray-400 px-5 py-2 mx-auto flex items-center justify-center text-black font-medium rounded ${
            submitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
}
