import { component$, Resource, useResource$, useStore } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { getContent, RegisteredComponent, RenderContent } from '@builder.io/sdk-qwik';

interface SideLanguageNavProp {
    label: string;
    url: string;
    xmlns: string;
    svgid: string;
}

// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const SideLanguageNav = component$((props: {data: SideLanguageNavProp[] | any}) => {
    return (
        <>  
            {props.data.map((item: SideLanguageNavProp) =>
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
                <SideLanguageNav 
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
