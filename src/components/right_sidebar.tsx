
interface RightSidebarProps {
    words: string[]
}

export default function RightSidebar({words}: RightSidebarProps) {
    return (
        <div className="flex items-stretch flex-col w-64 flex-none bg-white overflow-auto">
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
    )
}