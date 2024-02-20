import { Configuration } from "./Configuration";
import { Contacts } from "./Contacts";
import { DropdownNav } from "./DropdownNav";
import { Information } from "./Information";
import { Navegations } from "./Navegations";

export function Navbar({ page }: { page: "home" | "projects" | "techs" }) {
    return (
        <div>
            <aside className="max-[765px]:hidden bg-white dark:bg-darkPage fixed overflow-y-auto scrollbar-none p-2 w-60 h-screen border-r border-r-black/20 dark:border-r-white/20">
                <Information />

                <Navegations page={page} className="mt-5" />
                <Contacts className="mt-5" />

                <Configuration/>
            </aside>

            <header className="hidden max-[765px]:flex fixed top-0 flex-col justify-center border-b border-black/20 dark:border-white/20 py-2 px-4 w-full bg-lightPage dark:bg-darkPage z-10">
                <Information />

                <Configuration/>
                <DropdownNav page={page}/>
            </header>
        </div>
    )
}