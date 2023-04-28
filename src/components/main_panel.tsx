import WordRecite from "@/components/word_recite";
import WordQuestion from "@/components/question_block";
import {useState} from "react";

type MainProps = {
    func: "recite" | "review",
}

export default function MainPanel(props: MainProps) {
    let [ques_type, set_ques_type] = useState("choice")
    let content_block
    if (props.func == "recite"){
        content_block = (
            <WordRecite word={"Abandon"} descr={"v."} content={"Create unlimited unique essays, articles or content for your website or blog the fastest\n" +
                "                        and simpliest way, no more wasting hours writing articles.Create articles automatically\n" +
                "                        on any subject by adding keyword and use the generated articles with any of your\n" +
                "                        favorite SEO software.Article Generator is the cheapest solution in todays time for\n" +
                "                        article writing, our goal is to provide our customers with best quality work for\n" +
                "                        cheapest price possible."} />
        )
    } else if (props.func == "review") {
        if (ques_type == "choice") {
            content_block = (
                <WordQuestion type={"choice"} question={"Which usage of the word \"Abandon\" is correct"} choices={
                    ["choice one", "choice two", "choice threee"]
                }/>
            )
        } else if (ques_type == "sentence") {
            content_block = (
                <WordQuestion type={"sentence"} question={"Please make a question with word: \"Abandon\""}/>
            )
        }
    }

    return (
        <div className="flex flex-1 flex-col">
            {/*<div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">*/}
            {/*    <button*/}
            {/*        type="button"*/}
            {/*        className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 */}
            {/*            items-center justify-center rounded-md text-gray-500 hover:text-gray-900 */}
            {/*            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"*/}
            {/*        // onClick={() => setSidebarOpen(true)}*/}
            {/*    >*/}
            {/*        <span className="sr-only">Open sidebar</span>*/}
            {/*        /!*<Bars3Icon className="h-6 w-6" aria-hidden="true"/>*!/*/}
            {/*    </button>*/}
            {/*</div>*/}

            <main className="flex-1">
                {/* navigation bar*/}
                <div className="h-16 bg-slate-50">
                    <div className="flex flex-row h-full place-items-center">
                        {
                            props.func != "recite" ? (
                                <>
                                    <button className="px-2 py-2 mx-4 text-gray-600 rounded-xl hover:bg-slate-200"
                                            onClick={()=> set_ques_type("choice")}
                                    >
                                        Choice
                                    </button>
                                    <button className="px-2 py-2  text-gray-600 rounded-xl  hover:bg-slate-200"
                                            onClick={()=> set_ques_type("sentence")}
                                    >
                                        Make sentence
                                    </button>
                                </>
                            )  : null
                        }

                        {/*<button className="h-16 w-16 rounded-full bg-transparent hover:bg-slate-100">*/}
                        {/*    /!*<BackwardIcon className={classNames(*!/*/}
                        {/*    /!*    'text-gray-400 group-hover:text-gray-500',*!/*/}
                        {/*    /!*    'm-auto flex-shrink-0 h-10 w-10'*!/*/}
                        {/*    /!*)}*!/*/}
                        {/*    /!*              aria-hidden="true"/>*!/*/}
                        {/*</button>*/}
                    </div>
                </div>
                <div className="py-6">
                {/*    Content here*/}
                    {content_block}

                </div>
            </main>
        </div>
    )
}