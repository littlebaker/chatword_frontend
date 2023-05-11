import {useState} from "react";


type QuesProps = {
    type: "choice" | "sentence",
    question: string,
    choices?: string[],
    answer?: number
}

type Analysis = null | string

export default function WordQuestion(props: QuesProps) {
    const [analysis, set_analysis] = useState("Test" as Analysis)
    const [sen_answer, set_sen] = useState("")

    let title
    if (props.type == "choice") {
        title = "Choice"
    } else if (props.type == "sentence") {
        title = "Make sentence"
    }

    let content_block
    if (props.type == "choice") {
        const nof_choice = props.choices!.length
        content_block = (
            <>
                <div className="py-4">
                    <div className="h-52 w-full rounded-lg  p-4 text-3xl">
                        {
                            props.choices!.map((choice, index) => {
                                return (
                                    <div className="text-lg pl-2 py-1 my-1 text-slate-500 rounded-xl hover:bg-slate-200 hover:cursor-pointer"
                                        onClick={() => {submit_choice(index)}}
                                    >
                                        {(index+1) + ". "+ choice}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <AnalysisBlock content={analysis} />
            </>
        )
    } else if (props.type == "sentence") {

        content_block = (
            <>
                <div className="py-4">
                    <textarea className="h-52 w-full rounded-lg border-4 border-dashed border-gray-200 p-4 text-3xl"
                        onChange={(e) => set_sen(e.target.value)}
                    >

                    </textarea>
                </div>
                <div className="next flex flex-row-reverse">
                    <button className="mr-24 py-2 px-4 bg-sky-100 rounded-xl text-sky-700 font-semibold text-xl hover:bg-sky-200"
                        onClick={() => submit_sentence(sen_answer)}
                    >
                        Submit
                    </button>
                </div>

                <AnalysisBlock  content={analysis}/>
            </>
        )
    }


    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <div className="text-2xl font-semibold text-gray-900">{title}</div>
                <div className="mt-2 text-xl  text-gray-600">{props.question}</div>
            </div>
            <div className="mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                {content_block}
                {/*<div className="next flex flex-row-reverse">*/}
                {/*    <button className="mr-24 py-2 px-4 bg-sky-100 rounded-xl text-sky-700 font-semibold text-xl hover:bg-sky-200" >next</button>*/}
                {/*</div>*/}
                {/* /End replace */}
            </div>
        </>
    )
}

function submit_sentence(answer: string) {
    // TODO: to be implemented
    console.log(answer)
}

function submit_choice(answer: number) {
    // TODO: to be implemented
    console.log("choice id: ", answer)
}

function AnalysisBlock(props: {content: Analysis}) {
    const content = props.content
    if (content == null) {
        return null
    }
    return (
        <>
            <div className="text-2xl font-semibold pb-4">
                Analysis:
            </div>
            <div className="px-4 font-semibold leading-loose">
                {props.content}
                On Wikipedia and other sites running on MediaWiki, Special:
                Random can be used to access a random article in the main namespace;
                this feature is useful as a tool to generate a random article.
                Depending on your browser, it's also possible to load a random page using a keyboard shortcut (in Firefox, Edge, and Chrome Alt-Shift+X).

                To create a link to a random page in a different namespace, use [[Special:Random/Namespace]]. For example, Special:Random/Talk will take you to a random article's talk page.
            </div>
        </>
    )
}