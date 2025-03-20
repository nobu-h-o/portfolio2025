import ArrowIcon from "./components/ArrowIcon";

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tighter">
        Nobuhiro Oto
      </h1>
      <p className="mb-4 text-neutral-900 dark:text-neutral-100 tracking-tight">
        University Student and Software Engineer.
      </p>
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
