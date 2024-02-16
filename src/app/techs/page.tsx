import Navbar from "@/components/Navbar";
import AppTechs from "@/components/Techs/AppTechs";
import BackEndTechs from "@/components/Techs/BackEndTechs";
import DatabaseTechs from "@/components/Techs/DatabaseTechs";
import FrontEndTechs from "@/components/Techs/FrontEndTechs";
import VersionControlTechs from "@/components/Techs/VersionControlTechs";

export default function Techs() {
    function Title({ title }: { title: string }) {
        return (
            <strong className="text-xl">{title}</strong>
        )
    }

    return (
        <div>
            <Navbar page="techs" />

            <main className="ml-60 max-[765px]:ml-0 max-[765px]:mt-14 py-20 px-36 max-[1220px]:px-20 max-[917px]:px-10 max-[480px]:px-4 flex flex-col gap-10">
                <div>
                    <strong className="text-3xl">Tool and technologies</strong>
                    <p className="text-zinc-400">Explore some of the technologies I use in my projects. Each one has its function within a project, so if you feel curious, click on one to go to its website.</p>
                </div>

                <div>
                    <Title title="Front-end" />
                    <FrontEndTechs />
                </div>

                <div>
                    <Title title="Back-end" />
                    <BackEndTechs />
                </div>

                <div>
                    <Title title="Database" />
                    <DatabaseTechs />
                </div>

                <div>
                    <Title title="Version Control" />
                    <VersionControlTechs />
                </div>

                <div>
                    <Title title="Apps" />
                    <AppTechs />
                </div>
            </main>
        </div>
    )
}