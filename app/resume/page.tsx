import ArrowIcon from "../components/ArrowIcon";

export default function page(){
    return (

        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Resume</h1>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <a
                    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="/Resume.pdf"
                >
                    <ArrowIcon/>
                    <p className="ml-2 h-7">Click here for my resume</p>
                </a>
            </div>
        </section>
    );
}