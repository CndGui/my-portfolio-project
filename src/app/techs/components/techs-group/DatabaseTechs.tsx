import { Tech } from "./Tech"

export function DatabaseTechs() {
    const databasesArray = ["mongodb"]
    const databasesElement = databasesArray.map(i => {
        let name = i
        let destiny;

        switch (i) {
            case "mongodb": {
                destiny = "https://www.mongodb.com/pt-br"
                name = "mongoDB"
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
            {databasesElement}
        </div>
    )
}