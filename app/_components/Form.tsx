"use client";

import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { countryDialCodes } from "./countryDialCodes"; // adjust path
const countryDialCodes = [
    { name: "Afghanistan", code: "+93" },
    { name: "Albania", code: "+355" },
    { name: "Algeria", code: "+213" },
    { name: "Andorra", code: "+376" },
    { name: "Angola", code: "+244" },
    { name: "Antigua and Barbuda", code: "+1-268" },
    { name: "Argentina", code: "+54" },
    { name: "Armenia", code: "+374" },
    { name: "Australia", code: "+61" },
    { name: "Austria", code: "+43" },
    { name: "Azerbaijan", code: "+994" },
    { name: "Bahamas", code: "+1-242" },
    { name: "Bahrain", code: "+973" },
    { name: "Bangladesh", code: "+880" },
    { name: "Barbados", code: "+1-246" },
    { name: "Belarus", code: "+375" },
    { name: "Belgium", code: "+32" },
    { name: "Belize", code: "+501" },
    { name: "Benin", code: "+229" },
    { name: "Bhutan", code: "+975" },
    { name: "Bolivia", code: "+591" },
    { name: "Bosnia and Herzegovina", code: "+387" },
    { name: "Botswana", code: "+267" },
    { name: "Brazil", code: "+55" },
    { name: "Brunei", code: "+673" },
    { name: "Bulgaria", code: "+359" },
    { name: "Burkina Faso", code: "+226" },
    { name: "Burundi", code: "+257" },
    { name: "Cabo Verde", code: "+238" },
    { name: "Cambodia", code: "+855" },
    { name: "Cameroon", code: "+237" },
    { name: "Canada", code: "+1" },
    { name: "Central African Republic", code: "+236" },
    { name: "Chad", code: "+235" },
    { name: "Chile", code: "+56" },
    { name: "China", code: "+86" },
    { name: "Colombia", code: "+57" },
    { name: "Comoros", code: "+269" },
    { name: "Congo (Congo-Brazzaville)", code: "+242" },
    { name: "Congo (Democratic Republic)", code: "+243" },
    { name: "Costa Rica", code: "+506" },
    { name: "Croatia", code: "+385" },
    { name: "Cuba", code: "+53" },
    { name: "Cyprus", code: "+357" },
    { name: "Czech Republic", code: "+420" },
    { name: "Denmark", code: "+45" },
    { name: "Djibouti", code: "+253" },
    { name: "Dominica", code: "+1-767" },
    { name: "Dominican Republic", code: "+1-809" },
    { name: "Ecuador", code: "+593" },
    { name: "Egypt", code: "+20" },
    { name: "El Salvador", code: "+503" },
    { name: "Equatorial Guinea", code: "+240" },
    { name: "Eritrea", code: "+291" },
    { name: "Estonia", code: "+372" },
    { name: "Eswatini", code: "+268" },
    { name: "Ethiopia", code: "+251" },
    { name: "Fiji", code: "+679" },
    { name: "Finland", code: "+358" },
    { name: "France", code: "+33" },
    { name: "Gabon", code: "+241" },
    { name: "Gambia", code: "+220" },
    { name: "Georgia", code: "+995" },
    { name: "Germany", code: "+49" },
    { name: "Ghana", code: "+233" },
    { name: "Greece", code: "+30" },
    { name: "Grenada", code: "+1-473" },
    { name: "Guatemala", code: "+502" },
    { name: "Guinea", code: "+224" },
    { name: "Guinea-Bissau", code: "+245" },
    { name: "Guyana", code: "+592" },
    { name: "Haiti", code: "+509" },
    { name: "Honduras", code: "+504" },
    { name: "Hungary", code: "+36" },
    { name: "Iceland", code: "+354" },
    { name: "India", code: "+91" },
    { name: "Indonesia", code: "+62" },
    { name: "Iran", code: "+98" },
    { name: "Iraq", code: "+964" },
    { name: "Ireland", code: "+353" },
    { name: "Israel", code: "+972" },
    { name: "Italy", code: "+39" },
    { name: "Jamaica", code: "+1-876" },
    { name: "Japan", code: "+81" },
    { name: "Jordan", code: "+962" },
    { name: "Kazakhstan", code: "+7" },
    { name: "Kenya", code: "+254" },
    { name: "Kiribati", code: "+686" },
    { name: "Kuwait", code: "+965" },
    { name: "Kyrgyzstan", code: "+996" },
    { name: "Laos", code: "+856" },
    { name: "Latvia", code: "+371" },
    { name: "Lebanon", code: "+961" },
    { name: "Lesotho", code: "+266" },
    { name: "Liberia", code: "+231" },
    { name: "Libya", code: "+218" },
    { name: "Liechtenstein", code: "+423" },
    { name: "Lithuania", code: "+370" },
    { name: "Luxembourg", code: "+352" },
    { name: "Madagascar", code: "+261" },
    { name: "Malawi", code: "+265" },
    { name: "Malaysia", code: "+60" },
    { name: "Maldives", code: "+960" },
    { name: "Mali", code: "+223" },
    { name: "Malta", code: "+356" },
    { name: "Marshall Islands", code: "+692" },
    { name: "Mauritania", code: "+222" },
    { name: "Mauritius", code: "+230" },
    { name: "Mexico", code: "+52" },
    { name: "Micronesia", code: "+691" },
    { name: "Moldova", code: "+373" },
    { name: "Monaco", code: "+377" },
    { name: "Mongolia", code: "+976" },
    { name: "Montenegro", code: "+382" },
    { name: "Morocco", code: "+212" },
    { name: "Mozambique", code: "+258" },
    { name: "Myanmar", code: "+95" },
    { name: "Namibia", code: "+264" },
    { name: "Nauru", code: "+674" },
    { name: "Nepal", code: "+977" },
    { name: "Netherlands", code: "+31" },
    { name: "New Zealand", code: "+64" },
    { name: "Nicaragua", code: "+505" },
    { name: "Niger", code: "+227" },
    { name: "Nigeria", code: "+234" },
    { name: "North Korea", code: "+850" },
    { name: "North Macedonia", code: "+389" },
    { name: "Norway", code: "+47" },
    { name: "Oman", code: "+968" },
    { name: "Pakistan", code: "+92" },
    { name: "Palau", code: "+680" },
    { name: "Palestine", code: "+970" },
    { name: "Panama", code: "+507" },
    { name: "Papua New Guinea", code: "+675" },
    { name: "Paraguay", code: "+595" },
    { name: "Peru", code: "+51" },
    { name: "Philippines", code: "+63" },
    { name: "Poland", code: "+48" },
    { name: "Portugal", code: "+351" },
    { name: "Qatar", code: "+974" },
    { name: "Romania", code: "+40" },
    { name: "Russia", code: "+7" },
    { name: "Rwanda", code: "+250" },
    { name: "Saint Kitts and Nevis", code: "+1-869" },
    { name: "Saint Lucia", code: "+1-758" },
    { name: "Saint Vincent and the Grenadines", code: "+1-784" },
    { name: "Samoa", code: "+685" },
    { name: "San Marino", code: "+378" },
    { name: "Sao Tome and Principe", code: "+239" },
    { name: "Saudi Arabia", code: "+966" },
    { name: "Senegal", code: "+221" },
    { name: "Serbia", code: "+381" },
    { name: "Seychelles", code: "+248" },
    { name: "Sierra Leone", code: "+232" },
    { name: "Singapore", code: "+65" },
    { name: "Slovakia", code: "+421" },
    { name: "Slovenia", code: "+386" },
    { name: "Solomon Islands", code: "+677" },
    { name: "Somalia", code: "+252" },
    { name: "South Africa", code: "+27" },
    { name: "South Korea", code: "+82" },
    { name: "South Sudan", code: "+211" },
    { name: "Spain", code: "+34" },
    { name: "Sri Lanka", code: "+94" },
    { name: "Sudan", code: "+249" },
    { name: "Suriname", code: "+597" },
    { name: "Sweden", code: "+46" },
    { name: "Switzerland", code: "+41" },
    { name: "Syria", code: "+963" },
    { name: "Taiwan", code: "+886" },
    { name: "Tajikistan", code: "+992" },
    { name: "Tanzania", code: "+255" },
    { name: "Thailand", code: "+66" },
    { name: "Timor-Leste", code: "+670" },
    { name: "Togo", code: "+228" },
    { name: "Tonga", code: "+676" },
    { name: "Trinidad and Tobago", code: "+1-868" },
    { name: "Tunisia", code: "+216" },
    { name: "Turkey", code: "+90" },
    { name: "Turkmenistan", code: "+993" },
    { name: "Tuvalu", code: "+688" },
    { name: "Uganda", code: "+256" },
    { name: "Ukraine", code: "+380" },
    { name: "United Arab Emirates", code: "+971" },
    { name: "United Kingdom", code: "+44" },
    { name: "United States", code: "+1" },
    { name: "Uruguay", code: "+598" },
    { name: "Uzbekistan", code: "+998" },
    { name: "Vanuatu", code: "+678" },
    { name: "Vatican City", code: "+39" },
    { name: "Venezuela", code: "+58" },
    { name: "Vietnam", code: "+84" },
    { name: "Yemen", code: "+967" },
    { name: "Zambia", code: "+260" },
    { name: "Zimbabwe", code: "+263" }
];

const memberSchema = z.object({
    role: z.string().min(1, "Select a role"),
    customRole: z.string().optional(),
    name: z.string().min(1, "Please enter a name"),
    email: z.string().email("Enter a valid email"),
    phone: z
        .string()
        .regex(/^[0-9]+$/, "Only numbers are allowed")
        .min(10, "Please enter a valid contact number"),
    linkedin: z.string().url("Please enter a valid LinkedIn profile"),
    discipline: z.string().min(1, "Please select one option"),
    study: z.string().min(1, "Please select one option"),
    resume: z
        .any()
        .refine((files) => files?.length > 0, "Please upload a valid document"),
});


const schema = z.object({
    university: z.string().min(1, "Please enter a valid university name"),
    address: z.string().min(1, "Please enter a valid address"),
    state: z.string().min(1, "Please select an option"),
    pincode: z.string().min(1, "Please select an option"),
    country: z.string().min(1, "Please select an option"),
    website: z.string().url("Please enter a valid website link"),

    contact: z.object({
        name: z.string().min(1, "Please enter a name"),
        email: z.string().email("Enter a valid email"),
        phone: z
            .string()
            .regex(/^[0-9]+$/, "Only numbers are allowed")
            .min(10, "Please enter a valid contact number"),

        linkedin: z.string().url("Please enter a valid LinkedIn profile"),
    }),

    foundingMembers: z
        .array(memberSchema)
        .min(4, "At least 4 founding members are required")
        .max(6, "Maximum 6 founding members allowed"),



    proof: z
        .any()
        .refine((files) => files?.length > 0, "Please upload a valid document"),
    chapterPlan: z
        .string()
        .refine((val) => val.trim().split(/\s+/).length >= 200, {
            message: "Chapter plan must be at least 200 words",
        }),


    declaration: z
        .boolean()
        .refine((val) => val === true, {
            message: "This is a necessary selection",
        }),

    consent: z
        .boolean()
        .refine((val) => val === true, {
            message: "This is a necessary selection",
        }),

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
    const roleMap: Record<string, string> = {
        "President": "president",
        "Vice President": "vice_president",
        "Director, Marketing": "director_marketing",
        "Director, Projects": "director_projects",
    };

    const studyMap: Record<string, string> = {
        "Undergraduate-First Year": "ug_1",
        "Undergraduate-Second Year": "ug_2",
        "Undergraduate-Third Year": "ug_3",
        "Undergraduate-Fourth Year": "ug_4",
        "Postgraduate-Masters": "pg_masters",
        "Postgraduate-Doctoral": "pg_doctoral",
    };

    const onSubmit = async (data: FormData) => {
        const phoneCode =
            countryDialCodes.find((c) => c.name === data.country)?.code || "";
        const payload = {
            university_chapter: {
                university: {
                    id: null,
                    name: data.university,
                    address: data.address,
                    country: data.country,
                    state: data.state,
                    pin_code: data.pincode,
                    website: data.website,
                },
                point_of_contact: {
                    id: null,
                    contact: {
                        id: null,
                        name: data.contact.name,
                        email: data.contact.email,
                        phone_number: phoneCode
                            ? `${phoneCode}${data.contact.phone}`
                            : data.contact.phone,
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
                            : data.contact.phone,
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

    const selectedCountry = useWatch({ control, name: "country" });
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
                            {...register("university")}
                            placeholder="Name of University*"
                            className={`w-full p-2 rounded border-2 border-[#6F5252] ${errors.university ? "border-red-500" : "border-[#6F5252]"
                                } bg-transparent text-white placeholder-white focus:outline-none focus:ring-0 focus:border-[#6F5252]`}
                        />
                        {errors.university && (
                            <p className="text-red-500 text-sm">{errors.university.message}</p>
                        )}
                    </div>

                    <div>
                        <input
                            {...register("address")}
                            placeholder="Address*"
                            className={`w-full p-2 rounded border-2 border-[#6F5252] ${errors.address ? "border-red-500" : "border-[#6F5252]"
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
                                className={`p-2 rounded border-2 border-[#6F5252] ${errors.state ? "border-red-500" : "border-[#6F5252]"
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
                        {/* Pincode (as input) */}
                        <div className="flex flex-col">
                            <input
                                {...register("pincode")}
                                placeholder="Pincode*"
                                className={`w-full p-2 rounded border-2 ${errors.pincode ? "border-red-500" : "border-[#6F5252]"
                                    } bg-transparent text-white placeholder-white`}
                            />
                            {errors.pincode?.message && (
                                <p className="text-red-500 text-sm mt-1">{errors.pincode.message}</p>
                            )}
                        </div>

                        {/* country (as input) */}
                        <div className="flex flex-col">
                            <div>
                                <select
                                    {...register("country")}
                                    className={`p-2 rounded border-2 border-[#6F5252] ${errors.state ? "border-red-500" : "border-[#6F5252]"
                                        } bg-transparent placeholder-white`}
                                >
                                    <option value="" className="text-black">Country*</option>
                                    {countryDialCodes.map((c) => (
                                        <option key={c.name} value={c.name} className="text-black">
                                            {c.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.country && (
                                    <p className="text-red-500 text-sm">{errors.country.message}</p>
                                )}
                            </div>

                        </div>

                    </div>


                    <div>
                        <input
                            {...register("website")}
                            placeholder="University Website Link*"
                            className={`w-full p-2 rounded border-2 border-[#6F5252] ${errors.website ? "border-red-500" : "border-[#6F5252]"
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
                    const allRoles = useWatch({ control, name: "foundingMembers" }).map(m => m.role);

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
                                    className={`p-2 inline-block mb-2 border-2 ${errors?.foundingMembers?.[index]?.role
                                        ? "border-red-500"
                                        : "border-[#6F5252]"
                                        }`}
                                >

                                    {roleValue ? `Role: ${roleValue}` : "Select the Role*"}
                                </label>
                                <div className="flex flex-wrap gap-6">
                                    {["President", "Vice President", "Director, Marketing", "Director, Projects"].map((role) => {
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
                                                <span className={isTaken ? "line-through text-gray-500" : ""}>
                                                    {role}
                                                </span>
                                            </label>
                                        );
                                    })}

                                    <label className="flex items-center gap-2">

                                        <input
                                            type="text"
                                            {...register(`foundingMembers.${index}.customRole`)}
                                            placeholder="Custom role"
                                            className="ml-3 p-2 rounded border-2 border-[#6F5252] bg-transparent text-white placeholder-white"
                                        />
                                    </label>
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
                                    : "border-[#6F5252]"
                                    } bg-transparent text-white placeholder-white`}
                            />

                            {/* Email */}
                            <input
                                {...register(`foundingMembers.${index}.email`)}
                                placeholder="E-Mail ID*"
                                className={`w-full p-2 rounded border-2 ${errors.foundingMembers?.[index]?.email
                                    ? "border-red-500"
                                    : "border-[#6F5252]"
                                    } bg-transparent text-white placeholder-white`}
                            />

                            {/* Phone + LinkedIn + Discipline */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex flex-col">

                                    <div className="relative w-full">
                                        <div
                                            className={`flex items-center rounded-md border-2 ${errors?.contact?.phone ? "border-red-500" : "border-[#6F5252]"
                                                } bg-transparent`}
                                        >
                                            <span className="px-3 text-white">{phoneCode || "+--"}</span>
                                            <input
                                                type="tel"
                                                {...register("contact.phone")}
                                                placeholder="Contact Number*"
                                                className="flex-1 p-2 bg-transparent outline-none placeholder-white"
                                            />
                                        </div>

                                        {/* Phone SVG Icon on the right side */}
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

                                    {/* Error Message */}
                                    {errors.foundingMembers?.[index]?.phone && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.foundingMembers[index]?.phone?.message as string}
                                        </p>
                                    )}

                                </div>


                                <div className="flex flex-col">

                                    <input
                                        {...register(`foundingMembers.${index}.linkedin`)}
                                        placeholder="LinkedIn*"
                                        className={`w-full p-2 rounded border-2 ${errors.foundingMembers?.[index]?.linkedin
                                            ? "border-red-500"
                                            : "border-[#6F5252]"
                                            } bg-transparent text-white placeholder-white`}
                                    />
                                    {/* Error Message */}
                                    {errors.foundingMembers?.[index]?.linkedin && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.foundingMembers[index]?.linkedin?.message as string}
                                        </p>
                                    )}
                                </div>
                                <div className="flex flex-col">

                                    {/* Discipline (as input instead of select) */}
                                    <input
                                        {...register(`foundingMembers.${index}.discipline`)}
                                        placeholder="Discipline*"
                                        className={`w-full p-2 rounded border-2 ${errors.foundingMembers?.[index]?.discipline
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
                                    className={`inline-block p-2 mb-2 border-2 rounded ${errors.foundingMembers?.[index]?.study
                                        ? "border-red-500"
                                        : "border-[#6F5252]"
                                        }`}
                                >
                                    {studyValue
                                        ? `Study Level: ${studyValue}`
                                        : "Current level of study*"}
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
                                    className={`flex items-center justify-between p-2 text-white rounded border-2 cursor-pointer ${errors.foundingMembers?.[index]?.resume ? "border-red-500" : "border-[#6F5252]"
                                        }`}
                                >
                                    Resume*
                                    <input type="file" {...register(`foundingMembers.${index}.resume`)} className="hidden" />
                                    <span className="text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M12 16.5V9.75m0 0L8.25 13.5m3.75-3.75 3.75 3.75M4.5 19.5h15" />
                                        </svg>
                                    </span>
                                </label>
                                {errors.foundingMembers?.[index]?.resume && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.foundingMembers[index]?.resume?.message as string}
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
                    );
                })}

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
                                resume: []
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
                    className={`flex items-center justify-between mt-3 mb-3 p-2 text-white rounded border-2 cursor-pointer ${errors.proof ? "border-red-500" : "border-[#6F5252]"
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


            </section>
            {/* Chapter Plan + Declaration */}
            <section className="mt-10 space-y-10">
                {/* Chapter Plan */}
                <div>
                    <textarea
                        rows={6}
                        {...register("chapterPlan")}
                        className={`w-full rounded-xl border ${errors.chapterPlan ? "border-red-500" : "border-gray-400"
                            } bg-gray-700/50 text-white placeholder-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#3ECF8E] focus:border-[#3ECF8E] outline-none`}
                        placeholder="Chapter Plan*"
                    ></textarea>
                    {errors.chapterPlan && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.chapterPlan.message}
                        </p>
                    )}
                </div>

                {/* Declaration */}
                <div>
                    <label className="text-white font-small">Declaration of truthfulness*</label>
                    <div className="flex items-start gap-3 mt-1">
                        <input
                            type="checkbox"
                            {...register("declaration")}
                            className="mt-1 accent-[#3ECF8E]"
                        />
                        <span className="text-[#7ED7CA]">
                            I declare that the information provided is true and accurate to the
                            best of my knowledge.
                        </span>
                    </div>
                    {errors.declaration && (
                        <p className="text-red-500 text-sm mt-1">{errors.declaration.message}</p>
                    )}
                </div>

                {/* Consent */}
                <section className="mt-10 space-y-10"></section>
                <div>
                    <label className="text-white font-small">Consent*</label>
                    <div className="flex items-start gap-3 mt-1">
                        <input
                            type="checkbox"
                            {...register("consent")}
                            className="mt-1 accent-[#3ECF8E]"
                        />
                        <span className="text-[#7ED7CA]">
                            I consent to having my information processed by SMILE and shared with
                            SMILE’s members and/or partners. Your data will be used to process
                            your request, generate statistics, and promote SMILE, its members, and
                            partners.
                        </span>
                    </div>
                    {errors.consent && (
                        <p className="text-red-500 text-sm mt-1">{errors.consent.message}</p>
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
