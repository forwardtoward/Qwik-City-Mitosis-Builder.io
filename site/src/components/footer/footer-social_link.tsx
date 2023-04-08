import { component$, Resource, useResource$, useStore } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { getContent, RegisteredComponent, RenderContent } from '@builder.io/sdk-qwik';

interface FooterSocialLink {
    label: string;
    url: string;
    svg: string;
    id: string;
}
// Enter your key here!
export const apiKey = process.env?.BUILDER_PUBLIC_API_KEY ?? '';

export const FooterSocialLinkComponent = component$((props: {data: FooterSocialLink[] | any}) => {
    return (
        <>
            {props.data.map((link: FooterSocialLink) => 
                <a href={link.url} class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <use xlink:href={link.id}></use>
                    </svg>
                    <span class="sr-only">{link.label}</span>
                </a>
            )}
        </>
    );
});

export default component$(() => {
    const { pathname } = useLocation();

    const builderContent = useResource$(() =>
        getContent({
        model: 'footer-soical-link',
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
                    <FooterSocialLinkComponent 
                        data={content?.data}
                    />
                }
            />
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Welcome to Qwik',
};
