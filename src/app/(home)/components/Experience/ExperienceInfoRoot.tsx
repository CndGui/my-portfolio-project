interface ExperienceInfoRootProps {
    children: React.ReactNode
}

export function ExperienceInfoRoot({ children }: ExperienceInfoRootProps) {
    return (
        <div className="flex flex-col">
            {children}
        </div>
    )
}