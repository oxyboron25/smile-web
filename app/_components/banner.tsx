import React from "react";

const BannerImage: React.FC = () => {
  return (
    <section className="w-full h-screen">
      <img
        src="/transparent-Photoroom (1) 1@2x.png" // replace with actual path
        alt="Mindful Mile Banner"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default BannerImage;

