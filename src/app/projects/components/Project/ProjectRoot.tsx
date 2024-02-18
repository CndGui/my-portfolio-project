interface ProjectRootProps {
    children: React.ReactNode
}

export function ProjectRoot({ children }: ProjectRootProps) {
    return (
        <div className="border border-black/20 dark:border-white/20 w-96 max-[500px]:w-[18rem] h-[26rem] rounded-md p-6 flex flex-col">
            {children}
        </div>
    )
}