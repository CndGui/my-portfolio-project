interface TechImageProps {
    imageName: string
}

export function TechImage({ imageName }: TechImageProps) {
    return (
        <div className="p-2 bg-black/50 dark:bg-white/5 rounded-md">
            <img src={`/images/logos/${imageName}-logo.png`} alt={imageName} className="size-8" />
        </div>
    )
}