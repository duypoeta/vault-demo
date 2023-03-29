import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

const pages = [
    { name: "Equipment", href: "#", current: false },
    { name: "Detail", href: "#", current: true },
];

const Breadcrumb = () => {
    return (
        <nav className="flex my-3 md:my-5  px-3" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
                <li>
                    <div>
                        <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-700">
                            Home
                        </a>
                    </div>
                </li>
                {pages.map((page) => (
                    <li key={page.name}>
                        <div className="flex items-center">
                            <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            <a
                                href={page.href}
                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                aria-current={page.current ? "page" : undefined}
                            >
                                {page.name}
                            </a>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
