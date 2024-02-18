interface ProjectMainRoot {
    children: React.ReactNode
}

export function ProjectMainRoot({ children }: ProjectMainRoot) {
    return (
        <div className="mt-3" >
            {children}
        </div>
    )
}