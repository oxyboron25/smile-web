'use client'
// import Kavan from '@/public/founders/Kavan.png'
import Navin from '@/public/founders/Navin.png'
import Ritien from '@/public/founders/Ritien.png'
import Manav from '@/public/founders/Manav.png'
// import Rishi from '@/public/founders/Rishi.png'
import styles from './style.module.scss'

import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import {motion} from 'framer-motion'

const founders = [
    // {
    //     name : 'Kavan Thakkar',
    //     quote : "Kavan, currently in his third year pursuing a dual degree in M.Sc. Physics and B.E. Electronics and Instrumentation, is a tech enthusiast with a flair for leadership. Having led the front-end development team at GDSC BITS Pilani, Kavan brings a unique blend of technical expertise and a commitment to making a societal impact. His vision is to build a compassionate India where mental health is embraced without stigma.",
    //     image : Kavan
    // },
    {
        name : 'Ritien Mohan',
        quote : "“Mental health in India is deeply stigmatized, with students across campuses lacking structured support. Seeing close friends struggle and recognizing this gap nationwide, I felt compelled to act. To create lasting change, I co-founded SMILE.”",
        image : Ritien
    },
    {
        name : 'Navin Venkat',
        quote : "“Mental health in India is heavily stigmatized, especially among students trapped in toxic coaching cultures. Experiencing this firsthand during JEE prep, I only grasped its importance in my third year. To bridge the support gap on campus, I co-founded SMILE with Ritien Mohan.”",
        image : Navin
    },
    {
        name : 'Manav Kanoi',
        quote : "“I was this close to taking my life – and I didn't even realize how I got there. But I made it out alive – from the kind of darkness I wouldn’t wish on anyone. One day at a time. Today, I want to help others do the same and thus I co-founded SMILE.”",
        image : Manav
    },
    
    // {
    //     name : 'Aaron Bimbrahw',
    //     quote : "Aaron, a pre-final year Manufacturing Engineering student at BITS Pilani, brings extensive management experience through pivotal roles in prominent organizations like the Placement Unit of BITS and the BITS Consulting Club. With a versatile skill set refined at organizations like Deloitte, Suzuki, Razorpay, NHAI, FinMapp, and IRCS he exemplifies excellence and adaptability. Aaron strives to create a significant influence by challenging the stigma surrounding mental health, demonstrating a dedicated commitment to fostering positive societal transformation.",
    //     image : Rishi
    // },
]

const Founders = () => {
    const scroll = (offset) => {
        const foundersMenu = document.getElementById('founders')
        foundersMenu.scrollLeft += offset;
        if (foundersMenu.scrollLeft == ( founders.length - 1 )*offset) {
            foundersMenu.scrollLeft = 0
        }
    }
    let offset = 0
    useEffect(() => {
        offset = window.innerWidth
    }, offset)
    return (
        <section className='relative h-fit py-20 lg:py-0'>
            <div role='button' onClick={() => {scroll(-offset)}} className=' absolute left-0 w-[5%] h-full bg-[#001612] lg:flex flex-col items-center justify-center text-white z-10 hidden'>
                <ArrowLeftCircle height={50} width={50} />
            </div>
            <div role='button' onClick={() => {scroll(offset)}} className=' absolute right-0 w-[5%] h-full bg-[#001612] lg:flex flex-col items-center justify-center text-white hidden z-10'>
                <ArrowRightCircle height={50} width={50} />
            </div>
            <motion.div id='founders' className="w-screen h-fit overflow-x-scroll overflow-y-hidden scroll-smooth">
                <div className="lg:hidden flex flex-col text-white justify-center pb-10 gap-2 items-center">
                    <p className="text-6xl text-center font-light">
                        Meet the <span className=" text-[#5DA399] font-bold">Founders</span>
                    </p>
                    <div className="w-[25%] h-[2px] bg-[#5DA399]"></div>
                </div>
                <motion.div className={" w-fit flex flex-col lg:flex-row h-fit text-white gap-20 lg:gap-0 snap-mandatory snap-center"}>
                    {founders.map((founder, i) => {
                        return (
                            <FounderElement i={i} key={i} />
                        )
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
}
 
export default Founders;

// interface FounderElementProps {
//     i : number
// }

const FounderElement = ({i}) => {
    return (
        <div className={" w-[100vw] min-h-[75vh] flex flex-col-reverse lg:flex-row items-center justify-center gap-20 lg:px-40 md:px-10 px-10 snap snap-center"}>
            <div className='lg:w-7/12 w-12/12'>
                <div className="lg:flex gap-2 items-center hidden">
                    <p className="text-xl">
                        Meet the <span className=" text-[#5DA399] font-bold">Founders</span>
                    </p>
                    <div className="w-[5%] h-[2px] bg-[#5DA399]"></div>
                </div>
                <div className='pt-2 text-center lg:text-left'>
                    <h1 className='xl:text-7xl text-4xl font-black'>
                        {founders[i].name}
                    </h1>
                    <p className='xl:text-2xl pt-5 font-extralight'>
                        {founders[i].quote}
                    </p>
                </div>
            </div>
            <div className='lg:w-3/12'>
                <Image src={founders[i].image} alt='Founder Image' className='w-12/12 object-contain' />
            </div>
        </div>
    );
}