import { Tech } from "./Tech"

export function BackEndTechs() {
    const backEndsArray = ["javascript", "typescript", "nodejs"]
    const backEndsElement = backEndsArray.map(i => {
        let name = i
        let destiny;

        switch (i) {
            case "javascript": {
                destiny = "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                break
            }

            case "typescript": {
                destiny = "https://www.typescriptlang.org/"
                break
            }

            case "nodejs": {
                destiny = "https://nodejs.org/"
                name = "nodeJS"
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
            {backEndsElement}
        </div>
    )
}