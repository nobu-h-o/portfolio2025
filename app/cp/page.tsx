import ArrowIcon from "../components/ArrowIcon";

export const metadata = {
    title: 'Competitive Programming',
    description: 'Here are some links to my CP accounts',
}

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Competitive Programming</h1>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                Here are some links to my CP accounts
            </p>
            <br/>
            <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://atcoder.jp/users/notoh"
            >
                <ArrowIcon/>
                <p className="ml-2 h-7">AtCoder</p>
            </a>
            <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://leetcode.com/u/notoh-/"
            >
                <ArrowIcon/>
                <p className="ml-2 h-7">LeetCode</p>
            </a>
        </section>
    )
}
