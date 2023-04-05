

export default function LeftSidebar() {
    return (
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
    )
}