import { For, onInit, useStore } from '@builder.io/mitosis';

interface SubLinkProp {
    sublabel: string;
    suburl: string;
}

interface HeaderNavLinkProp {
    label: string;
    url: string | undefined;
    subfsvgxmlns:string | undefined;
    subfsvgid: string | undefined;
    subssvgxmlns:string | undefined;
    subssvgid: string | undefined;
    submenu: SubLinkProp[] | undefined;
}

interface HeaderLogoProp {
    url: string;
    img: string;
    alt: string;
    label: string
}

interface HeaderSeetingMenuProp {
    signin: {
        url: string;
        label: string;
    };
    signup: {
        url: string;
        label: string;
    };
    openmain: {
        label: string;
        svgfirst: {
            id: string;
            xmlns:string;
        };
        svgsecond: {
            id: string;
            xmlns:string;
        }
    }
}
interface HeaderNavComponentProps {
    navLinks: HeaderNavLinkProp[];
    headerLogo: HeaderLogoProp;
    headerSettingMenu: HeaderSeetingMenuProp;
}

export default function HeaderNavComponent(props: HeaderNavComponentProps) {
    return (
        <header>
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href={props.headerLogo.url} class="flex items-center">
                        <img src={props.headerLogo.img} class="mr-3 h-6 sm:h-9" alt={props.headerLogo.alt} />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{props.headerLogo.label}</span>
                    </a>
                    <div class="flex items-center lg:order-2">
                        <a href={props.headerSettingMenu.signin.url} class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">{props.headerSettingMenu.signin.label}</a>
                        <a href={props.headerSettingMenu.signup.url} class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">{props.headerSettingMenu.signup.label}</a>
                        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span class="sr-only">{props.headerSettingMenu.openmain.label}</span>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns={props.headerSettingMenu.openmain.svgfirst.xmlns}>
                                <use xlink:href={props.headerSettingMenu.openmain.svgfirst.id}></use>
                            </svg>
                            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns={props.headerSettingMenu.openmain.svgsecond.xmlns}>
                                <use xlink:href={props.headerSettingMenu.openmain.svgsecond.id}></use>
                            </svg>
                        </button>
                    </div>
                    <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <For each={props.navLinks}>
                                {(link, index) => (
                                    <>
                                        {!!link.url && (
                                            <li>
                                                <a href={link.url} class="block py-2 pr-4 pl-3 border-b border-gray-100 text-primary-600 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-primary-500 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-primary-500 lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">{link.label}</a>
                                            </li>
                                        )}
                                        {!link.url && (
                                            <li>
                                                <button id="submenu-dropdown-button" data-dropdown-toggle="submenu-dropdown" data-dropdown-placement="right-end" type="button" class="flex justify-between items-center py-2 px-4 w-full hover:text-primary-600 dark:hover:text-primary-500">
                                                    <span class="flex items-center">
                                                        <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns={link.subfsvgxmlns}>
                                                            <use xlink:href={link.subfsvgid}></use>
                                                        </svg>{link.label}
                                                    </span>
                                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns={link.subssvgxmlns}>
                                                            <use xlink:href={link.subssvgid}></use>
                                                        </svg>
                                                </button>
                                                <div id="submenu-dropdown" class="hidden z-10 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                                    <ul class="py-1 text-sm font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown-button">
                                                        <For each={link.submenu}>
                                                            {(sublink, index) => (
                                                                <li>
                                                                    <a href={sublink.suburl} class="flex items-center py-2 px-4 w-full hover:text-primary-600 dark:hover:text-primary-500">{sublink.sublabel}</a>
                                                                </li>
                                                            )}
                                                        </For>
                                                    </ul>
                                                </div>
                                            </li>
                                        )}
                                    </>
                                )}
                            </For>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
/*
export default function HeaderNavComponent(props: HeaderNavComponentProps) {
    return (
        <header>
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://flowbite.com" class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <div class="flex items-center lg:order-2">
                        <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</a>
                        <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Sign up</a>
                        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <For each={props.navLinks}>
                                {(link, index) => link.url ? 
                                    <li>
                                        <a href={link.url} class="block py-2 pr-4 pl-3 border-b border-gray-100 text-primary-600 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-primary-500 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-primary-500 lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">{link.label}</a>
                                    </li> : 
                                    <li>
                                    <button id="submenu-dropdown-button" data-dropdown-toggle="submenu-dropdown" data-dropdown-placement="right-end" type="button" class="flex justify-between items-center py-2 px-4 w-full hover:text-primary-600 dark:hover:text-primary-500">
                                        <span class="flex items-center">
                                            <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>{link.label}
                                        </span>
                                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                    </button>
                                    <div id="submenu-dropdown" class="hidden z-10 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                        <ul class="py-1 text-sm font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown-button">
                                            <For each={link.submenu}>
                                                {(sublink, index) => (
                                                    <li>
                                                        <a href={sublink.suburl} class="flex items-center py-2 px-4 w-full hover:text-primary-600 dark:hover:text-primary-500">{sublink.sublabel}</a>
                                                    </li>
                                                )}
                                            </For>
                                        </ul>
                                    </div>
                                </li>
                                }
                            </For>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
*/