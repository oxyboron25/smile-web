import { UseFormRegister, FieldError, FieldErrors } from "react-hook-form";
import { FormData } from "./schemas";
import countryDialCodes from "./constants/countryDialCodes";

type Props = {
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
    control: any; // Adjust type as needed
};

export default function UniversityDetails({ register, errors, control }: Props) {
    return (
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
								<option value="" className="text-black">State (optional)</option>
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
								placeholder="Pincode (optional)"
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
    )
}