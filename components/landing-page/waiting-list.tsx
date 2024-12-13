'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { MoveUpRight } from 'lucide-react'
import { Button } from '../ui/button'
import WaitlistForm from './waitlist-form'

export function WaitlistButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='flex mt-2'>
          <Button className="flex p-4 items-center gap-2 hover:bg-customTeal bg-white text-black border group" variant={'outline'}>
            Book a demo
            <MoveUpRight className="w-4 h-4  text-blue transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:m-2  bg-white text-black">
        <DialogHeader>
          <DialogTitle>Book a demo</DialogTitle>
          <DialogDescription>
            Click submit when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <WaitlistForm />

        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  )
}

