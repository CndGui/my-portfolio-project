interface ProjectButtonRootProps {
    children: React.ReactNode
}

export function ProjectButtonsRoot({ children }: ProjectButtonRootProps) {
    return (
        <div className="mt-auto flex gap-4">
            {children}
        </div>
    )
}