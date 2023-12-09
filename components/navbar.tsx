import { Menu, Sparkle } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import {UserButton} from '@clerk/nextjs';


import {cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle";


const font = Poppins({
    weight: "600",
    subsets: ["latin"]
});
const Navbar = () => {
    return ( 
        <div className="fixed h-16 w-full z-50 items-center flex justify-between px-4 py-2 border-b border-primary/10 bg-secondary">
            <div className="flex items-center">
           
                    <Menu className="block md:hidden"/>
                    <Link href='/'>
                        <h1 className={cn("hidden md:block text-xl md:text-2xl text-primary font-bold", font.className)}><span className="text-2xl md:text-3xl text-green-500">S</span>mart Comapnion</h1>
                    </Link>
                
            </div>


            <div className="flex items-center gap-3">
                <Button variant="premium" size="sm">
                    Upgrade
                    <Sparkle className="text-white h-4 w-4 fill-white"/>
                </Button>
                <ModeToggle />
                <UserButton />


            </div>
        </div>
     );
}
 
export default Navbar;