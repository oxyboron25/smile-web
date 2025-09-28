export default function HeroSection() {
  return (
    <>
      <div className="bg-[#5DA399] p-6 text-start flex flex-col items-start gap-2 max-w-96">
        <div className="flex items-center gap-5 justify-center">
          <span className="text-5xl">Join</span>
          <img src="/new/logo.png" alt="SMILE Logo" className="h-10 w-auto" />
        </div>
        <p className="text-lg font-medium">Launch Your Own SMILE Chapter</p>
      </div>
      <p className="p-10 text-center text-gray-300 border-2 border-[#2F5D56]">
        SMILE (Society for Mental Health Inclusivity, Literacy, &
        Empowerment)
      </p>
    </>
  );
}
