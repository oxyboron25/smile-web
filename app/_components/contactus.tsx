const Contact = () => {
  return (
    <section className="relative w-full py-32 flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/your-background.jpg')" }}
      />
      {/* Overlay tint */}
      <div className="absolute inset-0 bg-[#001612]/80" />

      {/* Text Content */}
      <div className="relative text-center px-4">
        <p className="uppercase tracking-widest text-sm text-[#c4c58d] mb-2">
          SMILE GLOBAL
        </p>
        <h1 className="text-4xl md:text-5xl font-bold">Get in Touch with Us</h1>
        <div className="w-20 h-[2px] bg-[#c4c58d] mx-auto mt-3"></div>
      </div>
    </section>
  );
};

export default Contact;


