"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const memberSchema = z.object({
    role: z.string().min(1, "Select a role"),
    name: z.string().min(1, "Please enter a name"),
    email: z.string().email("Enter a valid email"),
    phone: z.string().min(10, "Please enter a valid contact number"),
    linkedin: z.string().url("Please enter a valid LinkedIn profile"),
    discipline: z.string().min(1, "Please select one option"),
    study: z.string().min(1, "Please select one option"),
});

const schema = z.object({
    university: z.string().min(1, "Please enter a valid university name"),
    address: z.string().min(1, "Please enter a valid address"),
    state: z.string().min(1, "Please select an option"),
    pincode: z.string().min(1, "Please select an option"),
    district: z.string().min(1, "Please select an option"),
    website: z.string().url("Please enter a valid website link"),

    contact: z.object({
        name: z.string().min(1, "Please enter a name"),
        email: z.string().email("Enter a valid email"),
        phone: z.string().min(10, "Please enter a valid contact number"),
        linkedin: z.string().url("Please enter a valid LinkedIn profile"),
    }),

    foundingMembers: z
        .array(memberSchema)
        .min(4, "At least 4 founding members are required")
        .max(6, "Maximum 6 founding members allowed"),

    resume: z
        .any()
        .refine((files) => files?.length > 0, "Please upload a valid document"),

    proof: z
        .any()
        .refine((files) => files?.length > 0, "Please upload a valid document"),
});

type FormData = z.infer<typeof schema>;

export default function Form() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            foundingMembers: [
                { role: "", name: "", email: "", phone: "", linkedin: "", discipline: "", study: "" },
                { role: "", name: "", email: "", phone: "", linkedin: "", discipline: "", study: "" },
                { role: "", name: "", email: "", phone: "", linkedin: "", discipline: "", study: "" },
                { role: "", name: "", email: "", phone: "", linkedin: "", discipline: "", study: "" },
            ],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "foundingMembers",
    });

    const onSubmit = (data: FormData) => {
        console.log("Form submitted:", data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="max-w-3xl mx-auto p-10 space-y-8 bg-black text-white"
        >
            {/* Hero */}
            <div className="bg-[#076461] p-6 text-start flex flex-col items-start gap-2 max-w-96">
                <div className="flex items-center gap-5 justify-center">
                    <span className="text-5xl">Join</span>
                    <img src="/new/logo.png" alt="SMILE Logo" className="h-10 w-auto" />
                </div>
                <p className="text-lg font-medium">Launch Your Own SMILE Chapter</p>
            </div>
            <p className="p-10 text-center text-gray-300 border-2 border-[#076461]">
                SMILE(Society for Mental Health Inclusivity, Literacy, & Empowerment) is a non-profit organization that aims to destigmatize mental health issues globally. We are committed to providing free resources and services in collaboration with other organizations to improve the mental health facilities and resources on college campuses across US, India, UK and soon the world.
            </p>

            {/* University Details */}
            <section>
                <h2 className="text-lg text-center text-black bg-teal-400 p-2">
                    University Details
                </h2>

                <div className="mt-4 space-y-6">
                    <div>
                        <input
                            {...register("university")}
                            placeholder="Name of University*"
                            className={`w-full p-2 rounded border-2 border-[#824909] ${errors.university ? "border-red-500" : "border-[#824909]"
                                } bg-transparent text-white placeholder-white focus:outline-none focus:ring-0 focus:border-[#824909]`}
                        />
                        {errors.university && (
                            <p className="text-red-500 text-sm">{errors.university.message}</p>
                        )}
                    </div>

                    <div>
                        <input
                            {...register("address")}
                            placeholder="Address*"
                            className={`w-full p-2 rounded border-2 border-[#824909] ${errors.address ? "border-red-500" : "border-[#824909]"
                                } bg-transparent text-white placeholder-white`}
                        />
                        {errors.address && (
                            <p className="text-red-500 text-sm">{errors.address.message}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        {/* State */}
                        <div className="flex flex-col">
                            <select
                                {...register("state")}
                                className={`p-2 rounded border-2 border-[#824909] ${errors.state ? "border-red-500" : "border-[#824909]"
                                    } bg-transparent placeholder-white`}
                            >
                                <option value="" className="text-black">State*</option>
                                <option value="Delhi" className="text-black">Delhi</option>
                                <option value="Maharashtra" className="text-black">Maharashtra</option>
                                <option value="Karnataka" className="text-black">Karnataka</option>
                            </select>
                            {errors.state?.message && (
                                <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
                            )}
                        </div>

                        {/* Pincode */}
                        <div className="flex flex-col">
                            <select
                                {...register("pincode")}
                                className={`p-2 rounded border-2 border-[#824909] ${errors.pincode ? "border-red-500" : "border-[#824909]"
                                    } bg-transparent placeholder-white`}
                            >
                                <option value="" className="text-black">Pincode*</option>
                                <option value="123456" className="text-black">123456</option>
                                <option value="234567" className="text-black">234567</option>
                                <option value="456789" className="text-black">456789</option>
                            </select>
                            {errors.pincode?.message && (
                                <p className="text-red-500 text-sm mt-1">{errors.pincode.message}</p>
                            )}
                        </div>

                        {/* District */}
                        <div className="flex flex-col">
                            <select
                                {...register("district")}
                                className={`p-2 rounded border-2 border-[#824909] ${errors.district ? "border-red-500" : "border-[#824909]"
                                    } bg-transparent placeholder-white`}
                            >
                                <option value="" className="text-black">District*</option>
                                <option value="South Delhi" className="text-black">South Delhi</option>
                                <option value="North Delhi" className="text-black">North Delhi</option>
                            </select>
                            {errors.district?.message && (
                                <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>
                            )}
                        </div>
                    </div>


                    <div>
                        <input
                            {...register("website")}
                            placeholder="University Website Link*"
                            className={`w-full p-2 rounded border-2 border-[#824909] ${errors.website ? "border-red-500" : "border-[#824909]"
                                } bg-transparent text-white placeholder-white`}
                        />
                        {errors.website && (
                            <p className="text-red-500 text-sm">{errors.website.message}</p>
                        )}
                    </div>
                </div>
            </section>

            {/* Point of Contact */}
            <section>
                <h2 className="text-lg text-center text-black bg-teal-400 p-2">
                    Point of Contact
                </h2>

                <div className="mt-4 space-y-6">
                    <div>
                        <input
                            {...register("contact.name")}
                            placeholder="Name*"
                            className={`w-full p-2 rounded border-2 border-[#824909] ${errors.contact?.name ? "border-red-500" : "border-[#824909]"
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
                            className={`w-full p-2 rounded border-2 border-[#824909] ${errors.contact?.email ? "border-red-500" : "border-[#824909]"
                                } bg-transparent text-white placeholder-white`}
                        />
                        {errors.contact?.email && (
                            <p className="text-red-500 text-sm">{errors.contact?.email.message}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">

                            <input
                                {...register("contact.phone")}
                                placeholder="Conatct Number*"
                                className={`w-full p-2 rounded border-2 border-[#824909] ${errors.contact?.phone ? "border-red-500" : "border-[#824909]"
                                    } bg-transparent text-white placeholder-white`}
                            />

                            {errors.contact?.phone && (
                                <p className="text-red-500 text-sm">{errors.contact?.phone.message}</p>
                            )}
                        </div>
                        <div className="flex flex-col">

                            <input
                                {...register("contact.linkedin")}
                                placeholder="LinkedIn*"
                                className={`w-full p-2 rounded border-2 border-[#824909] ${errors.contact?.linkedin ? "border-red-500" : "border-[#824909]"
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
                <h2 className="text-lg text-center text-black bg-teal-400 p-2">
                    Founding Members
                </h2>
                <h2 className="text-md text-center text-black bg-[#d0d398] p-3 mt-4 mb-4 rounded-lg">
                    Please note you must have at least 4 founding members (max 6).
                </h2>

                {fields.map((member, index) => (
                    <div
                        key={member.id}
                        className="mt-6 space-y-6 border border-gray-600 p-4 rounded-lg relative"
                    >
                        <h3 className="text-teal-300">Member {index + 1}</h3>

                        {/* Role */}
                        <div>
                            <label
                                className={`p-2 inline-block mb-2 border-2 ${errors?.foundingMembers?.[index]?.role
                                    ? "border-red-500"
                                    : "border-[#824909]"
                                    }`}
                            >
                                Select the Role*
                            </label>
                            <div className="flex flex-wrap gap-6">
                                {[
                                    "President",
                                    "Vice President",
                                    "Director, Marketing",
                                    "Director, Projects",
                                ].map((role) => (
                                    <label key={role} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            value={role}
                                            {...register(`foundingMembers.${index}.role`)}
                                            className="accent-[#3ECF8E]"
                                        />
                                        {role}
                                    </label>
                                ))}
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
                            className={`w-full p-2 rounded border-2 ${errors.foundingMembers?.[index]?.name
                                ? "border-red-500"
                                : "border-[#824909]"
                                } bg-transparent text-white placeholder-white`}
                        />

                        {/* Email */}
                        <input
                            {...register(`foundingMembers.${index}.email`)}
                            placeholder="E-Mail ID*"
                            className={`w-full p-2 rounded border-2 ${errors.foundingMembers?.[index]?.email
                                ? "border-red-500"
                                : "border-[#824909]"
                                } bg-transparent text-white placeholder-white`}
                        />

                        {/* Phone + LinkedIn + Discipline */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input
                                {...register(`foundingMembers.${index}.phone`)}
                                placeholder="Contact Number*"
                                className={`w-full p-2 rounded border-2 ${errors.foundingMembers?.[index]?.phone
                                    ? "border-red-500"
                                    : "border-[#824909]"
                                    } bg-transparent text-white placeholder-white`}
                            />

                            <input
                                {...register(`foundingMembers.${index}.linkedin`)}
                                placeholder="LinkedIn*"
                                className={`w-full p-2 rounded border-2 ${errors.foundingMembers?.[index]?.linkedin
                                    ? "border-red-500"
                                    : "border-[#824909]"
                                    } bg-transparent text-white placeholder-white`}
                            />

                            <select
                                {...register(`foundingMembers.${index}.discipline`)}
                                defaultValue=""
                                className={`w-full p-2 rounded border-2 bg-transparent ${errors.foundingMembers?.[index]?.discipline
                                    ? "border-red-500"
                                    : "border-[#824909]"
                                    }`}
                            >
                                <option value="" disabled className="text-black">
                                    Discipline*
                                </option>
                                <option value="CSE" className="text-black">
                                    CSE
                                </option>
                                <option value="ECE" className="text-black">
                                    ECE
                                </option>
                                <option value="Mechanical" className="text-black">
                                    Mechanical
                                </option>
                            </select>
                        </div>

                        {/* Study Level */}
                        <div>
                            <label
                                className={`inline-block p-2 mb-2 border-2 rounded ${errors.foundingMembers?.[index]?.study
                                    ? "border-red-500"
                                    : "border-[#824909]"
                                    }`}
                            >
                                Current level of study*
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
                ))}

                {/* Add Member Button */}
                {fields.length < 6 && (
                    <button
                        type="button"
                        onClick={() =>
                            append({
                                role: "",
                                name: "",
                                email: "",
                                phone: "",
                                linkedin: "",
                                discipline: "",
                                study: "",
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
                <h2 className="text-lg text-center text-black bg-teal-400 p-2">Uploads</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {/* Resume */}
                    <div className="flex flex-col">
                        <label
                            className={`flex items-center justify-between p-2 text-white rounded border-2 ${errors.resume ? "border-red-500" : "border-[#824909]"
                                }`}
                        >
                            Resume*
                            <input type="file" {...register("resume")} className="hidden" />
                            <span className="text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 16.5V9.75m0 0L8.25 13.5m3.75-3.75 3.75 3.75M4.5 19.5h15" />
                                </svg>
                            </span>
                        </label>
                        {errors.resume && <p className="text-red-500 text-sm mt-1">{String(errors.resume.message)}</p>}
                    </div>

                    {/* Proof */}
                    <div className="flex flex-col">
                        <label
                            className={`flex items-center justify-between p-2 text-white rounded border-2 ${errors.proof ? "border-red-500" : "border-[#824909]"
                                }`}
                        >
                            Proof of University Affiliation*
                            <input type="file" {...register("proof")} className="hidden" />
                            <span className="text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 16.5V9.75m0 0L8.25 13.5m3.75-3.75 3.75 3.75M4.5 19.5h15" />
                                </svg>
                            </span>
                        </label>
                        {errors.proof && <p className="text-red-500 text-sm mt-1">{String(errors.proof.message)}</p>}
                    </div>
                </div>
            </section>

            {/* Chapter Plan + Declaration */}
            <section className="mt-10 space-y-10">
                <textarea
                    rows={6}
                    className="w-full rounded-xl border border-gray-400 bg-gray-700/50 text-white placeholder-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#3ECF8E] focus:border-[#3ECF8E] outline-none"
                    placeholder="Chapter Plan*"
                ></textarea>

                {/* Declaration */}
                <div className="space-y-4">
                    <div>
                        <label className="text-white font-small">Declaration of truthfulness*</label>
                        <div className="flex items-start gap-3 mt-1">
                            <input type="checkbox" className="mt-1 accent-[#3ECF8E]" />
                            <span className="text-[#17959e]">
                                I declare that the information provided is true and accurate to the best of my knowledge.
                            </span>
                        </div>
                    </div>

                    <div>
                        <label className="text-white font-small">Consent*</label>
                        <div className="flex items-start gap-3 mt-1">
                            <input type="checkbox" className="mt-1 accent-[#3ECF8E]" />
                            <span className="text-[#17959e]">
                                I consent to having my information processed by SMILE and shared with SMILE’s members and/or partners. Your data will be used to process your request, generate statistics, and promote SMILE, its members, and partners.
                            </span>
                        </div>
                    </div>
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
