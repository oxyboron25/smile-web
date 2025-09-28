// "use client";

// import { Control, UseFormRegister, FieldErrors } from "react-hook-form";
// import { FormData } from "./schemas"; // adjust path
// import FileUploadField from "./components/FileUploadFields";

// type UploadsSectionProps = {
//   register: UseFormRegister<FormData>;
//   errors: FieldErrors<FormData>;
// };

// export default function UploadsSection({ register, errors }: UploadsSectionProps) {
//   return (
//     <section className="space-y-4">
//       {/* Section Title */}
//       <h2 className="text-lg text-center text-white bg-[#1E1E1E] border border-[#6F5252] p-2 rounded-md">
//         Uploads
//       </h2>

//       {/* File Upload Fields */}
//       <FileUploadField
//         label="Proof of University Affiliation"
//         name="uploads.proof"
//         register={register}
//         error={errors.uploads?.proof}
//         required
//       />

//       {/* Future fields */}
//       {/* <FileUploadField
//         label="Team Logo"
//         name="uploads.logo"
//         register={register}
//         error={errors.uploads?.logo}
//       /> */}
//     </section>
//   );
// }
"use client";

import { Control, UseFormRegister, FieldErrors, useWatch } from "react-hook-form";
import { FormData } from "./schemas"; // adjust path
import FileUploadField from "./components/FileUploadFields";

type UploadsSectionProps = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  control: Control<FormData>; // needed to watch the file
};

export default function UploadsSection({ register, errors, control }: UploadsSectionProps) {
  // Watch the uploaded file
  const uploadedFile = useWatch({
    control,
    name: "uploads.proof",
  });

  return (
    <section className="space-y-4">
      {/* Section Title */}
      <h2 className="text-lg text-center text-white bg-[#1E1E1E] border border-[#6F5252] p-2 rounded-md">
        Uploads
      </h2>

      {/* File Upload Fields */}
      <FileUploadField
        label="Proof of University Affiliation"
        name="uploads.proof"
        register={register}
        error={errors.uploads?.proof}
        required
      />

      {/* Display uploaded file name */}
      {uploadedFile && uploadedFile.length > 0 && (
        <p className="text-sm text-green-400">
          Uploaded file: {uploadedFile[0].name}
        </p>
      )}

      {/* Future fields */}
      {/* <FileUploadField
        label="Team Logo"
        name="uploads.logo"
        register={register}
        error={errors.uploads?.logo}
      /> */}
    </section>
  );
}
