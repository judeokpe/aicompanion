"use client"
import { Home, Plus, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
const Sidebar = () => {
    const pathname = usePathname()
    const routes = [
        {
            icon: Home,
            href: '/',
            label: 'Home',
            isPro: false
        },
        {
            icon: Plus,
            href: '/companion/new',
            label: 'Create',
            isPro: true
        },
        {
            icon: Settings,
            href: '/settings',
            label: 'Settings',
            isPro: false
        },
       
    ]
    const router = useRouter()
    const onNavigate = (url:string, isPro:boolean) =>{
            // todo pro
            router.push(url);
    }
    return ( 
        <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
            <div className="p-3 flex  flex-1 justify-center">
                <div className="space-y-2">
                    {routes.map((route)=>(
                        <div key={route.href} 
                        onClick={()=>onNavigate(route.href,route.isPro)}
                        className={cn("text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg ", 
                        pathname === route.href && "bg-primary/10 text-primary" 
                        )}>

                           <div className="flex flex-col gap-y-2 items-center flex-1">
                            <route.icon className="h-5 w-5 text-green-500"/>
                            {route.label}
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;