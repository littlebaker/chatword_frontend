

export default function MainPanel() {
    return (
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
    )
}