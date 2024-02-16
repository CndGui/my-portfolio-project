import { Tech } from "."
import TechImage from "./TechImage"
import TechName from "./TechName"

export default function VersionControlTechs() {
    const versionControlsArray = ["git", "github"]
    const versionControlsElement = versionControlsArray.map(i => {
        let name = i
        let destiny;

        switch (i) {
            case "git": {
                destiny = "https://git-scm.com/"
                break
            }

            case "github": {
                destiny = "https://github.com/"
                break
            }
        }

        return (
            <Tech.Root key={i} destiny={destiny} >
                <TechImage imageName={i} />
                <TechName name={name} className="first-letter:uppercase" />
            </Tech.Root>
        )
    })

    return (
        <div className="flex flex-wrap gap-4 mt-5">
            {versionControlsElement}
        </div>
    )
}