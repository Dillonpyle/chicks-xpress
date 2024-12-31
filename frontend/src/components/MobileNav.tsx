import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
    return(
        <Sheet>
            <SheetTrigger>
                <Menu className='text-purple'/>
            </SheetTrigger>
            <SheetContent className='space-y-3'>
                <SheetTitle>
                    <span>Welcome to  <br/> 
                    <span className='text-purple'>Chicks</span>
                    <span className='text-amber'>Xpress</span></span>
                </SheetTitle>
                <Separator/>
                <SheetDescription className='flex'>
                    <Button className='flex-1 font-bold bg-purple'>Log In</Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;