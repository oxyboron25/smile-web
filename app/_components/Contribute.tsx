const Contribute = () => {
    return (
        <section className="min-h-screen py-20 px-40 text-white flex flex-col justify-center">
            <div className="flex gap-2 items-center px-40">
                    <p className="text-xl">
                        Contribute to the <span className=" text-[#5DA399] font-bold">Cause</span>
                    </p>
                    <div className="w-[5%] h-[2px] bg-[#5DA399]"></div>
                </div>
            <div className='pt-2 px-40'>
                <h1 className='text-7xl font-black'>
                    Embarking on a Journey of Hope
                </h1>
                <p className="text-2xl pt-5 font-extralight">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. galley of type and scrambled it to make a type.
                </p>
            </div>
            <div className="pt-20 grid grid-cols-4 px-10 gap-x-10">
                <ContributeElement backgroundColor="#49837A" Action='Join' Description='Find out more about specific mental health problems, and things that can have an effect on our mental health.' ButtonText="Become a Member" TextColor="white" />
                <ContributeElement backgroundColor="white" Action='Volunteer' Description='Find out more about specific mental health problems, and things that can have an effect on our mental health.' ButtonText="Become a Volunteer" TextColor="black" />
                <ContributeElement backgroundColor="#2B2B2B" Action='Mentor' Description='Find out more about specific mental health problems, and things that can have an effect on our mental health.' ButtonText="Become a Mentor" TextColor="white" />
                <ContributeElement backgroundColor="#49837A" Action='Donate' Description='Find out more about specific mental health problems, and things that can have an effect on our mental health.' ButtonText="Donate Now" TextColor="white" />
            </div>
        </section>
    );
}
 
export default Contribute;

interface ContributeElementProps {
    backgroundColor : string,
    Action : string,
    Description : string,
    ButtonText : string,
    TextColor : string
}

const ContributeElement = ({backgroundColor, Action, Description, ButtonText, TextColor} : ContributeElementProps) => {
    return (
        <div style={{backgroundColor : backgroundColor, color : TextColor}} className="rounded-t-[23px] rounded-bl-[23px] h-full w-full flex flex-col items-center justify-center py-10 px-7">
            <h2 className="text-3xl font-bold">{Action}</h2>
            <p className="text-lg font-extralight pt-5 pb-10">
                {Description}
            </p>
            <div role="button" style={{borderColor : TextColor}} className={"text-xl font-medium border-[1px] bg-transparent rounded-full py-2 px-5 transition-all ease-in-out "}>
                {ButtonText}
            </div>
        </div>
    );
}