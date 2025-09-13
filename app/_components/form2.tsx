import React from "react";

const Form2: React.FC = () => {
	return (
		<div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg">
			<h2 className="text-2xl font-semibold mb-4">Organization Registration</h2>

			{/* Organization Details */}
			<section className="mb-8">
				<h3 className="text-xl font-medium mb-3">1. Organization Details</h3>
				<div className="space-y-4">
					<div>
						<label className="block text-sm font-medium mb-1">Organization Name</label>
						<input
							placeholder="Enter organization name"
							className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">Description</label>
						<textarea
							placeholder="Short description about the organization"
							rows={4}
							className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
						/>
					</div>
				</div>
			</section>

			{/* Contact Information */}
			<section className="mb-8">
				<h3 className="text-xl font-medium mb-3">2. Contact Information</h3>
				<div className="space-y-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
						<div className="md:col-span-1">
							<label className="block text-sm font-medium mb-1">Country Dial Code</label>
							<select className="w-full rounded-md border border-gray-300 p-2 bg-white">
								<option>+1 (USA)</option>
								<option>+44 (UK)</option>
								<option>+91 (India)</option>
								<option>+61 (Australia)</option>
							</select>
						</div>

						<div className="md:col-span-2">
							<label className="block text-sm font-medium mb-1">Phone Number</label>
							<input placeholder="Enter phone number" className="w-full rounded-md border border-gray-300 p-2" />
						</div>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">Email</label>
						<input placeholder="Enter contact email" className="w-full rounded-md border border-gray-300 p-2" />
					</div>
				</div>
			</section>

			{/* Founding Members - dynamic placeholder */}
			<section className="mb-8">
				<h3 className="text-xl font-medium mb-3">3. Founding Members</h3>
				<p className="text-sm text-gray-600 mb-4">Add one or more founding members. (Dynamic add/remove will be implemented later.)</p>

				{/* Example member block - duplicate as needed */}
				<div className="space-y-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label className="block text-sm font-medium mb-1">First Name</label>
							<input placeholder="First name" className="w-full rounded-md border border-gray-300 p-2" />
						</div>

						<div>
							<label className="block text-sm font-medium mb-1">Last Name</label>
							<input placeholder="Last name" className="w-full rounded-md border border-gray-300 p-2" />
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
						<div>
							<label className="block text-sm font-medium mb-1">Role</label>
							<select className="w-full rounded-md border border-gray-300 p-2 bg-white">
								<option>President</option>
								<option>Vice-President</option>
								<option>Treasurer</option>
								<option>Other</option>
							</select>
						</div>

						<div className="md:col-span-2">
							<label className="block text-sm font-medium mb-1">Custom Role (if Other)</label>
							<input placeholder="Custom role (shown when Other is selected)" className="w-full rounded-md border border-gray-300 p-2" />
						</div>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">Study Status</label>
						<select className="w-full rounded-md border border-gray-300 p-2 bg-white">
							<option>Undergraduate</option>
							<option>Graduate</option>
							<option>Alumni</option>
							<option>Faculty/Staff</option>
						</select>
					</div>
				</div>
			</section>

			<div className="flex justify-end">
				<button className="px-4 py-2 bg-indigo-600 text-white rounded-md">Continue</button>
			</div>
		</div>
	);
};

export default Form2;
