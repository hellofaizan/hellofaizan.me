import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuShortcut
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Crown, Github, SwitchCamera, ToggleLeft, Twitter } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ModeToggle } from './toggle'
import Link from 'next/link'

const Mobilenav = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className={"p-2 hover:bg-muted rounded-lg"}>
                    <ChevronDown />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 z-10">
                <DropdownMenuItem>
                    <Github className="mr-2 h-4 w-4" />
                    <span><Link href={"/github"} target='_blank'>Github</Link></span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Twitter className="mr-2 h-4 w-4" />
                    <span><Link href={'/twitter'} target='_blank'>Twitter</Link></span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Mobilenav
