import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className="p-6">
      {/* BITS Pilani Chapter */}
      <h1 className="text-3xl font-bold text-white mb-6">BITS Pilani Chapter</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {/* Actual Images */}
        <Image
          src="/gallery/bits/1.jpeg"
          alt="Gallery Image 1"
          width={300}
          height={200}
          className="object-cover rounded-lg"
        />
        <Image
          src="/gallery/bits/2.jpeg"
          alt="Gallery Image 2"
          width={300}
          height={200}
          className="object-cover rounded-lg"
        />
        <Image
          src="/gallery/bits/3.jpeg"
          alt="Gallery Image 3"
          width={300}
          height={200}
          className="object-cover rounded-lg"
        />
        <Image
          src="/gallery/bits/4.jpeg"
          alt="Gallery Image 4"
          width={300}
          height={200}
          className="object-cover rounded-lg"
        />

        {/* Rectangular Placeholder Boxes */}
        <div className="w-[300px] h-[200px] bg-gray-200 rounded-lg" />
        <div className="w-[300px] h-[200px] bg-gray-200 rounded-lg" />
        <div className="w-[300px] h-[200px] bg-gray-200 rounded-lg" />
        <div className="w-[300px] h-[200px] bg-gray-200 rounded-lg" />
      </div>

      {/* DTU Chapter */}
      <h1 className="text-3xl font-bold text-white mb-6">DTU Chapter</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="w-[300px] h-[200px] bg-gray-200 rounded-lg" />
        <div className="w-[300px] h-[200px] bg-gray-200 rounded-lg" />
        <div className="w-[300px] h-[200px] bg-gray-200 rounded-lg" />
        <div className="w-[300px] h-[200px] bg-gray-200 rounded-lg" />
      </div>
    </div>
  );
}
