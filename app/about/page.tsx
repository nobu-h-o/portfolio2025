import ArrowIcon from 'app/components/ArrowIcon'
import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">About</h1>
      <BlogPosts />
      <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
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
