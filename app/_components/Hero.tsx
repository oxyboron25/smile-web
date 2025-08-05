import { HandHeart, Presentation, School, UsersRound } from "lucide-react";

const SmileHeroSection = () => {
  return (
    <div className="bg-[#00100D] text-white font-sans">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] w-full overflow-hidden">
        <img
          src="/images/image19.png"
          alt="Hero Image"
          className="absolute w-full h-[80%] object-cover object-right-bottom -z-20"
        />
        <div className="absolute w-1/2 h-full bg-[#001612] -z-10" />
        <div className="absolute h-full w-full flex flex-col justify-center gap-8 px-8">
          {/* Responsive Headings */}
          <h1 className="font-bold text-3xl block lg:hidden">
            SMILE
          </h1>
          <h1 className="font-bold text-4xl hidden lg:block">
            Society for Mental health Inclusivity, Literacy
            <br />
            and Empowerment
          </h1>
          <h2 className="text-xl lg:text-2xl">
            Join us in our mission to build the largest mental health community in India, for providing free resources to individuals in need.
          </h2>
          <button className="border border-white px-6 py-2 rounded-full text-white font-light transition duration-300 ease-in-out hover:bg-white hover:text-[#001612] hover:font-semibold w-fit">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="min-h-[15vh] grid grid-cols-2 sm:grid-cols-4 gap-8 p-8 text-center lg:flex lg:flex-row lg:justify-around lg:items-center">
        <StatBlock icon={<UsersRound size={50} color="white" />} number="10M+" label="People Impacted" />
        <StatBlock icon={<Presentation size={50} color="white" />} number="60K+" label="Volunteer Hours" />
        <StatBlock icon={<School size={50} color="white" />} number="10+" label="Colleges Reached" />
        <StatBlock icon={<HandHeart size={50} color="white" />} number="INR 10M+" label="Funding Donated" />
      </div>
    </div>
  );
};

type StatBlockProps = {
  icon: React.ReactNode;
  number: string;
  label: string;
};

const StatBlock = ({ icon, number, label }: StatBlockProps) => (
  <div className="flex flex-col items-center gap-4 lg:flex-row lg:text-left">
    <div>{icon}</div>
    <div>
      <p className="text-2xl font-bold text-[#5DA399]">{number}</p>
      <p className="text-gray-400 font-light">{label}</p>
    </div>
  </div>
);

export default SmileHeroSection;
