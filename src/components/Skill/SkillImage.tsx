interface SkillImageProps {
    imageName: string
}

export default function SkillImage({ imageName }: SkillImageProps) {
    return (
        <div className="p-2 bg-white/5 rounded-md">
            <img src={`/images/logos/${imageName}-logo.png`} alt={imageName} className="size-8" />
        </div>
    )
}