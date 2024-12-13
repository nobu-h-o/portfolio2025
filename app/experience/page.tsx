export const metadata = {
    title: 'Work Experience',
    description: 'Here are some places I have worked for',
}

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Work Experience</h1>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                    Nov, 2024 - Current
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    Frontend Intern at NAXA co.
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
        </section>
    )
}
