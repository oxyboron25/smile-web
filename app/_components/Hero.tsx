import Image from "next/image";
import heroImage from '@/public/image 19.png'
import { Pontano_Sans } from "next/font/google";
import { HandHeart, Presentation, School, UsersRound } from "lucide-react";
import { useEffect } from "react";

const headingFont = Pontano_Sans({weight:'variable', subsets:['latin']})
const Hero = () => {
    // let height = 0
    // let width = 0
    // useEffect(()=>{
    //     if (window.innerWidth <= )
    // })
    return (
        <div>
            <div className={" relative min-h-screen w-screen"}>
                <Image src={heroImage} alt="Hero Image" className="w-[100vw] h-[100vh] object-cover object-right-bottom absolute" />
                <div className="absolute w-[50vw] bg-[#001612] h-[100vh]"/>
                <div className="absolute h-[100vh] w-[100vw] flex flex-col 2xl:px-32 lg:px-20 px-10 gap-10 justify-center text-white">
                    <h1 className={"text-7xl text-white font-bold hidden lg:flex"}>
                        Society for Mental health Inclusivity, Literacy and Empowerment
                    </h1>
                    <h1 className={"text-7xl text-white font-bold flex lg:hidden"}>
                        SMILE
                    </h1>
                    <h2 className={headingFont.className + " lg:text-3xl text-xl"}>
                        Join us in our mission to build the largest mental health community in India, for providing free resources to individuals in need.
                    </h2>
                    <div role="button" className={headingFont.className + " py-2 px-5 border-[1px] border-white rounded-full w-fit hover:bg-white hover:text-[#001612] transition-all ease-in-out lg:text-xl font-extralight hover:font-semibold"}>
                        Get in Touch
                    </div>
                </div>
            </div>
            <div className="min-h-[15vh] bg-[#00100D] lg:flex grid grid-cols-2 lg:gap-10 gap-x-5 gap-y-10 py-10 lg:flex-row px-5 md:px-20 xl:px-40 justify-around text-white items-center">
                <div className="flex flex-col lg:flex-row text-center lg:text-left gap-5 items-center">
                    <UsersRound height={50} width={50} />
                    <div>
                        <p className="text-4xl font-bold text-[#5DA399]">10M+</p>
                        <p className="text-[#A6A6A6] font-light">People Impacted</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row text-center lg:text-left gap-5 items-center">
                    <Presentation height={50} width={50} />
                    <div>
                        <p className="text-4xl font-bold text-[#5DA399]">60K+</p>
                        <p className="text-[#A6A6A6] font-light">Volunteers hours</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row text-center lg:text-left gap-5 items-center">
                    <School height={50} width={50} />
                    <div>
                        <p className="text-4xl font-bold text-[#5DA399]">10+</p>
                        <p className=" text-[#A6A6A6] font-light">Colleges Reached</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row text-center lg:text-left gap-5 items-center">
                    <HandHeart height={50} width={50} />
                    <div>
                        <p className="text-4xl font-bold text-[#5DA399]">INR 10M+</p>
                        <p className=" text-[#A6A6A6] font-light">Funding Donated</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Hero;