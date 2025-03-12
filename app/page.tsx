import ArrowIcon from "./components/ArrowIcon";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Nobuhiro Oto
      </h1>
      <p className="mb-4 text-neutral-900 dark:text-neutral-100 tracking-tight">
        Fully committed to the philosophy of life-long learning
        with a deep passion for building software.
        The unique combination of creativity and technology drives 
        my passion for web development.
      </p>
      <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
      Currently focused on Web Development, but open to learning ANYTHING
      and EVERYTHING software engineering related.
      </p>

      <div className="my-8">
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                  Apr, 2023 - Current
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  Waseda University, Computer Science
              </p>
          </div>
      </div>
      
      <a
        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100 mt-8"
        rel="noopener noreferrer"
        target="_blank"
        href="/Resume.pdf"
      >
        <ArrowIcon/>
        <p className="ml-2 h-7">Click here for my resume</p>
      </a>

    </section>
  )
}
