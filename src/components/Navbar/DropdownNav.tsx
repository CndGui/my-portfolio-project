'use client'

import { HTMLAttributes, useState } from "react";
import { LuAlignJustify } from "react-icons/lu";
import { Navegations } from "./Navegations";
import { Contacts } from "./Contacts";

interface DropdownNavProps extends HTMLAttributes<HTMLElement> {
    page: string
}

export function DropdownNav({ page, ...props }: DropdownNavProps) {
    const [ dropdownNav, setDropdownNav ] = useState(false)
    function ToggleDropdownNav() {
        setDropdownNav(!dropdownNav)
    }

    return (
        <div>
            <button onClick={ToggleDropdownNav} className="fixed top-2 right-4 border rounded-md bg-white dark:bg-darkPage border-black/20 dark:border-white/20 hover:border-cyan-500 z-10">
                <LuAlignJustify size={35} className="p-1" />
            </button>

            {dropdownNav && 
                <div>
                    <div onClick={ToggleDropdownNav} className="fixed bg-black/20 top-0 left-0 w-full h-full"></div>

                    <div className="fixed left-0 w-full bg-white dark:bg-darkPage p-4">
                        <Navegations page={page} />
                        <Contacts className="mt-5" />
                    </div>
                </div>
            }
        </div>
    )
}