"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "../schemas";
import { X } from "lucide-react";

type MemberCardProps = {
  index: number;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  roleValue: string;
  studyValue: string;
  allRoles: string[];
  phoneCode: string;
  onRemove: () => void;
  canRemove: boolean;
};

export default function MemberCard({
  index,
  register,
  errors,
  roleValue,
  studyValue,
  allRoles,
  phoneCode,
  onRemove,
  canRemove,
}: MemberCardProps) {
  const predefinedRoles = [
    "President",
    "Vice President",
    "Director, Marketing",
    "Director, Projects",
    "Custom",
  ];

  const studyLevels = [
    "Undergraduate-First Year",
    "Undergraduate-Second Year",
    "Undergraduate-Third Year",
    "Undergraduate-Fourth Year",
    "Postgraduate-Masters",
    "Postgraduate-Doctoral",
  ];

  return (
    <div className="relative mt-6 space-y-6 border border-gray-600 p-6 rounded-xl shadow-md bg-gray-800/40">
      <h3 className="text-teal-300 text-lg font-semibold">Member {index + 1}</h3>

      {/* Remove Button */}
      {canRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="absolute top-3 right-3 p-1 rounded-full bg-red-600 hover:bg-red-700 transition"
          aria-label="Remove member"
        >
          <X size={16} className="text-white" />
        </button>
      )}

      {/* Role */}
      <div>
        <label className="block mb-2 text-sm font-medium text-white">
          {roleValue ? `Role: ${roleValue}` : "Select the Role*"}
        </label>
        <div className="flex flex-wrap gap-4">
          {predefinedRoles.map((role) => {
            const isTaken = allRoles.includes(role) && roleValue !== role;
            return (
              <label key={role} className="flex items-center gap-2 text-white">
                <input
                  type="radio"
                  value={role}
                  {...register(`foundingMembers.${index}.role`)}
                  className="accent-[#3ECF8E]"
                  disabled={isTaken && role !== "President"}
                />
                <span className={isTaken ? "line-through text-gray-500" : ""}>{role}</span>
              </label>
            );
          })}
        </div>
        {roleValue === "Custom" && (
          <input
            type="text"
            {...register(`foundingMembers.${index}.customRole`)}
            placeholder="Enter custom role"
            className="mt-3 w-full p-2 rounded border-2 border-[#6F5252] bg-transparent text-white placeholder-white"
          />
        )}
        {errors.foundingMembers?.[index]?.role && (
          <p className="text-red-500 text-sm mt-1">
            {errors.foundingMembers[index]?.role?.message as string}
          </p>
        )}
      </div>

      {/* Name */}
      <div>
        <input
          type="text"
          {...register(`foundingMembers.${index}.name`)}
          placeholder="Full Name*"
          className="w-full p-2 rounded border-2 border-[#6F5252] bg-transparent text-white"
        />
        {errors.foundingMembers?.[index]?.name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.foundingMembers[index]?.name?.message as string}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          {...register(`foundingMembers.${index}.email`)}
          placeholder="Email Address*"
          className="w-full p-2 rounded border-2 border-[#6F5252] bg-transparent text-white"
        />
        {errors.foundingMembers?.[index]?.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.foundingMembers[index]?.email?.message as string}
          </p>
        )}
      </div>

      {/* Phone + LinkedIn + Discipline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center rounded-md border-2 border-[#6F5252] bg-transparent">
          <span className="px-3 text-white">{phoneCode || "+--"}</span>
          <input
            type="tel"
            {...register(`foundingMembers.${index}.phone`)}
            placeholder="Contact Number*"
            className="flex-1 p-2 bg-transparent outline-none placeholder-white"
          />
        </div>
        <input
          type="url"
          {...register(`foundingMembers.${index}.linkedin`)}
          placeholder="LinkedIn Profile"
          className="w-full p-2 rounded border-2 border-[#6F5252] bg-transparent text-white"
        />
        <input
          type="text"
          {...register(`foundingMembers.${index}.discipline`)}
          placeholder="Discipline"
          className="w-full p-2 rounded border-2 border-[#6F5252] bg-transparent text-white"
        />
      </div>

      {/* Study */}
      <div>
        <label className="block mb-2 text-sm font-medium text-white">
          {studyValue ? `Study Level: ${studyValue}` : "Current level of study*"}
        </label>
        <div className="grid grid-cols-2 gap-4">
          {studyLevels.map((study) => (
            <label key={study} className="flex items-center gap-3 text-white">
              <input
                type="radio"
                value={study}
                {...register(`foundingMembers.${index}.study`)}
                className="accent-[#3ECF8E]"
              />
              {study}
            </label>
          ))}
        </div>
        {errors.foundingMembers?.[index]?.study && (
          <p className="text-red-500 text-sm mt-1">
            {errors.foundingMembers[index]?.study?.message as string}
          </p>
        )}
      </div>

      {/* Resume */}
      <div>
        <label className="block mb-2 text-sm font-medium text-white">Upload Resume*</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          {...register(`foundingMembers.${index}.resume`)}
          className="w-full p-2 rounded border-2 border-[#6F5252] bg-transparent text-white"
        />
        {errors.foundingMembers?.[index]?.resume && (
          <p className="text-red-500 text-sm mt-1">
            {errors.foundingMembers[index]?.resume?.message as string}
          </p>
        )}
      </div>
    </div>
  );
}






// "use client";

// import { UseFormRegister, FieldErrors } from "react-hook-form";
// import { FormData } from "../schemas";

// type MemberCardProps = {
//   index: number;
//   register: UseFormRegister<FormData>;
//   errors: FieldErrors<FormData>;
//   roleValue: string;
//   studyValue: string;
//   allRoles: string[];
//   phoneCode: string;
//   onRemove: () => void;
//   canRemove: boolean;
// };

// export default function MemberCard({
//   index,
//   register,
//   errors,
//   roleValue,
//   studyValue,
//   allRoles,
//   phoneCode,
//   onRemove,
//   canRemove,
// }: MemberCardProps) {
//   return (
//     <div className="mt-6 space-y-6 border border-gray-600 p-4 rounded-lg relative">
//       <h3 className="text-teal-300">Member {index + 1}</h3>

//       {/* Role */}
//       <div>
//         <label
//           className={`p-2 inline-block mb-2 border-2 ${
//             errors?.foundingMembers?.[index]?.role ? "border-red-500" : "border-[#6F5252]"
//           }`}
//         >
//           {roleValue ? `Role: ${roleValue}` : "Select the Role*"}
//         </label>
//         <div className="flex flex-wrap gap-6">
//           {["President", "Vice President", "Director, Marketing", "Director, Projects"].map(
//             (role) => {
//               const isTaken = allRoles.includes(role) && roleValue !== role;
//               return (
//                 <label key={role} className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     value={role}
//                     {...register(`foundingMembers.${index}.role`)}
//                     className="accent-[#3ECF8E]"
//                     disabled={isTaken && role !== "President"}
//                   />
//                   <span className={isTaken ? "line-through text-gray-500" : ""}>{role}</span>
//                 </label>
//               );
//             }
//           )}
//           <input
//             type="text"
//             {...register(`foundingMembers.${index}.customRole`)}
//             placeholder="Custom role"
//             className="ml-3 p-2 rounded border-2 border-[#6F5252] bg-transparent text-white placeholder-white"
//           />
//         </div>
//         {errors.foundingMembers?.[index]?.role && (
//           <p className="text-red-500 text-sm mt-1">
//             {errors.foundingMembers[index]?.role?.message as string}
//           </p>
//         )}
//       </div>

//       {/* Name */}
//       <input
//         type="text"
//         {...register(`foundingMembers.${index}.name`)}
//         placeholder="Full Name"
//         className="w-full p-2 rounded border-2 border-[#6F5252] bg-transparent text-white"
//       />

//       {/* Email */}
//       <input
//         type="email"
//         {...register(`foundingMembers.${index}.email`)}
//         placeholder="Email Address"
//         className="w-full p-2 rounded border-2 border-[#6F5252] bg-transparent text-white"
//       />

//       {/* Phone + LinkedIn + Discipline */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="flex items-center rounded-md border-2 border-[#6F5252] bg-transparent">
//           <span className="px-3 text-white">{phoneCode || "+--"}</span>
//           <input
//             type="tel"
//             {...register(`foundingMembers.${index}.phone`)}
//             placeholder="Contact Number*"
//             className="flex-1 p-2 bg-transparent outline-none placeholder-white"
//           />
//         </div>
//         <input
//           type="url"
//           {...register(`foundingMembers.${index}.linkedin`)}
//           placeholder="LinkedIn Profile"
//           className="w-full p-2 rounded border-2 border-[#6F5252] bg-transparent text-white"
//         />
//         <input
//           type="text"
//           {...register(`foundingMembers.${index}.discipline`)}
//           placeholder="Discipline"
//           className="w-full p-2 rounded border-2 border-[#6F5252] bg-transparent text-white"
//         />
//       </div>

//       {/* Study */}
//       <label
//         className={`inline-block p-2 mb-2 border-2 rounded ${
//           errors.foundingMembers?.[index]?.study ? "border-red-500" : "border-[#6F5252]"
//         }`}
//       >
//         {studyValue ? `Study Level: ${studyValue}` : "Current level of study*"}
//       </label>
//       <div className="grid grid-cols-2 gap-4">
//         {[
//           "Undergraduate-First Year",
//           "Undergraduate-Second Year",
//           "Undergraduate-Third Year",
//           "Undergraduate-Fourth Year",
//           "Postgraduate-Masters",
//           "Postgraduate-Doctoral",
//         ].map((study) => (
//           <label key={study} className="flex items-center gap-3">
//             <input
//               type="radio"
//               value={study}
//               {...register(`foundingMembers.${index}.study`)}
//               className="accent-[#3ECF8E]"
//             />
//             {study}
//           </label>
//         ))}
//       </div>

//       {/* Resume */}
//       <input
//         type="file"
//         {...register(`foundingMembers.${index}.resume`)}
//         className="w-full p-2 rounded border-2 border-[#6F5252] bg-transparent text-white"
//       />

//       {/* Remove Button */}
//       {canRemove && (
//         <button
//           type="button"
//           onClick={onRemove}
//           className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
//         >
//           Remove
//         </button>
//       )}
//     </div>
//   );
// }
