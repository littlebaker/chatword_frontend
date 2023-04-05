import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from "@/components/navbar";

const inter = Inter({subsets: ['latin']})


const navigation = [
    {name: 'Recite', href: '#', current: true},
    {name: 'Review', href: '#', current: false},
]

const words = ["abundant",
"accord",
"acquaintance",
"acquisition",
"alarm",
"alliance",
"ally",
"ambition",
"antique",
"appeal",
"arbitrary",
"arise/arouse",
"attorney",
"balcony",
"bargain",
"behalf",
"bid",
"blend",
"boast/boastful",
"bold",
"boom"]

export default function Home() {
    return (
        <div className="main-page h-screen max-h-screen">
            {/*global navbar*/}
            <Navbar navigation={navigation}/>

            <div className="flex items-stretch h-full pt-[3.4rem] max-h-full">
                {/* left sidebar for desktop */}
                <div className="inset-y-0 flex-none flex w-64 flex-col mb-0">
                    {/* inner sidebar component*/}
                    <div className="flex min-h-0 flex-1 flex-col border-gray-200 bg-white border-r">
                        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                            <div className="mt-4 flex-1 space-y-1 bg-white px-2">

                                <div className="flex justify-center text-gray-600">Words' source</div>
                                <div className="flex justify-center items-center w-full py-3 ">
                                        <div className="w-32 py-1 px-2 border border-gray-200 rounded-xl  flex justify-center items-center">
                                            <a href="#">Default</a>
                                        </div>

                                </div>

                                <div className="flex flex-none justify-center text-gray-600 pt-10">New Words' Count
                                </div>
                                <div className="flex flex-none justify-center items-center w-full py-3">
                                    <div
                                        className="w-32 py-1 px-2 border border-gray-200 rounded-xl  flex justify-center items-center">
                                        31
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* comments */}
                        <div
                            className="flex flex-none justify-center items-center text-gray-600 pt-10 pl-3 px-2">Comments
                        </div>
                        <div className="flex flex-1  px-5 pb-10 pt-3">
                            <textarea
                                className="resize-none flex-grow w-full h-full border rounded-xl p-2 font-sans"></textarea>
                        </div>

                    </div>
                </div>

                {/* Dashboard content*/}
                <div className="flex flex-1 flex-col">
                    <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
                        <button
                            type="button"
                            className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            // onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            {/*<Bars3Icon className="h-6 w-6" aria-hidden="true"/>*/}
                        </button>
                    </div>

                    <main className="flex-1">
                        {/* navigation bar*/}
                        <div className="h-16 bg-slate-50">
                            <div className="flex">
                                <button className="h-16 w-16 rounded-full bg-transparent hover:bg-slate-100">
                                    {/*<BackwardIcon className={classNames(*/}
                                    {/*    'text-gray-400 group-hover:text-gray-500',*/}
                                    {/*    'm-auto flex-shrink-0 h-10 w-10'*/}
                                    {/*)}*/}
                                    {/*              aria-hidden="true"/>*/}
                                </button>
                            </div>
                        </div>
                        <div className="py-6">

                            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                            </div>
                            <div className="mx-auto px-4 sm:px-6 md:px-8">
                                {/* Replace with your content */}
                                {/*<div className="py-4">*/}
                                {/*    <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"/>*/}
                                {/*</div>*/}
                                <div className="max-w-[50%] mx-auto bg-slate-200">
                                    {/*<PlotComp className="object-fill w-full" data={data} layout={layout} config={config}/>*/}
                                </div>

                                {/* /End replace */}
                            </div>
                        </div>
                    </main>
                </div>

                <div className="flex items-stretch flex-col w-64 flex-none bg-white overflow-scroll">
                    <div className="flex flex-1 flex-col">
                        <div className="flex flex-1 flex-col pt-5 pb-4 border-l border-gray-300">
                            <div className="flex justify-center text-gray-600 text-xl">Word List</div>
                            <div className="pt-5 ">
                                <div className="rounded-xl">
                                    <table className="table-auto w-full text-center border-collapse ">
                                        <thead>
                                        <tr>
                                            <th className="border py-2 border-collapse border-slate-200 bg-sky-100">Default</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            words.map((word) => (
                                                <tr>
                                                    <td className="border-y border-collapse border-slate-300 p-2">{word}</td>
                                                </tr>
                                            ))
                                        }


                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
