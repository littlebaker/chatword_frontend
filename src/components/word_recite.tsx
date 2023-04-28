

type WordProps = {
    word: string,
    descr: string,
    content: string
}

export default function WordRecite(props: WordProps) {


    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <span className="text-2xl font-semibold text-gray-900">{props.word}</span>
                <span className="ml-4 text-xl font-semibold text-gray-600">{props.descr}</span>
            </div>
            <div className="mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                <div className="py-4">
                    <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 p-4">
                        <div className="raw" dangerouslySetInnerHTML={{__html: props.content}} />
                    </div>
                </div>
                <div className="max-w-[50%] mx-auto bg-slate-200">
                    {/*<PlotComp className="object-fill w-full" data={data} layout={layout} config={config}/>*/}
                </div>

                {/* /End replace */}
            </div>
        </>
    )
}