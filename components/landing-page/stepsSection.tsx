import { stepsData } from "@/data/data";
import StepCard from "../cards/stepCard";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const StepsSection = () => {
    return (
        <section className=" flex flex-col text-center space-y-4 ">
            <Image src="/Vector.svg" alt="Blue Lines" width={400} height={300} className="absolute grayscale -top-50 right-0 -z-10" />
            <h4 className="lg:mb-5 sm:mb-2 font-extrabold lg:text-4xl sm:text-2xl p-4">All in One Deepfake Detection</h4>
            <Marquee pauseOnHover pauseOnClick >
                {stepsData.map(step => <StepCard key={step.id} stepDetails={step} />)}
                </Marquee >
        </section>
    )
}

export default StepsSection;