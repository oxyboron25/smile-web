"use client";

import { useWatch, UseFormRegister, FieldErrors, Control, UseFieldArrayAppend, UseFieldArrayRemove } from "react-hook-form";
import { useEffect, useMemo } from "react";
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
  submitting?: boolean;
};

const INITIAL_MEMBERS = 4;
const MAX_MEMBERS = 6;

const defaultMember = {
  role: "",
  customRole: "",
  name: "",
  email: "",
  phone: "",
  linkedin: "",
  discipline: "",
  study: "",
  resume: [],
};

export default function FoundingMembers({
  control,
  register,
  errors,
  fields,
  append,
  remove,
  phoneCode,
  submitting = false,
}: Props) {
  const foundingMembersValues = useWatch({ control, name: "foundingMembers" }) || [];

  const allRoles = useMemo(
    () => foundingMembersValues.map((m: any) => m?.role || ""),
    [foundingMembersValues]
  );

  // Ensure exactly INITIAL_MEMBERS on mount
  useEffect(() => {
    if (fields.length === 0) {
      for (let i = 0; i < INITIAL_MEMBERS; i++) {
        append(defaultMember);
      }
    }
  }, [append, fields.length]);

  return (
    <section>
      <h2 className="text-lg text-center font-semibold text-black bg-[#7ED7CA] p-2 rounded">
        Founding Members
      </h2>
      <p className="text-center text-black bg-[#DADAB1] p-3 mt-4 mb-4 rounded-lg">
        Please note you must have at least {INITIAL_MEMBERS} founding members (max {MAX_MEMBERS}).
      </p>

      {fields.map((member, index) => {
        const currentMember = foundingMembersValues[index] || {};
        return (
          <MemberCard
            key={member.id}
            index={index}
            register={register}
            errors={errors}
            roleValue={currentMember.role || ""}
            studyValue={currentMember.study || ""}
            allRoles={allRoles}
            phoneCode={phoneCode}
            onRemove={() => remove(index)}
            canRemove={fields.length > INITIAL_MEMBERS}
          />
        );
      })}

      {fields.length < MAX_MEMBERS && (
        <button
          type="button"
          onClick={() => append(defaultMember)}
          disabled={submitting}
          className={`mt-4 bg-[#076461] px-4 py-2 rounded text-white ${
            submitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          + Add Member
        </button>
      )}
    </section>
  );
}
