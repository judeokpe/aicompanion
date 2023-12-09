import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Sidebar from "./sidebar";
  

const MobileSidebar = () => {
    return ( 
        <div className="md:hidden pr-4">
           <Sheet>
            <SheetTrigger>
            <Menu className="text-green-500"/>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-32 bg-secondary pt-10">
                <Sidebar />
            </SheetContent>
           </Sheet>
            
        </div>
     );
}
 
export default MobileSidebar;