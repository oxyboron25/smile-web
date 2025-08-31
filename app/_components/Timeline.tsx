'use client'

import { Josefin_Sans, Philosopher } from "next/font/google";
import Image from "next/image";
import experience from '@/public/Experience.svg'
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const headingFont = Philosopher({subsets:['latin'], weight:['700', '400']})
const subheadingFont = Josefin_Sans({subsets: ['latin'], weight:'variable'})

const Experience = () => {
    return (
        <section className=" pt-40 text-white">
            <div className="flex gap-2 items-center px-10 lg:px-40">
                    <p className="text-xl">
                        Stay <span className=" text-[#5DA399] font-bold">Tuned</span>
                    </p>
                    <div className="w-[5%] h-[2px] bg-[#5DA399] rounded-full"></div>
                </div>
            <div className='pt-2 px-10 lg:px-40'>
                <h1 className='xl:text-7xl text-4xl font-black'>
                    The Timeline for Upcoming Initiaves
                </h1>
                <p className='lg:text-2xl text-lg pt-5 font-extralight'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. galley of type and scrambled it to make a type. 
                </p>
            </div>
            <Timeline />
        </section>
    );
}
 
export default Experience;


const Timeline = () => {
    return (
        <div className={" relative w-full min-h-screen text-white"}>
            <div style={{left : `calc(50vw - 2.5px)`}} className="absolute min-h-[90%] w-[5px] bg-[#5DA399]/10 top-[5%] rounded-full hidden lg:flex"></div>
            <div className="py-32 flex flex-col gap-y-20 px-10 lg:px-20">
                {timelineEvents.map((event, i) => {
                    return (
                        <div className="w-full h-fit" key={i}>
                            {i%2 === 0 ? (
                                <div className="lg:grid lg:grid-cols-2">
                                    <div className="hidden lg:flex"></div>
                                    <TimelineElement i={i} />
                                </div>
                            ) : (
                                <div className="lg:grid lg:grid-cols-2">
                                    <TimelineElement i={i} />
                                    <div className="hidden lg:flex"></div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

interface TimelineElementProps {
    i : number,
}

const TimelineElement = ({i} : TimelineElementProps) => {
    const headingRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(headingRef, {
        margin : "0px -100px 100px 0px",
        once : true
    })
    return (
        <motion.div ref={headingRef} style={{transform : isInView ? 'none' : 'translateY(150px)', opacity : isInView ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"}} className={i%2 === 0 ? "flex gap-5 lg:ml-[-25px] z-10" : "flex gap-5 lg:flex-row-reverse lg:mr-[-25px] z-10 lg:text-right"}>
            <div className="lg:w-[50px] w-[25px] h-[25px] lg:h-[50px] bg-[#5DA399] rounded-full hidden lg:flex"></div>
            <div className="lg:w-9/12">
                <div className={i%2 === 0 ? "flex gap-2 items-center" : "flex gap-2 lg:flex-row-reverse items-center"}>
                    <p className="text-lg text-[#5DA399]">{timelineEvents[i].date}</p>
                    <div className="h-[2px] w-[50px] rounded-full bg-[#5DA399]"></div>
                </div>
                <h1 className={" lg:text-4xl text-3xl font-bold pt-2"}>
                    {timelineEvents[i].event}
                </h1>
                <p className="lg:text-lg font-light pt-5">
                    {timelineEvents[i].description}
                </p>
            </div>
        </motion.div>
    );
}

const timelineEvents = [
    {
        date : '20-01-24',
        event : 'Event Title',
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        date : '20-01-24',
        event : 'Event Title',
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        date : '20-01-24',
        event : 'Event Title',
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        date : '20-01-24',
        event : 'Event Title',
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        date : '20-01-24',
        event : 'Event Title',
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        date : '20-01-24',
        event : 'Event Title',
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        date : '20-01-24',
        event : 'Event Title',
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        date : '20-01-24',
        event : 'Event Title',
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
]