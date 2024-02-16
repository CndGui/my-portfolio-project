import { HTMLAttributes } from "react"

interface SkillNameProps extends HTMLAttributes<HTMLElement> {
    name: string
}

export default function SkillName({ name, ...rest }: SkillNameProps) {
    return (
        <span className={rest.className}>{name}</span>
    )
}