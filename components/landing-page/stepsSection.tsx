import { stepsData } from "@/data/data";
import StepCard from "../cards/stepCard";
const StepsSection = () => {
    return (
        <section className="text-center py-10">
            <h4 className="mb-5">Authenticity in 3 Simple Steps</h4>
            <div className="flex gap-10">
                {stepsData.map(step => <StepCard key={step.id} stepDetails={step} />)}
            </div>
        </section>
    )
}

export default StepsSection;