import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface Solution {
    title: string
    description: string
    learnMoreUrl: string
}
export const SolutionCard = ({ title, description}: Solution) => {
    return (
      <Card data-aos="fade-up" className="space-y-4 bg-gradient-to-r from-[#2e2e31] to-[#767171] text-white">
      <CardHeader>
        <CardTitle><h1 className="text-2xl border p-2 rounded-md ">{title}</h1></CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="bottom ">
       <Button variant={'ghost'} className="flex ">
        Learn More 
        <ArrowUpRight />
       </Button>
      </CardFooter>
    </Card>
    );
  };