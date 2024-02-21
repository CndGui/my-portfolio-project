import { Tech } from "./Tech"

export function VersionControlTechs() {
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
                <Tech.Image imageName={i} />
                <Tech.Name name={name} className="first-letter:uppercase" />
            </Tech.Root>
        )
    })

    return (
        <div className="flex flex-wrap gap-4 mt-5 max-[765px]:justify-center">
            {versionControlsElement}
        </div>
    )
}