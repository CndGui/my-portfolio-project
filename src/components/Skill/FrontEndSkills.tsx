import { Skill } from "."

export default function FrontEndSkills() {
    const skillsArray = ["html", "css", "javascript", "typescript", "react", "tailwind", "react-router", "recoil"]
    const Skills = skillsArray.map(i => {
        let name = i
        switch (i) {
            case "tailwind": {
                name = "tailwindCSS"
                break
            }
            case "react-router": {
                name = "react Router"
            }
        }

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
                break
            }
            
            case "react-router": {
                destiny = "https://reactrouter.com/en/main"
                break
            }
            
            case "recoil": {
                destiny = "https://recoiljs.org/"
                break
            }
        }

        return (
            <Skill.Root key={i} destiny={destiny}>
                <Skill.Image imageName={i} />
                <Skill.Name name={name} className={name == "html" || i == "css" ? "uppercase" : "first-letter:uppercase"} />
            </Skill.Root>
        )
    })

    return (
        <div className="flex flex-wrap gap-4 mt-5">
            {Skills}
        </div>
    )
}