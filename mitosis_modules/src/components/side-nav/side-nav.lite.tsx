import { For, onInit, useState } from '@builder.io/mitosis';

interface SubMainMenuProp {
    suburl: string;
    sublabel: string;
}

interface SideMainNavProp {
    label: string;
    url: string | undefined;
    dropbutton: string;
    xmlns: string;
    svgid: string;
    subxmlns: string | undefined;
    subsvgid: string | undefined;
    submenu: SubMainMenuProp[] | undefined
}

interface SideServiceNavProp {
    label: string;
    url: string;
    svgid: string;
    svgxmlns: string;
}

interface SideSettingProp {
    furl: string;
    fxmlns: string;
    fsvgid: string;
    surl: string;
    sxmlns: string;
    ssvgid: string;
    title: string;
    txmlns: string;
    tsvgid: string;
    txlink: string;
}

interface SideLanguageNavProp {
    label: string;
    url: string;
    svgid: string;
    xmlns: string;
}

interface SideNavComponentProps {
    main: SideMainNavProp[];
    services: SideServiceNavProp[];
    languages: SideLanguageNavProp[];
    settings: SideSettingProp
}

export default function SideNavComponent(props: SideNavComponentProps) {
    return (
        <aside class="fixed top-0 left-0 w-64 h-full" aria-label="Sidenav">
            <div class="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <ul class="space-y-2">
                    <For each={props.main}>
                        {(item, index) => (
                            <>
                                {!!item.url && (
                                    <li>
                                        <a href={item.url} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns={item.xmlns}>
                                                <use xlink:href={item.svgid}></use>
                                            </svg>
                                            <span class="ml-3">{item.label}</span>
                                        </a>
                                    </li>
                                )}
                                {!item.url && (
                                    <li>
                                        <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns={item.xmlns}>
                                                <use xlink:href={item.svgid}></use>
                                            </svg>
                                            <span class="flex-1 ml-3 text-left whitespace-nowrap">{item.dropbutton}</span>
                                            <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns={item.subxmlns}>
                                                <use xlink:href={item.subsvgid}></use>
                                            </svg>
                                        </button>
                                        <ul id="dropdown-pages" class="hidden py-2 space-y-2">
                                            <For each={item.submenu}>
                                                {(subItem, index) => (
                                                    <li>
                                                        <a href={subItem.suburl} class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{subItem.sublabel}</a>
                                                    </li>
                                                )}
                                            </For>
                                        </ul>
                                    </li>   
                                )}
                            </>
                        )}
                    </For>
                </ul>
                <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                    <For each={props.services}>
                        {(item, index) => (
                            <li>
                                <a href={item.url} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns={item.svgxmlns}>
                                        <use xlink:href={item.svgid}></use>
                                    </svg>
                                    <span class="ml-3">{item.label}</span>
                                </a>
                            </li>
                        )}
                    </For>
                </ul>
            </div>
            <div class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20">
                <a href={props.settings.furl} class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns={props.settings.fxmlns}>
                        <use xlink:href={props.settings.fsvgid}></use>
                    </svg>
                </a>
                <a href={props.settings.surl} data-tooltip-target="tooltip-settings" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns={props.settings.sxmlns}>
                        <use xlink:href={props.settings.ssvgid}></use>
                    </svg>
                </a>
                <div id="tooltip-settings" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
                    {props.settings.title}
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button type="button" data-dropdown-toggle="language-dropdown" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:hover:text-white dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg aria-hidden="true" class="h-5 w-5 rounded-full mt-0.5" xmlns={props.settings.txmlns} xmlns:xlink={props.settings.txlink} viewBox="0 0 3900 3900">
                        <use xlink:href={props.settings.tsvgid}></use>
                    </svg>
                </button>
                <div class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" id="language-dropdown">
                    <ul class="py-1" role="none">
                        <For each={props.languages}>
                            {(item, index) => (
                                <li>
                                    <a href={item.url} class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">
                                        <div class="inline-flex items-center">
                                            <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns={item.xmlns} id="flag-icon-css-us" viewBox="0 0 512 512">
                                                <use xlink:href={item.svgid}></use>
                                            </svg>
                                            {item.label}
                                        </div>
                                    </a>
                                </li>
                            )}
                        </For>
                    </ul>
                </div>
            </div>
        </aside>
    );
}