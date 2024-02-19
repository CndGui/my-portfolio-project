interface ExperienceJobProps {
    job: string
}

export function ExperienceJob({ job }: ExperienceJobProps) {
    return <p className="-mt-1 text-xs text-zinc-600 dark:text-zinc-400">{job}</p>
}