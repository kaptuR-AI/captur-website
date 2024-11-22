'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MoveUpRight } from "lucide-react"

export function WaitlistButton() {  
  return (
    <Dialog>
      <DialogTrigger asChild>
      <div className='flex ml-3 mt-2'>
       <Button className="flex items-center gap-2 hover:bg-blue-400 bg-white text-black border group" variant={'outline'}>
            Join Our Waitlist
            <MoveUpRight className="w-4 h-4  text-blue transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </Button>
      </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black text-white">
        <DialogHeader>
          <DialogTitle>Joining our Waitlist</DialogTitle>
          <DialogDescription>
             Click submit when you're done.
          </DialogDescription>
        </DialogHeader>
       
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
       
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

