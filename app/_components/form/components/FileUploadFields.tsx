"use client";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type FileUploadFieldProps = {
  label: string;
  name: string;
  register: any;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  required?: boolean;
};


export default function FileUploadField({
  label,
  name,
  register,
  error,
  required,
}: FileUploadFieldProps) {
  return (
    <div className="space-y-1">
      <label
        className={`flex items-center justify-between p-3 rounded border-2 cursor-pointer bg-[#1F1F1F] text-white ${
          error ? "border-red-500" : "border-[#6F5252]"
        }`}
      >
        <span>
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </span>

        <input type="file" {...register(name)} className="hidden" />

        <span className="text-gray-300 flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0L8.25 13.5m3.75-3.75 3.75 3.75M4.5 19.5h15"
            />
          </svg>
          <span className="text-sm">Upload</span>
        </span>
      </label>

      {/* Error message */}
      {error && <p className="text-red-500 text-sm">{error.message as string}</p>}
    </div>
  );
}
