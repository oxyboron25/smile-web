type PointOfContactProps = {
  register: any;
  errors: any;
  phoneCode: string;
};

export default function PointOfContact({
  register,
  errors,
  phoneCode,
}: PointOfContactProps) {
  return (
    <section>
      <h2 className="text-lg text-center text-black bg-[#7ED7CA] p-2">
        Point of Contact
      </h2>

      <div className="mt-4 space-y-6">
        {/* Name */}
        <div>
          <input
            {...register("contact.name")}
            placeholder="Name*"
            className={`w-full p-2 rounded border-2 ${
              errors.contact?.name ? "border-red-500" : "border-[#6F5252]"
            } bg-transparent text-white placeholder-white`}
          />
          {errors.contact?.name && (
            <p className="text-red-500 text-sm">
              {errors.contact.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            {...register("contact.email")}
            placeholder="E-Mail ID*"
            className={`w-full p-2 rounded border-2 ${
              errors.contact?.email ? "border-red-500" : "border-[#6F5252]"
            } bg-transparent text-white placeholder-white`}
          />
          {errors.contact?.email && (
            <p className="text-red-500 text-sm">
              {errors.contact.email.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Phone */}
          <div className="relative w-full">
            <div
              className={`flex items-center rounded-md border-2 ${
                errors.contact?.phone ? "border-red-500" : "border-[#6F5252]"
              } bg-transparent`}
            >
              {/* Country Code */}
              <span className="px-3 text-white">{phoneCode || "+--"}</span>

              <input
                type="tel"
                {...register("contact.phone")}
                placeholder="Contact Number*"
                className="flex-1 p-2 bg-transparent outline-none placeholder-white"
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
            {errors.contact?.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.contact.phone.message}
              </p>
            )}
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col">
            <input
              {...register("contact.linkedin")}
              placeholder="LinkedIn*"
              className={`w-full p-2 rounded border-2 ${
                errors.contact?.linkedin ? "border-red-500" : "border-[#6F5252]"
              } bg-transparent text-white placeholder-white`}
            />
            {errors.contact?.linkedin && (
              <p className="text-red-500 text-sm">
                {errors.contact.linkedin.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
