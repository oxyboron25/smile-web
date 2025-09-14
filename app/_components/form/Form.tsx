"use client";

import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import countryDialCodes from "./constants/countryDialCodes";
import { roleMap, studyMap } from "./constants/mappings"
import { formSchema, FormData } from "./schemas";
import HeroSection from "./HeroSection";
import UniversityDetails from "./UniversityDetails";
import PointOfContact from "./PointOfContact";
import FoundingMembers from "./FoundingMembers";
import UploadsSection from "./UploadSection";
import ChapterDeclaration from "./ChapterDeclaration";


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
			<HeroSection />

			<UniversityDetails register={register} errors={errors} control={control} />

			<PointOfContact register={register} 
			errors={errors} phoneCode={phoneCode} />



			{/* Founding Members */}
			<FoundingMembers 
			control={control} 
			register={register} 
			errors={errors} fields={fields} 
			append={append} remove={remove} 
			phoneCode={phoneCode} />

			


			{/* File Uploads */}
			<UploadsSection register={register} errors={errors} />
			{/* Chapter Plan + Declaration */}
			<ChapterDeclaration register={register} errors={errors} />


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
