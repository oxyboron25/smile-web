import { useEffect, useState } from "react";
import countryDialCodes from "./constants/countryDialCodes";

type PointOfContactProps = {
  register: any;
  errors: any;
  phoneCode: string; // passed down from university dropdown
};

export default function PointOfContact({
  register,
  errors,
  phoneCode,
}: PointOfContactProps) {
  const [selectedCode, setSelectedCode] = useState(phoneCode || "+--");
  const [userOverridden, setUserOverridden] = useState(false);

  // keep in sync with university code, but only if user hasn’t overridden
  useEffect(() => {
    if (!userOverridden && phoneCode) {
      setSelectedCode(phoneCode);
    }
  }, [phoneCode, userOverridden]);

  return (
    <div className="relative w-full">
      <div
        className={`flex items-center rounded-md border-2 ${
          errors.contact?.phone ? "border-red-500" : "border-[#6F5252]"
        } bg-transparent`}
      >
        {/* Country Code Dropdown */}
        <div className="relative inline-flex items-center px-3 border-r-2 border-[#6F5252]">
          {/* Visible selected code */}
          <span className="text-white">{selectedCode || "+--"}</span>

          {/* Hidden select */}
          <select
            {...register("contact.countryCode")}
            value={selectedCode} // controlled by state
            onChange={(e) => {
              const val = e.target.value;
              setSelectedCode(val);
              setUserOverridden(true); // mark as overridden

              // keep RHF in sync
              const reg = register("contact.countryCode");
              reg.onChange?.({ target: { value: val } } as any);
            }}
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          >
            {countryDialCodes.map((c) => (
              <option
                key={c.code}
                value={c.code}
                className="bg-black text-white"
              >
                {c.name} ({c.code})
              </option>
            ))}
          </select>

          {/* Spacer */}
          <div aria-hidden="true" className="w-3" />

          {/* Dropdown arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Phone input */}
        <input
          type="tel"
          {...register("contact.phone")}
          placeholder="Contact Number*"
          className="flex-1 p-2 bg-transparent outline-none placeholder-white text-white"
        />

        {/* Phone Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-5 h-5 text-white mr-3 pointer-events-none"
          fill="currentColor"
        >
          <path d="M426.7,453.8l-38.1-79.1c-8.2-16.9-18.8-29.2-37.1-21.7l-36.1,13.4c-28.9,13.4-43.3,0-57.8-20.2l-65-147.9
            c-8.2-16.9-3.9-32.8,14.4-40.3l50.5-20.2c18.3-7.6,15.4-23.4,7.2-40.3l-43.3-80.6c-8.2-16.9-25-21-43.3-13.5
            c-36.6,15.1-66.9,38.8-86.6,73.9c-24,42.9-12,102.6-7.2,127.7c4.8,25.1,21.6,69.1,43.3,114.2c21.7,45.2,40.7,80.7,57.8,100.8
            c17,20.1,57.8,75.1,108.3,87.4c41.4,10,86.1,1.6,122.7-13.5C434.8,486.7,434.8,470.8,426.7,453.8z" />
        </svg>
      </div>

      {/* Validation error */}
      {errors.contact?.phone && (
        <p className="text-red-500 text-sm mt-1">
          {errors.contact.phone.message}
        </p>
      )}
    </div>
  );
}
