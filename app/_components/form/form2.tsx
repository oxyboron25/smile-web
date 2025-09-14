"use client";

import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import countryDialCodes from "./constants/countryDialCodes";
import { roleMap, studyMap } from "./constants/mappings"
import { formSchema, FormData } from "./schemas";


export default function Form() {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			foundingMembers: [
				{ role: "", customRole: "", name: "", email: "", phone: "", linkedin: "", discipline: "", study: "", resume: [] },
				{ role: "", customRole: "", name: "", email: "", phone: "", linkedin: "", discipline: "", study: "", resume: [] },
				{ role: "", customRole: "", name: "", email: "", phone: "", linkedin: "", discipline: "", study: "", resume: [] },
				{ role: "", customRole: "", name: "", email: "", phone: "", linkedin: "", discipline: "", study: "", resume: [] },
			],
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: "foundingMembers",
	});
	

	

	const onSubmit = async (data: FormData) => {
		const phoneCode =
			countryDialCodes.find((c) => c.name === data.university.country)?.code || "";
		const payload = {
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
				founding_members: data.foundingMembers.map((m) => ({
					id: null,
					contact: {
						id: null,
						name: m.name,
						email: m.email,
						phone_number: phoneCode
							? `${phoneCode}${m.phone}`
							: m.phone,
						linkedin: m.linkedin,
					},
					role: roleMap[m.role] || m.customRole || m.role,
					current_level_of_study: studyMap[m.study] || m.study,
					discipline: m.discipline,
					resume: m.resume?.[0] || null, // update later if you want file uploads
					proof_of_association: null,
				})),
			},
		};

		try {
			const res = await fetch("https://smile-forms.onrender.com", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});

			if (!res.ok) throw new Error("Failed to submit");

			const result = await res.json();
			console.log("✅ Submitted successfully:", result);
		} catch (err) {
			console.error("❌ Submission error:", err);
		}
	};

	const selectedCountry = useWatch({ control, name: "university.country" });
	const phoneCode =
		countryDialCodes.find((c) => c.name === selectedCountry)?.code || "";
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			noValidate
			className="p-10 space-y-8 bg-black text-white"
		>
			{/* Hero */}
			<div className="bg-[#5DA399] p-6 text-start flex flex-col items-start gap-2 max-w-96">
				<div className="flex items-center gap-5 justify-center">
					<span className="text-5xl">Join</span>
					<img src="/new/logo.png" alt="SMILE Logo" className="h-10 w-auto" />
				</div>
				<p className="text-lg font-medium">Launch Your Own SMILE Chapter</p>
			</div>
			<p className="p-10 text-center text-gray-300 border-2 border-[#2F5D56]">
				SMILE(Society for Mental Health Inclusivity, Literacy, & Empowerment) is a non-profit organization that aims to destigmatize mental health issues globally. We are committed to providing free resources and services in collaboration with other organizations to improve the mental health facilities and resources on college campuses across US, India, UK and soon the world.
			</p>

			{/* University Details */}
			<section>
				<h2 className="text-lg text-center text-black bg-[#7ED7CA] p-2">
					University Details
				</h2>

				<div className="mt-4 space-y-6">
					<div>
						<input
							{...register("university.university")}
							placeholder="Name of University*"
							className={`w-full p-2 rounded border-2 border-[#6F5252] ${errors.university?.university ? "border-red-500" : "border-[#6F5252]"
								} bg-transparent text-white placeholder-white focus:outline-none focus:ring-0 focus:border-[#6F5252]`}
						/>
						{errors.university?.university && (
							<p className="text-red-500 text-sm">{errors.university?.university.message}</p>
						)}
					</div>

					<div>
						<input
							{...register("university.address")}
							placeholder="Address*"
							className={`w-full p-2 rounded border-2 border-[#6F5252] ${errors.university?.address ? "border-red-500" : "border-[#6F5252]"
								} bg-transparent text-white placeholder-white`}
						/>
						{errors.university?.address && (
							<p className="text-red-500 text-sm">{errors.university?.address.message}</p>
						)}
					</div>

					<div className="grid grid-cols-3 gap-4">
						{/* State */}
						<div className="flex flex-col">
							<select
								{...register("university.state")}
								className={`p-2 rounded border-2 border-[#6F5252] ${errors.university?.state ? "border-red-500" : "border-[#6F5252]"
									} bg-transparent placeholder-white`}
							>
								<option value="" className="text-black">State*</option>
								<option value="Delhi" className="text-black">Delhi</option>
								<option value="Maharashtra" className="text-black">Maharashtra</option>
								<option value="Karnataka" className="text-black">Karnataka</option>
							</select>
							{errors.university?.state?.message && (
								<p className="text-red-500 text-sm mt-1">{errors.university?.state.message}</p>
							)}
						</div>

						{/* Pincode */}
						{/* Pincode (as input) */}
						<div className="flex flex-col">
							<input
								{...register("university.pincode")}
								placeholder="Pincode*"
								className={`w-full p-2 rounded border-2 ${errors.university?.pincode ? "border-red-500" : "border-[#6F5252]"
									} bg-transparent text-white placeholder-white`}
							/>
							{errors.university?.pincode?.message && (
								<p className="text-red-500 text-sm mt-1">{errors.university?.pincode.message}</p>
							)}
						</div>

						{/* country (as input) */}
						<div className="flex flex-col">
							<div>
								<select
									{...register("university.country")}
									className={`p-2 rounded border-2 border-[#6F5252] ${errors.university?.country ? "border-red-500" : "border-[#6F5252]"
										} bg-transparent placeholder-white`}
								>
									<option value="" className="text-black">Country*</option>
									{countryDialCodes.map((c) => (
										<option key={c.name} value={c.name} className="text-black">
											{c.name}
										</option>
									))}
								</select>
								{errors.university?.country && (
									<p className="text-red-500 text-sm">{errors.university?.country.message}</p>
								)}
							</div>

						</div>

					</div>


					<div>
						<input
							{...register("university.website")}
							placeholder="University Website Link*"
							className={`w-full p-2 rounded border-2 border-[#6F5252] ${errors.university?.website ? "border-red-500" : "border-[#6F5252]"
								} bg-transparent text-white placeholder-white`}
						/>
						{errors.university?.website && (
							<p className="text-red-500 text-sm">{errors.university?.website.message}</p>
						)}
					</div>
				</div>
			</section>

			{/* Point of Contact */}
			<section>
				<h2 className="text-lg text-center text-black bg-[#7ED7CA] p-2">
					Point of Contact
				</h2>

				<div className="mt-4 space-y-6">
					<div>
						<input
							{...register("contact.name")}
							placeholder="Name*"
							className={`w-full p-2 rounded border-2 border-[#6F5252] ${errors.contact?.name ? "border-red-500" : "border-[#6F5252]"
								} bg-transparent text-white placeholder-white`}
						/>
						{errors.contact?.name && (
							<p className="text-red-500 text-sm">{errors.contact?.name.message}</p>
						)}
					</div>

					<div>
						<input
							{...register("contact.email")}
							placeholder="E-Mail ID*"
							className={`w-full p-2 rounded border-2 border-[#6F5252] ${errors.contact?.email ? "border-red-500" : "border-[#6F5252]"
								} bg-transparent text-white placeholder-white`}
						/>
						{errors.contact?.email && (
							<p className="text-red-500 text-sm">{errors.contact?.email.message}</p>
						)}
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div className="relative w-full">
							<div
								className={`flex items-center rounded-md border-2 ${errors?.contact?.phone ? "border-red-500" : "border-[#6F5252]"
									} bg-transparent`}
							>
								{/* Country Code */}
								<span className="px-3 text-white">{phoneCode || "+--"}</span>

								{/* Phone Input */}
								<input
									type="tel"
									{...register("contact.phone")}
									placeholder="Contact Number*"
									className="flex-1 p-2 bg-transparent outline-none placeholder-white"
								/>

								{/* Phone SVG Icon */}
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

							{/* Error Message */}
							{errors.contact?.phone && (
								<p className="text-red-500 text-sm mt-1">
									{errors.contact.phone.message}
								</p>
							)}
						</div>


						<div className="flex flex-col">

							<input
								{...register("contact.linkedin")}
								placeholder="LinkedIn*"
								className={`w-full p-2 rounded border-2 border-[#6F5252] ${errors.contact?.linkedin ? "border-red-500" : "border-[#6F5252]"
									} bg-transparent text-white placeholder-white`}
							/>
							{errors.contact?.linkedin && (
								<p className="text-red-500 text-sm">{errors.contact?.linkedin.message}</p>
							)}
						</div>

					</div>
				</div>
			</section>

			{/* Founding Members */}
<section>
  <h2 className="text-lg text-center text-black bg-[#7ED7CA] p-2">
    Founding Members
  </h2>
  <h2 className="text-md text-center text-black bg-[#DADAB1] p-3 mt-4 mb-4 rounded-lg">
    Please note you must have at least 4 founding members (max 6).
  </h2>

  {fields.map((member, index) => {
    const roleValue = useWatch({
      control,
      name: `foundingMembers.${index}.role`,
    });
    const allRoles = useWatch({ control, name: "foundingMembers" }).map(
      (m) => m.role
    );
    const studyValue = useWatch({
      control,
      name: `foundingMembers.${index}.study`,
    });

    return (
      <div
        key={member.id}
        className="mt-6 space-y-6 border border-gray-600 p-4 rounded-lg relative"
      >
        <h3 className="text-teal-300">Member {index + 1}</h3>

        {/* Role */}
        <div>
          <label
            className={`p-2 inline-block mb-2 border-2 ${
              errors?.foundingMembers?.[index]?.role
                ? "border-red-500"
                : "border-[#6F5252]"
            }`}
          >
            {roleValue ? `Role: ${roleValue}` : "Select the Role*"}
          </label>
          <div className="flex flex-wrap gap-6">
            {[
              "President",
              "Vice President",
              "Director, Marketing",
              "Director, Projects",
            ].map((role) => {
              const isTaken = allRoles.includes(role) && roleValue !== role;
              return (
                <label key={role} className="flex items-center gap-2">
                  <input
                    type="radio"
                    value={role}
                    {...register(`foundingMembers.${index}.role`)}
                    className="accent-[#3ECF8E]"
                    disabled={isTaken && role !== "President"}
                  />
                  <span
                    className={isTaken ? "line-through text-gray-500" : ""}
                  >
                    {role}
                  </span>
                </label>
              );
            })}
            <input
              type="text"
              {...register(`foundingMembers.${index}.customRole`)}
              placeholder="Custom role"
              className="ml-3 p-2 rounded border-2 border-[#6F5252] bg-transparent text-white placeholder-white"
            />
          </div>
          {errors.foundingMembers?.[index]?.role && (
            <p className="text-red-500 text-sm mt-1">
              {errors.foundingMembers[index]?.role?.message as string}
            </p>
          )}
        </div>

        {/* Name */}
        <input
          {...register(`foundingMembers.${index}.name`)}
          placeholder="Name*"
          className={`w-full p-2 rounded border-2 ${
            errors.foundingMembers?.[index]?.name
              ? "border-red-500"
              : "border-[#6F5252]"
          } bg-transparent text-white placeholder-white`}
        />

        {/* Email */}
        <input
          {...register(`foundingMembers.${index}.email`)}
          placeholder="E-Mail ID*"
          className={`w-full p-2 rounded border-2 ${
            errors.foundingMembers?.[index]?.email
              ? "border-red-500"
              : "border-[#6F5252]"
          } bg-transparent text-white placeholder-white`}
        />

        {/* Phone + LinkedIn + Discipline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Phone */}
          <div className="flex flex-col">
            <div className="relative w-full">
              <div
                className={`flex items-center rounded-md border-2 ${
                  errors.foundingMembers?.[index]?.phone
                    ? "border-red-500"
                    : "border-[#6F5252]"
                } bg-transparent`}
              >
                <span className="px-3 text-white">{phoneCode || "+--"}</span>
                <input
                  type="tel"
                  {...register(`foundingMembers.${index}.phone`)}
                  placeholder="Contact Number*"
                  className="flex-1 p-2 bg-transparent outline-none placeholder-white"
                />
              </div>
              {/* Phone icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none"
                fill="currentColor"
              >
                <path d="M426.7,453.8l-38.1-79.1c-8.2-16.9-18.8-29.2-37.1-21.7l-36.1,13.4c-28.9,13.4-43.3,0-57.8-20.2l-65-147.9
                c-8.2-16.9-3.9-32.8,14.4-40.3l50.5-20.2c18.3-7.6,15.4-23.4,7.2-40.3l-43.3-80.6c-8.2-16.9-25-21-43.3-13.5
                c-36.6,15.1-66.9,38.8-86.6,73.9c-24,42.9-12,102.6-7.2,127.7c4.8,25.1,21.6,69.1,43.3,114.2c21.7,45.2,40.7,80.7,57.8,100.8
                c17,20.1,57.8,75.1,108.3,87.4c41.4,10,86.1,1.6,122.7-13.5C434.8,486.7,434.8,470.8,426.7,453.8z" />
              </svg>
            </div>
            {errors.foundingMembers?.[index]?.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.foundingMembers[index]?.phone?.message as string}
              </p>
            )}
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col">
            <input
              {...register(`foundingMembers.${index}.linkedin`)}
              placeholder="LinkedIn*"
              className={`w-full p-2 rounded border-2 ${
                errors.foundingMembers?.[index]?.linkedin
                  ? "border-red-500"
                  : "border-[#6F5252]"
              } bg-transparent text-white placeholder-white`}
            />
            {errors.foundingMembers?.[index]?.linkedin && (
              <p className="text-red-500 text-sm mt-1">
                {errors.foundingMembers[index]?.linkedin?.message as string}
              </p>
            )}
          </div>

          {/* Discipline */}
          <div className="flex flex-col">
            <input
              {...register(`foundingMembers.${index}.discipline`)}
              placeholder="Discipline*"
              className={`w-full p-2 rounded border-2 ${
                errors.foundingMembers?.[index]?.discipline
                  ? "border-red-500"
                  : "border-[#6F5252]"
              } bg-transparent text-white placeholder-white`}
            />
            {errors.foundingMembers?.[index]?.discipline && (
              <p className="text-red-500 text-sm mt-1">
                {errors.foundingMembers[index]?.discipline?.message as string}
              </p>
            )}
          </div>
        </div>

        {/* Study Level */}
        <div>
          <label
            className={`inline-block p-2 mb-2 border-2 rounded ${
              errors.foundingMembers?.[index]?.study
                ? "border-red-500"
                : "border-[#6F5252]"
            }`}
          >
            {studyValue ? `Study Level: ${studyValue}` : "Current level of study*"}
          </label>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Undergraduate-First Year",
              "Undergraduate-Second Year",
              "Undergraduate-Third Year",
              "Undergraduate-Fourth Year",
              "Postgraduate-Masters",
              "Postgraduate-Doctoral",
            ].map((study) => (
              <label key={study} className="flex items-center gap-3">
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

        {/* Resume Upload */}
        <div className="flex flex-col">
          <label
            className={`flex items-center justify-between p-2 text-white rounded border-2 cursor-pointer ${
              errors.foundingMembers?.[index]?.resume
                ? "border-red-500"
                : "border-[#6F5252]"
            }`}
          >
            Resume*
            <input
              type="file"
              {...register(`foundingMembers.${index}.resume`)}
              className="hidden"
            />
            <span className="text-gray-300">
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
            </span>
          </label>
        </div>

        {/* Remove Button */}
        {fields.length > 4 && (
          <button
            type="button"
            onClick={() => remove(index)}
            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs"
          >
            Remove
          </button>
        )}
      </div>
    );
  })}

  {/* Add Member Button */}
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


			{/* File Uploads */}
			<section>
				<h2 className="text-lg text-center text-black bg-[#7ED7CA] p-2">Uploads</h2>

				<label
					className={`flex items-center justify-between mt-3 mb-3 p-2 text-white rounded border-2 cursor-pointer ${errors.uploads?.proof ? "border-red-500" : "border-[#6F5252]"
						}`}
				>
					Proof of University Affiliation*
					<input type="file" {...register("uploads.proof")} className="hidden" />
					<span className="text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
							strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
							<path strokeLinecap="round" strokeLinejoin="round"
								d="M12 16.5V9.75m0 0L8.25 13.5m3.75-3.75 3.75 3.75M4.5 19.5h15" />
						</svg>
					</span>
				</label>
				{errors.uploads?.proof && <p className="text-red-500 text-sm mt-1">{String(errors.uploads?.proof.message)}</p>}


			</section>
			{/* Chapter Plan + Declaration */}
			<section className="mt-10 space-y-10">
				{/* Chapter Plan */}
				<div>
					<textarea
						rows={6}
						{...register("uploads.chapterPlan")}
						className={`w-full rounded-xl border ${errors.uploads?.chapterPlan ? "border-red-500" : "border-gray-400"
							} bg-gray-700/50 text-white placeholder-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#3ECF8E] focus:border-[#3ECF8E] outline-none`}
						placeholder="Chapter Plan*"
					></textarea>
					{errors.uploads?.chapterPlan && (
						<p className="text-red-500 text-sm mt-1">
							{errors.uploads?.chapterPlan.message}
						</p>
					)}
				</div>

				{/* Declaration */}
				<div>
					<label className="text-white font-small">Declaration of truthfulness*</label>
					<div className="flex items-start gap-3 mt-1">
						<input
							type="checkbox"
							{...register("uploads.declaration")}
							className="mt-1 accent-[#3ECF8E]"
						/>
						<span className="text-[#7ED7CA]">
							I declare that the information provided is true and accurate to the
							best of my knowledge.
						</span>
					</div>
					{errors.uploads?.declaration && (
						<p className="text-red-500 text-sm mt-1">{errors.uploads?.declaration.message}</p>
					)}
				</div>

				{/* Consent */}
				<section className="mt-10 space-y-10"></section>
				<div>
					<label className="text-white font-small">Consent*</label>
					<div className="flex items-start gap-3 mt-1">
						<input
							type="checkbox"
							{...register("uploads.consent")}
							className="mt-1 accent-[#3ECF8E]"
						/>
						<span className="text-[#7ED7CA]">
							I consent to having my information processed by SMILE and shared with
							SMILE’s members and/or partners. Your data will be used to process
							your request, generate statistics, and promote SMILE, its members, and
							partners.
						</span>
					</div>
					{errors.uploads?.consent && (
						<p className="text-red-500 text-sm mt-1">{errors.uploads?.consent.message}</p>
					)}
				</div>
			</section>


			{/* Submit */}
			<button
				type="submit"
				className="bg-gray-400 px-5 py-2 mx-auto justify-center flex items-center text-black font-medium rounded"
			>
				Submit
			</button>
		</form>
	);
}
