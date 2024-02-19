interface ExperienceImageProps {
    src: string,
    alt: string
}

export function ExperieceImage({ src, alt }: ExperienceImageProps) {
    return <img src={`/images/experiences/${src}`} alt={alt} className="size-12 rounded-md" />
}