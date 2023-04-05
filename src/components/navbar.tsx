

interface NavProps  {
    "navigation": {name: string, "href": string, current?: boolean}[]
};

export default function Navbar({navigation}: NavProps) {
    return (
        <nav className="fix h-[3.4rem] absolute w-full min-w-0 flex flex-row">
            <div className="flex flex-row flex-1 bg-white border-b border-gray-200">
                <div className="px-4 py-2 overflow-x-clip flex flex-none flex-row">
                    <div className="flex flex-1 flex-row">
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <div className="px-4 font-semibold text-xl pt-1">ChatWord</div>
                    </div>
                </div>

                <div className="flex flex-1">
                    {
                        navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={
                                    'text-gray-600 hover:bg-gray-50 ' +
                                    'hover:text-gray-900 group flex items-center px-2 py-4 text-sm font-medium rounded-md'
                                }
                            >
                                <div className="px-4">{item.name}</div>
                            </a>
                        ))
                    }
                </div>
                <div className="flex  p-4">
                    <a className="flex items-center" href="#">
                        <img
                            className="inline-block h-9 w-9 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="user avatar"
                        />
                        <span className="pl-4 text-sm text-gray-600 hover:text-gray-900">Tim Cook</span>
                    </a>

                </div>

            </div>

        </nav>
    )
}