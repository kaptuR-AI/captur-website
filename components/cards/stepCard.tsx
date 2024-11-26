// Authenticity Steps
import { IUserStep } from "@/types";
import Image from "next/image";
const StepCard: React.FC<{ stepDetails: IUserStep }> = ({ stepDetails }) => {
    return (
        <div className="flex flex-col gap-1 items-center border-[0.5px] border-white rounded-md p-5">
            <Image src={stepDetails.image} alt="CapturAI" width={50} height={50} />
            <h3 className="font-bold text-lg">{stepDetails.title}</h3>
            <p className="text-sm text-gray-400">{stepDetails.paragraph}</p>
        </div>
    )
}

export default StepCard;