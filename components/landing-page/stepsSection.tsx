import { stepsData } from "@/data/data";
import StepCard from "../cards/stepCard";
import Image from "next/image";
const StepsSection = () => {
    return (
        <section className=" flex flex-col text-center space-y-4 ">
            <Image src="/Vector.svg" alt="Blue Lines" width={400} height={300} className="absolute -top-50 right-0 -z-10" />
            <h4 className="lg:mb-5 sm:mb-2 font-extrabold lg:text-4xl sm:text-2xl p-4">Authenticity in 3 Simple Steps</h4>
            <div className="flex gap-10 p-4 m-auto grid lg:grid-cols-3 sm:grid-col-1 max-w-7xl">
                {stepsData.map(step => <StepCard key={step.id} stepDetails={step} />)}
            </div>
        </section>
    )
}

export default StepsSection;