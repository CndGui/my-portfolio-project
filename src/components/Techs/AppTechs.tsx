import { Tech } from "."
import TechImage from "./TechImage"
import TechName from "./TechName"

export default function AppTechs() {
    const appsArray = ["chrome", "vsc", "terminal", "spotify", "discord"]
    const appsElement = appsArray.map(i => {
        let name = i

        switch (i) {
            case "vsc": {
                name = "visual Studio Code"
            }
        }

        return (
            <Tech.Root key={i} >
                <TechImage imageName={i} />
                <TechName name={name} className="first-letter:uppercase" />
            </Tech.Root>
        )
    })

    return (
        <div className="flex flex-wrap gap-4 mt-5">
            {appsElement}
        </div>
    )
}