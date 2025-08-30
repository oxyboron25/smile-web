import React from "react";

const StatsSection: React.FC = () => {
  return (
    <section
      className="pt-0 pb-6" // no space at top, small space at bottom
      style={{
        background: "linear-gradient(to bottom, #001612 50%, #132E31 50%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* White Box */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {/* Stat 1 */}
            <div>
              <h3 className="text-2xl font-bold">5K+</h3>
              <p className="text-gray-600 text-sm">Active Members</p>
            </div>

            {/* Stat 2 */}
            <div>
              <h3 className="text-2xl font-bold">20+</h3>
              <p className="text-gray-600 text-sm">Events Organized</p>
            </div>

            {/* Stat 3 */}
            <div>
              <h3 className="text-2xl font-bold">10+</h3>
              <p className="text-gray-600 text-sm">Colleges Reached</p>
            </div>

            {/* Stat 4 */}
            <div>
              <h3 className="text-2xl font-bold">10K+</h3>
              <p className="text-gray-600 text-sm">Volunteer Hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;


