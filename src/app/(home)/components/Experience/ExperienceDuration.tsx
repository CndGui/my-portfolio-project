interface ExperienceDurationProps {
    duration: string
}

export function ExperienceDuration({ duration }: ExperienceDurationProps) {
    return <p className="-mt-1 text-xs text-zinc-600 dark:text-zinc-400">{duration}</p>
}