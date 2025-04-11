'use client'

import Image from "next/image";
import NavinSingh from '@/public/mentors/Navin Singh.png'
import bg from '@/public/Background-group-people.png'
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { Pontano_Sans } from "next/font/google";
import { useEffect } from "react";

const headingFont = Pontano_Sans({weight:'variable', subsets:['latin']})

const About = () => {
    return (
        <div id="about" className="min-h-[75vh] w-screen relative">
            <div className="absolute top-0 h-[75vh] hidden lg:flex">
                <Image src={bg} alt="background" className=" w-[100vw] brightness-75 h-[75vh] object-cover" />
            </div>
            <div className="w-full bg-transparent lg:absolute">
                <div className=" lg:h-[42vh] py-20 flex flex-col justify-center text-white px-10 lg:px-40 gap-10 items-center lg:items-start lg:text-left text-center relative">
                    <div className="absolute top-0 h-full flex lg:hidden">
                        <Image src={bg} alt="background" className=" w-[100vw] brightness-75 h-full object-cover object-left-top" />
                    </div>
                    <div className="z-20">
                        <h1 className="xl:text-6xl text-4xl font-bold">Our Mission</h1>
                        <p className="text-2xl font-extralight pt-5">Build the largest mental health community in India, for providing free resources to individuals in need.</p>
                    </div>
                    <div className="z-20">
                        <h1 className="xl:text-6xl text-4xl font-bold">Our Vision</h1>
                        <p className="text-2xl font-extralight pt-5">To create an India where mental health issues aren't stigmatized and ignored.</p>
                    </div>
                </div>
                <div className="hidden bg-[#001612] flex flex-col justify-center lg:h-[66vh]">
                    <Mentors />
                </div>
                <div className="lg:h-[26vh] text-white flex flex-col px-10 lg:px-40 justify-center items-center lg:items-start lg:text-left text-center py-20 relative">
                    <div className="absolute top-0 h-full flex lg:hidden">
                        <Image src={bg} alt="background" className=" w-[100vw] brightness-75 h-full object-cover object-left-bottom" />
                    </div>
                    <h1 className="xl:text-6xl text-4xl font-bold z-20">Contribute to the cause this New Year</h1>
                    <p className="text-2xl font-extralight pt-5 pb-10 z-20">Build the largest mental health community in India, for providing free resources to individuals in need.</p>
                    <div role="button" className={headingFont.className + " py-2 px-5 border-[1px] border-white rounded-full w-fit hover:bg-white hover:text-black transition-all ease-in-out text-xl font-light hover:font-semibold z-20"}>
                        Donate Now
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;

const Mentors = () => {
    const scroll = (offset) => {
        const mentorsMenu = document.getElementById('mentors')
        mentorsMenu.scrollLeft += offset;
        if (mentorsMenu.scrollLeft == ( mentors.length - 1 )*offset) {
            mentorsMenu.scrollLeft = 0
        }
    }
    let offset = 0
    useEffect(() => {
        offset = window.innerWidth
    }, offset)
    return (
        <section className='relative lg:py-0 py-20'>
            <div role='button' onClick={() => {scroll(-offset)}} className=' absolute left-0 w-[5%] h-full bg-[#001612] lg:flex flex-col items-center justify-center text-white hidden'>
                <ArrowLeftCircle height={50} width={50} />
            </div>
            <div role='button' onClick={() => {scroll(offset)}} className=' absolute right-0 w-[5%] h-full bg-[#001612] lg:flex flex-col items-center justify-center text-white hidden'>
                <ArrowRightCircle height={50} width={50} />
            </div>
            <div id="mentors" className="w-screen h-fit overflow-x-scroll overflow-y-hidden scroll-smooth">
                <div className="lg:hidden flex flex-col text-white justify-center pb-10 gap-2 items-center px-10">
                    <p className="text-6xl text-center font-light">
                        Meet the <span className=" text-[#5DA399] font-bold">Mentors</span>
                    </p>
                    <div className="w-[25%] h-[2px] bg-[#5DA399]"></div>
                </div>
                <div className="w-fit flex flex-col lg:flex-row h-fit overflow-x-hidden text-white gap-y-20">
                    {mentors.map((mentor, i) => {
                        return (
                            <MentorElement i={i} key={i} />
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

const mentors = [
    {
        name : 'Lorem Ipsum',
        quote : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. galley of type and scrambled it to make a type. when an unknown printer took a galley of type and scrambled it to make a type specimen book. galley of type and scrambled it to make a type.",
        image : NavinSingh
    },
    {
        name : 'Lorem Ipsum',
        quote : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. galley of type and scrambled it to make a type. when an unknown printer took a galley of type and scrambled it to make a type specimen book. galley of type and scrambled it to make a type.",
        image : NavinSingh
    },
]

// interface MentorElementProps {
//     i : number
// }

const MentorElement = ({i}) => {
    return (
        <div className="w-[100vw] lg:h-[66vh] flex flex-col-reverse lg:flex-row items-center justify-center gap-20 px-10 sm:px-40 lg:px-20 text-center lg:text-left">
            <div className='lg:w-7/12 w-full'>
                <div className="lg:flex hidden gap-2 items-center">
                    <p className="text-xl">
                        Meet the <span className=" text-[#5DA399] font-bold">Mentors</span>
                    </p>
                    <div className="w-[5%] h-[2px] bg-[#5DA399]"></div>
                </div>
                <div className='pt-2'>
                    <h1 className='xl:text-7xl text-4xl font-black'>
                        {mentors[i].name}
                    </h1>
                    <p className='xl:text-2xl pt-5 font-extralight'>
                        {mentors[i].quote}
                    </p>
                </div>
            </div>
            <div className='lg:w-3/12'>
                <Image src={mentors[i].image} alt='Founder Image' className='w-12/12 object-contain' />
            </div>
        </div>
    );
}