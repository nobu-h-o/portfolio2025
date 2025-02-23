import { BlogPosts } from 'app/components/posts'
import Link from "next/link";
import ArrowIcon from "../components/ArrowIcon";

export const metadata = {
    title: 'Projects',
    description: 'Here are some of the projects I have worked on',
}

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
            <Link
                className="flex flex-col space-y-1 mb-4"
                href='https://github.com/nobu-h-o/MyJapan'
                target="_blank"
            >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                    <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                        MyJapan - Worked in a team of 4 for a hackathon and developed 
                        a web application that comes up with personalized travel plans for tourists,
                        based on their preferences and personality
                    </p>
                </div>
            </Link>
            <Link
                className="flex flex-col space-y-1 mb-4"
                href='https://github.com/nobu-h-o/AtCoderRatingComparer'
                target="_blank"
            >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                    <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                        AtCoder Rating Comparer - Used Web Scraping Technology to create a Web Application to compare ratings on AtCoder. 
                    </p>
                </div>
            </Link>
            <Link
                className="flex flex-col space-y-1 mb-4"
                href='https://sota-mitsumori.github.io/Karuta-Fudanagashi/'
                target="_blank"
            >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                    <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                        Karuta App - iOS Application for practicing competitive Karuta
                    </p>
                </div>
            </Link>
            <Link
                className="flex flex-col space-y-1 mb-4"
                href='https://github.com/nobu-h-o/To_Do_App'
                target="_blank"
            >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                    <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                        To Do App - A simple To Do List Application using TypeScript and React
                    </p>
                </div>
            </Link>
            <Link
                className="flex flex-col space-y-1 mb-4"
                href='https://github.com/nobu-h-o/MusicApp'
                target="_blank"
            >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                    <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                        Music App - A simple Web Application of my favorite songs
                    </p>
                </div>
            </Link>
            <Link
                className="flex flex-col space-y-1 mb-4"
                href='https://github.com/nobu-h-o/PixelArt'
                target="_blank"
            >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                    <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                        PixelArtMaker - A simple Web Application to create cute pixel art
                    </p>
                </div>
            </Link>
            <Link
                className="flex flex-col space-y-1 mb-4"
                href='https://github.com/nobu-h-o/File_Manager'
                target="_blank"
            >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                    <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                        Python File Manager - A Python App that sorts any files in any directory into their extension
                        types
                    </p>
                </div>
            </Link>
        </section>
    )
}
