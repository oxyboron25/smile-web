// FoundingMembers.tsx
"use client";

import {
  useWatch,
  UseFormRegister,
  FieldErrors,
  Control,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
} from "react-hook-form";
import { FormData } from "./schemas";
import MemberCard from "./components/MemberCard";

type Props = {
  control: Control<FormData>;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  fields: { id: string }[];
  append: UseFieldArrayAppend<FormData, "foundingMembers">;
  remove: UseFieldArrayRemove;
  phoneCode: string;
};

export default function FoundingMembers({
  control,
  register,
  errors,
  fields,
  append,
  remove,
  phoneCode,
}: Props) {
  // ✅ Watch the whole array once
  const foundingMembersValues = useWatch({ control, name: "foundingMembers" }) || [];

  return (
    <section>
      <h2 className="text-lg text-center text-black bg-[#7ED7CA] p-2">
        Founding Members
      </h2>
      <h2 className="text-md text-center text-black bg-[#DADAB1] p-3 mt-4 mb-4 rounded-lg">
        Please note you must have at least 4 founding members (max 6).
      </h2>

      {fields.map((member, index) => {
        const currentMember = foundingMembersValues[index] || {};
        const roleValue = currentMember.role || "";
        const studyValue = currentMember.study || "";
        const allRoles = foundingMembersValues.map((m: any) => m?.role || "");

        return (
          <MemberCard
            key={member.id}
            index={index}
            register={register}
            errors={errors}
            roleValue={roleValue}
            studyValue={studyValue}
            allRoles={allRoles}
            phoneCode={phoneCode}
            onRemove={() => remove(index)}
            canRemove={fields.length > 4}
          />
        );
      })}

      {fields.length < 6 && (
        <button
          type="button"
          onClick={() =>
            append({
              role: "",
              customRole: "",
              name: "",
              email: "",
              phone: "",
              linkedin: "",
              discipline: "",
              study: "",
              resume: [],
            })
          }
          className="mt-4 bg-[#076461] px-4 py-2 rounded text-white"
        >
          + Add Member
        </button>
      )}
    </section>
  );
}
