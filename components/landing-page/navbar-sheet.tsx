import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

export function NavbarSheet() {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="ghost">
        <Menu size={20} className="" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-black text-white">

        <SheetHeader className="flex flex-row items-center space-x-2 mb-2">
          <SheetTitle className="text-white flex">deeptrack  </SheetTitle>
          <Image src={"/deeptrack-favicon.ico"} className="grayscale" width={30} height={30} alt="Logo" />
        </SheetHeader>
        <hr />
        <div className="flex flex-col space-y-6 mt-6 ">
        <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-2"> <span>Solutions</span> <ChevronDown className="h-4 w-4" /> </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Our Solutions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Link href='#'>Image Authentication</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href='#'>Audio Authentication</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href='#'>Text Detection</Link></DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-2 "><span>Use Cases </span> <ChevronDown className="h-4 w-4" /> </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Our Use Cases</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>  <Link href='#'>KYC Identity Verification</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href='#'> Transaction Monitoring</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href='#'> Media Analysis</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href='#'>Risk Assessment</Link></DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>

        <Link href='#'>Support</Link>
        <Link href='#'>Blogs and Events</Link>
        </div>

        <SheetFooter className="">
          <SheetClose asChild>
            <Button className="absolute bottom-4">
              <X />  
                </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}