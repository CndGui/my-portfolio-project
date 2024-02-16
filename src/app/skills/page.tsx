import Navbar from "@/components/Navbar";

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

                    <div className="flex flex-wrap gap-4 mt-5">
                        <a href="/" className="p-2 cursor-pointer min-w-52 bg-cyan-500/5 hover:bg-cyan-500/25 rounded-md flex gap-2 items-center">
                            <div className="p-2 bg-white/5 rounded-md">
                                <img src="/images/logos/html-logo.png" alt="html" className="size-8" />
                            </div>
                            <span>Html</span>
                        </a>
                        <a href="/" className="p-2 cursor-pointer min-w-52 bg-cyan-500/5 hover:bg-cyan-500/25 rounded-md flex gap-2 items-center">
                            <div className="p-2 bg-white/5 rounded-md">
                                <img src="/images/logos/css-logo.png" alt="css" className="size-8" />
                            </div>
                            <span>Css</span>
                        </a>
                        <a href="/" className="p-2 cursor-pointer min-w-52 bg-cyan-500/5 hover:bg-cyan-500/25 rounded-md flex gap-2 items-center">
                            <div className="p-2 bg-white/5 rounded-md">
                                <img src="/images/logos/javascript-logo.png" alt="javascript" className="size-8 rounded" />
                            </div>
                            <span>Javascript</span>
                        </a>
                        <a href="/" className="p-2 cursor-pointer min-w-52 bg-cyan-500/5 hover:bg-cyan-500/25 rounded-md flex gap-2 items-center">
                            <div className="p-2 bg-white/5 rounded-md">
                                <img src="/images/logos/typescript-logo.png" alt="typescript" className="size-8" />
                            </div>
                            <span>Typescript</span>
                        </a>
                        <a href="/" className="p-2 cursor-pointer min-w-52 bg-cyan-500/5 hover:bg-cyan-500/25 rounded-md flex gap-2 items-center">
                            <div className="p-2 bg-white/5 rounded-md">
                                <img src="/images/logos/react-logo.png" alt="react" className="size-8" />
                            </div>
                            <span>React</span>
                        </a>
                        <a href="/" className="p-2 cursor-pointer min-w-52 bg-cyan-500/5 hover:bg-cyan-500/25 rounded-md flex gap-2 items-center">
                            <div className="p-2 bg-white/5 rounded-md">
                                <img src="/images/logos/tailwind-logo.png" alt="tailwind" className="size-8" />
                            </div>
                            <span>TailwindCSS</span>
                        </a>
                        <a href="/" className="p-2 cursor-pointer min-w-52 bg-cyan-500/5 hover:bg-cyan-500/25 rounded-md flex gap-2 items-center">
                            <div className="p-2 bg-white/5 rounded-md">
                                <img src="/images/logos/react-router-logo.png" alt="react-router" className="size-8" />
                            </div>
                            <span>React Router</span>
                        </a>
                        <a href="/" className="p-2 cursor-pointer min-w-52 bg-cyan-500/5 hover:bg-cyan-500/25 rounded-md flex gap-2 items-center">
                            <div className="p-2 bg-white/5 rounded-md">
                                <img src="/images/logos/recoil-logo.png" alt="recoil" className="size-8" />
                            </div>
                            <span>Recoil</span>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}