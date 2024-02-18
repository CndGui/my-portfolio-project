interface ProjectTitleRoot {
    title: string
}

export function ProjectTitle({ title }: ProjectTitleRoot) {
    return <strong>{title}</strong>
}