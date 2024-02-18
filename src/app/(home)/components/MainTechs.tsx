import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

export function MainTechs({ ...rest }: HTMLAttributes<HTMLElement>) {
    function TechsList() {
        const infoArray = ["React", "Typescript", "Javascript", "NextJS", "NodeJS"]
        const infoLi = infoArray.map(i =>
          <li key={i} className="px-2 bg-cyan-400 dark:bg-cyan-500/10 rounded-md">
            {i}
          </li>
        )
    
        return (
          <ul className={twMerge("flex flex-wrap gap-2", rest.className)}>
            {infoLi}
          </ul>
        )
      }

      return <TechsList />
}