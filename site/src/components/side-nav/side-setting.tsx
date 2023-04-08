import { component$, Resource, useResource$, useStore } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { getContent, RegisteredComponent, RenderContent } from '@builder.io/sdk-qwik';

interface SideSettingComponentProp {
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

// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const SideSettingComponent = component$((props: {data: SideSettingComponentProp | any}) => {
    return (
        <>  
            <a href={props.data.furl} class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns={props.data.fxmlns}>
                    <use xlink:href={props.data.fsvgid}></use>
                </svg>
            </a>
            <a href={props.data.surl} data-tooltip-target="tooltip-settings" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns={props.data.sxmlns}>
                    <use xlink:href={props.data.ssvgid}></use>
                </svg>
            </a>
            <div id="tooltip-settings" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
                {props.data.title}
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button type="button" data-dropdown-toggle="language-dropdown" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:hover:text-white dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                <svg aria-hidden="true" class="h-5 w-5 rounded-full mt-0.5" xmlns={props.data.txmlns} xmlns:xlink={props.data.txlink} viewBox="0 0 3900 3900">
                    <use xlink:href={props.data.tsvgid}></use>
                </svg>
            </button>
        </>
    );
})

export default component$(() => {
    const { pathname } = useLocation();

    const builderContent = useResource$(() =>
        getContent({
        model: 'side-language-nav',
        apiKey: apiKey,
        userAttributes: { urlPath: pathname },
        })
    );

    return (
        <div>
        <Resource
            value={builderContent}
            onPending={() => <>Loading...</>}
            onRejected={error => <>Error: {error.message}</>}
            onResolved={content => 
                <SideSettingComponent 
                    data = {content?.data}
                />
            }
        />
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Welcome to Qwik',
};
