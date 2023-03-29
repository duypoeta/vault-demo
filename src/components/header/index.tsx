import { useContext, useState } from "react";
import { Dialog, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, BookmarkIcon, UserCircleIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Button from "../button";
import { ThemeContext, ThemeContextValue } from "@/contexts/theme";

const navigation = [
    { name: "Equipment", href: "#" },
    { name: "How It Works", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Login | Sign Up", href: "#" },
];

interface HeaderProps {
    handleChangeTheme?: (value: String) => void;
}

const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
};

const Header = (props: HeaderProps) => {
    const { handleChangeTheme } = props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const theme = useContext(ThemeContext);

    const setTheme = (theme: String) => {
        if (handleChangeTheme) {
            handleChangeTheme(theme);
        }
    };

    return (
        <header className="w-screen px-3 xl:px-[155px] h-[80px] bg-white">
            <Dialog as="div" className="md:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10 bg-white" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close</span>
                            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
            <nav
                className="h-full px-0 md:px-3 mx-auto flex items-center justify-between items-center"
                aria-label="Global"
            >
                <div className="flex flex-1 md:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                    </button>
                </div>
                <div className="flex  flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Vault</span>
                        <img
                            className="h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt=""
                        />
                    </a>
                </div>
                <div className="flex md:hidden">
                    <button
                        type="button"
                        className=" inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <UserCircleIcon className="h-10 w-10" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden md:flex md:gap-x-6">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                            {item.name}
                        </a>
                    ))}
                </div>
                <Button
                    title="My Favorite"
                    icon={<BookmarkIcon className="h-6 w-6" aria-hidden="true" />}
                    theme="secondary"
                    className="hidden md:ml-5 md:ml-20  md:flex md:justify-end"
                />
                <Menu as="div" className="hidden relative md:inline-block text-left ml-3">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            {theme.toUpperCase()}
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                    </div>
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {ThemeContextValue.map((key, index) => (
                                <Menu.Item key={index}>
                                    <div
                                        className={classNames(
                                            theme === key ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                            "block px-4 py-2 text-sm cursor-pointer"
                                        )}
                                        onClick={() => setTheme(key)}
                                    >
                                        {key.toUpperCase()}
                                    </div>
                                </Menu.Item>
                            ))}
                        </div>
                    </Menu.Items>
                </Menu>
            </nav>
        </header>
    );
};

export default Header;
