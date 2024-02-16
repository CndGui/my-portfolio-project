import { ReactNode } from "react";

interface TechRootProps {
    destiny?: string
    children: ReactNode
}

export default function TechRoot({ destiny, children }: TechRootProps) {
    if(destiny) {
        return (
            <a href={destiny} target="_blank" className="p-2 cursor-pointer min-w-52 bg-cyan-500/5 hover:bg-cyan-500/25 rounded-md flex gap-2 items-center hover:scale-105 duration-200">
                {children}
            </a>
        )
    }else {
        return (
            <div className="p-2 cursor-pointer min-w-52 bg-cyan-500/5 hover:bg-cyan-500/25 rounded-md flex gap-2 items-center hover:scale-105 duration-200">
                {children}
            </div>
        )
    }
}