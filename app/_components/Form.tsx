"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Logo from "@/public/Logo.svg";


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
        phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
        linkedin: z.string().url("Please enter a valid LinkedIn profile"),
    }),

    foundingMember: z.object({
        role: z.string().min(1, "Please select a role"),
        name: z.string().min(1, "Please enter a name"),
        email: z.string().email("Enter a valid email"),
        phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
        linkedin: z.string().url("Please enter a valid LinkedIn profile"),
        discipline: z.string().min(1, "Please select a discipline"),
    }),
});

type FormData = z.infer<typeof schema>;

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log("Form submitted:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto p-10 space-y-8 bg-black text-white">
            <div className="bg-[#076461] p-6 text-start flex flex-col items-start gap-2 max-w-96">
                <div className="flex items-center gap-5 justify-center">
                    <span className="text-5xl">Join</span>
                    <img src="/new/logo.png" alt="SMILE Logo" className="h-10 w-auto" />
                </div>
                <p className="text-lg font-medium">Launch Your Own SMILE Chapter</p>
            </div>
            <p className="p-10 text-center text-gray-300 border-2 border-[#076461]">SMILE(Society for Mental Health Inclusivity, Literacy, & Empowerment) is a non-profit organization that aims to destigmatize mental health issues globally. We are committed to providing free resources and services in collaboration with other organizations to improve the mental health facilities and resources on college campuses across US, India, UK and soon the world.</p>

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
                                } bg-transparent text-white placeholder-white`}
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
                        <select
                            {...register("state")}
                            className={`p-2 rounded border-2 border-[#824909] ${errors.state ? "border-red-500" : "border-[#824909]"
                                } bg-transparent placeholder-white`}
                        >
                            <option value="" disabled selected className="text-black">State*</option>
                            <option value="Delhi" className="text-black">Delhi</option>
                            <option value="Maharashtra" className="text-black">Maharashtra</option>
                            <option value="Karnataka" className="text-black">Karnataka</option>
                        </select>

                        <select
                            {...register("pincode")}
                            className={`p-2 rounded border-2 border-[#824909] ${errors.pincode ? "border-red-500" : "border-[#824909]"
                                } bg-transparent  placeholder-white`}
                        >
                            <option value="" disabled selected className="text-black">Pincode*</option>
                            <option value="123456" className="text-black">123456</option>
                            <option value="234567" className="text-black">234567</option>
                            <option value="456789" className="text-black">456789</option>
                        </select>

                        <select
                            {...register("district")}
                            className={`p-2 rounded border-2 border-[#824909] ${errors.district ? "border-red-500" : "border-[#824909]"
                                } bg-transparent placeholder-white`}
                        >
                            <option value="" disabled selected className="text-black">District*</option>
                            <option value="South Delhi" className="text-black">South Delhi</option>
                            <option value="North Delhi" className="text-black">North Delhi</option>
                        </select>
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
                        <input
                            {...register("contact.phone")}
                            placeholder="Conatct Number*"
                            className={`w-full p-2 rounded border-2 border-[#824909] ${errors.contact?.phone ? "border-red-500" : "border-[#824909]"
                                } bg-transparent text-white placeholder-white`}
                        />

                        {errors.contact?.phone && (
                            <p className="text-red-500 text-sm">{errors.contact?.phone.message}</p>
                        )}
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
            </section>
            <section>
                <h2 className="text-lg text-center text-black bg-teal-400 p-2">
                    Founding Members
                </h2>
                <h2 className="text-md text-center text-black bg-[#d0d398] p-3 mt-4 mb-4 rounded-lg">
                    Please note you must have atleast 4 founding members to start your chapter.
                </h2>
                {/* Role */}
                <div className="mt-4 space-y-6">

                    <div>
                        <label className="p-2 inline-block mb-2 border-2 border-[#824909]">Select the Role*</label>
                        <div className="flex flex-wrap gap-6">
                            {["President", "Vice President", "Director, Marketing", "Director, Projects"].map(
                                (role) => (
                                    <label key={role} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            value={role}
                                            {...register("foundingMember.role", { required: true })}
                                            className="accent-[#3ECF8E]"
                                        />
                                        {role}
                                    </label>
                                )
                            )}
                        </div>
                        {errors.foundingMember?.role && (
                            <p className="text-red-500 text-sm mt-1"> Select a role</p>
                        )}
                    </div>

                    {/* Name */}
                    <div>
                        <input
                            {...register("foundingMember.name")}
                            placeholder="Name*"
                            className={`w-full p-2 rounded border-2 border-[#824909] ${errors.foundingMember?.name ? "border-red-500" : "border-[#824909]"
                                } bg-transparent text-white placeholder-white`}
                        />
                        {errors.foundingMember?.name && (
                            <p className="text-red-500 text-sm">{errors.foundingMember?.name.message}</p>
                        )}
                    </div>

                    <div>
                        <input
                            {...register("foundingMember.email")}
                            placeholder="E-Mail ID*"
                            className={`w-full p-2 rounded border-2 border-[#824909] ${errors.foundingMember?.email ? "border-red-500" : "border-[#824909]"
                                } bg-transparent text-white placeholder-white`}
                        />
                        {errors.foundingMember?.email && (
                            <p className="text-red-500 text-sm">{errors.foundingMember?.email.message}</p>
                        )}
                    </div>

                    {/* Contact + LinkedIn + Discipline */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Contact Number*"
                                {...register("foundingMember.phone", {
                                    required: true,
                                    pattern: /^[0-9]{10}$/,
                                })}
                                className={`w-full p-2 rounded border-2 border-[#824909] ${errors.foundingMember?.phone ? "border-red-500" : "border-[#824909]"
                                    } bg-transparent text-white placeholder-white`}
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.54.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21 3 13.93 3 5.5a1 1 0 011-1H7.5a1 1 0 011 1c0 1.21.2 2.42.57 3.54a1 1 0 01-.24 1.05l-2.2 2.2z" />
                                </svg>
                            </span>
                            {errors.foundingMember?.phone && (
                                <p className="text-red-500 text-sm mt-1">
                                    Please enter a valid contact number
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                type="url"
                                placeholder="LinkedIn*"
                                {...register("foundingMember.linkedin", {
                                    required: true,
                                    pattern: /^https?:\/\/(www\.)?linkedin\.com\/.+$/,
                                })}
                                className={`w-full p-2 rounded border-2 border-[#824909] ${errors.foundingMember?.linkedin ? "border-red-500" : "border-[#824909]"
                                    } bg-transparent text-white placeholder-white`}
                            />
                            {errors.foundingMember?.linkedin && (
                                <p className="text-red-500 text-sm mt-1">
                                    Please enter a valid LinkedIn profile
                                </p>
                            )}
                        </div>

                        <div>
                            <select
                                {...register("foundingMember.discipline", { required: true })}
                                defaultValue=""
                                className={`w-full p-2 rounded border-2 bg-transparent ${errors.foundingMember?.discipline ? "border-red-500" : "border-[#824909]"
                                    } placeholder-white`}
                            >
                                <option value="" disabled className="text-white">
                                    Discipline*
                                </option>
                                <option value="CSE" className="text-black">CSE</option>
                                <option value="ECE" className="text-black">ECE</option>
                                <option value="Mechanical" className="text-black">Mechanical</option>
                            </select>
                            {errors.foundingMember?.discipline && (
                                <p className="text-red-500 text-sm mt-1">
                                    Please select one option
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <label className="inline-block p-2 mb-2 border-2 border-[#824909]">Current level of study*</label>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "Undergraduate-First Year",
                                "Undergraduate-Second Year",
                                "Undergraduate-Third Year",
                                "Undergraduate-Fourth Year",
                                "Postgraduate-Masters",
                                "Postgraduate-Doctoral",
                            ].map((role) => (
                                <label key={role} className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        value={role}
                                        {...register("foundingMember.role", { required: true })}
                                        className="accent-[#3ECF8E]"
                                    />
                                    {role}
                                </label>
                            ))}
                        </div>
                    </div>

                    {errors.foundingMember?.role && (
                        <p className="text-red-500 text-sm mt-1"> Select a role</p>
                    )}
                    {/* File Uploads */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label className="flex items-center justify-between border-2 border-[#824909] p-2 text-white rounded">
                            Resume*
                            <input type="file" className="hidden" />
                            <span className="text-gray-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0L8.25 13.5m3.75-3.75 3.75 3.75M4.5 19.5h15" />
                                </svg>
                            </span>
                        </label>

                        <label className="flex items-center justify-between border-2 border-[#824909] rounded p-2 text-white">
                            Proof of University Affiliation*
                            <input type="file" className="hidden" />
                            <span className="text-gray-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0L8.25 13.5m3.75-3.75 3.75 3.75M4.5 19.5h15" />
                                </svg>
                            </span>
                        </label>
                    </div>

                </div>
                <div className="mt-6 space-y-10">

                    {/* Chapter Plan */}
                    <div className="mt-20">
                        <textarea
                            rows={6}
                            className="w-full rounded-xl border border-gray-400 bg-gray-700/50 text-white placeholder-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#3ECF8E] focus:border-[#3ECF8E] outline-none"
                            placeholder="Chapter Plan*"
                        ></textarea>
                    </div>

                    {/* Declaration */}
                    <div className="space-y-4">
                        {/* Declaration */}
                        <div>
                            <label className="text-white font-small">Declaration of truthfulness*</label>
                            <div className="flex items-start gap-3 mt-1">
                                <input
                                    type="checkbox"
                                    className="mt-1 accent-[#3ECF8E] "
                                />
                                <span className="text-[#17959e]">
                                    I declare that the information provided is true and accurate to the best of my knowledge.
                                </span>
                            </div>
                        </div>

                        {/* Consent */}
                        <div>
                            <label className="text-white font-small">Consent*</label>
                            <div className="flex items-start gap-3 mt-1">
                                <input
                                    type="checkbox"
                                    className="mt-1 accent-[#3ECF8E] "
                                />
                                <span className="text-[#17959e]">
                                    I consent to having my information processed by SMILE and shared with SMILE’s members and/or partners.
                                    Your data will be used to process your request, generate statistics, and promote SMILE, its members, and partners.
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Submit */}
            <button type="submit" className=" bg-gray-400 px-5 py-2 mx-auto justify-center flex items-center text-black font-medium rounded">
                Submit
            </button>
        </form >
    );
}
