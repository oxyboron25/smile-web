import Image from "next/image";

const Gallery = () => {
  const bitsPilaniImages = [
    "/founders/1.png",
    "/founders/2.png",
    "/founders/3.png",
    "/founders/4.png",
    "/founders/5.png",
    "/founders/6.png",
    "/founders/7.png",
    "/founders/8.png",
  ];

  return (
    <main className="min-h-screen bg-black text-white px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">Gallery</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">BITS Pilani Chapter</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bitsPilaniImages.map((src, index) => (
            <div key={index} className="relative w-full aspect-square rounded overflow-hidden">
              <Image
                src={src}
                alt={`BITS Pilani Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">DTU Chapter</h2>
        <div className="relative w-full max-w-sm aspect-square rounded overflow-hidden bg-gray-700">
          {/* Placeholder for now */}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
