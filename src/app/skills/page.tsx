import Navbar from "@/components/Navbar";
import { Skill } from "@/components/Skill";
import FrontEndSkills from "@/components/Skill/FrontEndSkills";

export default function Skills() {
    return (
        <div>
            <Navbar page="skills" />

            <main className="ml-60 max-[765px]:ml-0 max-[765px]:mt-14 py-20 px-36 max-[1220px]:px-20 max-[917px]:px-10 max-[480px]:px-4 flex flex-col gap-10">
                <div>
                    <strong className="text-3xl">Skills</strong>
                    <p className="text-zinc-400">Explore some of the technologies I use in my projects. Each one has its function within a project, so if you feel curious, click on one to go to its website.</p>
                </div>

                <div>
                    <strong>Front-end</strong>

                    <FrontEndSkills />
                </div>
            </main>
        </div>
    )
}