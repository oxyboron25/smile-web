"use client";

import { Control, UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "./schemas"; // adjust path
import FileUploadField from "./components/FileUploadFields";

type UploadsSectionProps = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

export default function UploadsSection({ register, errors }: UploadsSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg text-center text-black bg-[#7ED7CA] p-2 rounded">
        Uploads
      </h2>

      <FileUploadField
        label="Proof of University Affiliation"
        name="uploads.proof"
        register={register}
        error={errors.uploads?.proof}
        required
      />

      {/* Add more fields easily */}
      {/* <FileUploadField
        label="Team Logo"
        name="uploads.logo"
        register={register}
        error={errors.uploads?.logo}
      /> */}
    </section>
  );
}
