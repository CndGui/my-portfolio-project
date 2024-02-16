import { ReactNode } from "react";

interface SkillRootProps {
    destiny?: string
    children: ReactNode
}

export default function SkillRoot({ destiny, children }: SkillRootProps) {
    return (
        <a href={destiny ? destiny : "/"} target="_blank" className="p-2 cursor-pointer min-w-52 bg-cyan-500/5 hover:bg-cyan-500/25 rounded-md flex gap-2 items-center hover:scale-105 duration-200">
            {children}
        </a>
    )
}