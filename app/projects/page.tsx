import { BlogPosts } from 'app/components/posts'
import {formatDate} from "../blog/utils";
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
                        MyJapan - A web application that comes up with personalized travel plans for tourists,
                        based on their preferences and personality
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
                        MusicApp - A simple Web Application of my favorite songs
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
            <h1 className="font-semibold text-2xl my-8 tracking-tighter">Competitive Programming</h1>
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
