interface ExperienceRootProps {
    children: React.ReactNode
}

export function ExperienceRoot({ children }: ExperienceRootProps) {
    return (
        <div className="bg-black/10 dark:bg-white/5 rounded-md h-16 flex gap-2 px-2 items-center">
            {children}
        </div>
    )
}