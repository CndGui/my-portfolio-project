import Navbar from "@/components/Navbar"
import { HTMLAttributes } from "react";
import { PiNote } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

export default function Home() {
  function Info({ ...rest }: HTMLAttributes<HTMLElement>) {
    const infoArray = ["React", "Typescript", "Javascript", "NextJS", "NodeJS"]
    const infoLi = infoArray.map(i =>
      <li key={i} className="px-2 bg-cyan-400 dark:bg-cyan-500/10 rounded-md">
        {i}
      </li>
    )

    return (
      <ul className={twMerge("flex flex-wrap gap-2", rest.className)}>
        {infoLi}
      </ul>
    )
  }

  return (
    <div>
      <Navbar page="home" />

      <main className="ml-60 max-[765px]:ml-0 max-[765px]:mt-14 py-20 px-36 max-[1220px]:px-20 max-[917px]:px-10 max-[480px]:px-4 flex flex-col gap-10">
        <div className="flex gap-3 items-center">
          <div className="p-[0.1rem] bg-cyan-500 rounded-md">
            <div className="bg-cyan-500 rounded-md size-32 flex items-center justify-center overflow-hidden">
              <img src="/images/perfil-2.png" alt="Perfil" className="" />
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-4xl font-semibold">Guilherme Rodrigues</p>
            <p className="text-lg text-zinc-400 -mt-1">Front-end developer</p>

            <Info className="mt-2" />
          </div>
        </div>

        <div className="border border-black/20 dark:border-white/20 p-4 rounded-md">
          <div className="flex gap-2 items-center mb-4">
            <PiNote size={25} />
            <p className="text-xl font-semibold">About-me</p>
          </div>
          <p className="first-letter:ml-10">Hello, I am Guilherme Rodrigues de Morais, a 19-year-old young man passionate about the art of programming. As far back as I can remember, I have always been fascinated by the world of technology and the transformative power of code. Three years ago, I immersed myself headlong into this challenging and stimulating universe, and since then, I have been on a journey of continuous learning and exciting discoveries.</p>
          <p className="first-letter:ml-10">In addition to my love for technology, I am a sociable and outgoing person. I enjoy spending time with friends and family, sharing laughs and memorable experiences. I believe that it is in these moments of togetherness that we build true bonds and strengthen our support network.</p>
        </div>

        <div className="border border-black/20 dark:border-white/20 h-80 rounded-md p-4">
          <div className="flex gap-2 items-center mb-4">
            <PiNote size={25} />
            <p className="text-xl font-semibold">Experiences</p>

            <a href="/files/curriculo.pdf" className="ml-auto" download={"Curriculo.pdf"}>
              <button className="bg-cyan-500 px-2 rounded-md">Download CV</button>
            </a>
          </div>

          <div className="h-60 flex items-center justify-center">
            <p className="text-zinc-400">Nothing ;/</p>
          </div>

          {/* <div className="relative h-60 grid grid-cols-4 gap-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-cyan-500/25 scrollbar-track-white/10 px-1">
            <div className="bg-black/10 dark:bg-white/10 rounded-md h-16">a</div>
          </div> */}
        </div>
      </main>
    </div>
  );
}
