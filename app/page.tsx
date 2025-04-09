import ArrowIcon from "./components/ArrowIcon";

export default function Page() {
    return (
        <section>
            <h1 className="text-2xl font-semibold tracking-tighter">
                Nobuhiro Oto
            </h1>
            <p className="mb-8 text-neutral-900 dark:text-neutral-100 tracking-tight">
                University Student and Software Engineer.
            </p>
            <h1 className="font-semibold text-2xl mb-4 tracking-tighter">Work Experience</h1>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                    Mar, 2025 - Current
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    Software Engineering Intern at ExaWizards Inc.
                </p>
            </div>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                    Nov, 2024 - Mar, 2025
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    Software Engineering Intern at NAXA co.
                </p>
            </div>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                    Oct, 2024 - Nov, 2024
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    Backend Intern at Solution & Technologies co.
                </p>
            </div>
            <h1 className="font-semibold text-2xl mt-8 mb-4 tracking-tighter">Education</h1>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                    Apr, 2023 - Current
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    Pursuing a Bachelor's in Computer Science at Waseda University
                </p>
            </div>
            <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100 mt-8"
                rel="noopener noreferrer"
                target="_blank"
                href="/Resume.pdf"
            >
                <ArrowIcon />
                <p className="ml-2 h-7">Click here for my resume</p>
            </a>

        </section>
    )
}
