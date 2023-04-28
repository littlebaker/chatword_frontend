

type QuesProps = {
    type: "choice" | "sentence",
    question: string,
    choices?: string[],
    answer?: number
}

export default function WordQuestion(props: QuesProps) {
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
                                    <div className="text-lg pl-2 py-1 my-1 text-slate-500 hover:bg-slate-200 rounded-xl">{(index+1) + ". "+ choice}</div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="max-w-[50%] mx-auto bg-slate-200">
                    {/*<PlotComp className="object-fill w-full" data={data} layout={layout} config={config}/>*/}
                </div>
            </>
        )
    } else if (props.type == "sentence") {
        content_block = (
            <>
                <div className="py-4">
                    <textarea className="h-52 w-full rounded-lg border-4 border-dashed border-gray-200 p-4 text-3xl">

                    </textarea>
                </div>
                <div className="max-w-[50%] mx-auto bg-slate-200">
                    {/*<PlotComp className="object-fill w-full" data={data} layout={layout} config={config}/>*/}
                </div>
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
                <div className="next flex flex-row-reverse">
                    <button className="mr-24 py-2 px-4 bg-sky-100 rounded-xl text-sky-700 font-semibold text-xl hover:bg-sky-200" >next</button>
                </div>
                {/* /End replace */}
            </div>
        </>
    )
}