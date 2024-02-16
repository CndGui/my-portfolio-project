import { Tech } from "./Tech"

export default function FrontEndTechs() {
    const techArray = ["html", "css", "javascript", "typescript", "react", "tailwind", "nextjs", "react-router", "recoil"]
    const Techs = techArray.map(i => {
        let name = i
        let destiny;
        switch (i) {
            case "html": {
                destiny = "https://developer.mozilla.org/en-US/docs/Web/HTML"
                break
            }

            case "css": {
                destiny = "https://developer.mozilla.org/en-US/docs/Web/CSS"
                break
            }

            case "javascript": {
                destiny = "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                break
            }

            case "typescript": {
                destiny = "https://www.typescriptlang.org/"
                break
            }

            case "react": {
                destiny = "https://react.dev/"
                break
            }

            case "tailwind": {
                destiny = "https://tailwindcss.com/"
                name = "tailwindCSS"
                break
            }

            case "nextjs": {
                destiny = "https://nextjs.org/"
                name = "nextJS"
                break
            }
            
            case "react-router": {
                destiny = "https://reactrouter.com/en/main"
                name = "react Router"
                break
            }
            
            case "recoil": {
                destiny = "https://recoiljs.org/"
                break
            }
        }

        return (
            <Tech.Root key={i} destiny={destiny}>
                <Tech.Image imageName={i} />
                <Tech.Name name={name} className={name == "html" || i == "css" ? "uppercase" : "first-letter:uppercase"} />
            </Tech.Root>
        )
    })

    return (
        <div className="flex flex-wrap gap-4 mt-5 max-[765px]:justify-center">
            {Techs}
        </div>
    )
}