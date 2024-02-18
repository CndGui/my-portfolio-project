interface ProjectImageProps {
    src: string,
    alt: string
}

export function ProjectImage({ src, alt }: ProjectImageProps) {
    return <img src={`/images/projects/${src}`} alt={alt} className="rounded-md" />
}