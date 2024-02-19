import { ReactNode } from "react";

interface TechRootProps {
    destiny?: string
    children: ReactNode
}

export function TechRoot({ destiny, children }: TechRootProps) {
    if(destiny) {
        return (
            <a href={destiny} target="_blank" className="p-2 cursor-pointer min-w-52 bg-black/10 hover:bg-cyan-500/50 dark:bg-white/5 dark:hover:bg-cyan-500/30 rounded-md flex gap-2 items-center hover:scale-105 duration-200">
                {children}
            </a>
        )
    }else {
        return (
            <div className="p-2 cursor-pointer min-w-52 bg-black/10 hover:bg-cyan-500/50 dark:bg-white/5 dark:hover:bg-cyan-500/30 rounded-md flex gap-2 items-center hover:scale-105 duration-200">
                {children}
            </div>
        )
    }
}