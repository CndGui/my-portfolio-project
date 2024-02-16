import { HTMLAttributes } from "react"

interface TechNameProps extends HTMLAttributes<HTMLElement> {
    name: string
}

export default function TechName({ name, ...rest }: TechNameProps) {
    return (
        <span className={rest.className}>{name}</span>
    )
}