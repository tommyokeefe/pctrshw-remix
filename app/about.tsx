import { renderToString } from "react-dom/server";
import invariant from "tiny-invariant";

import about from "~/content/about"
import type { AboutMarkdownAttributes } from "~/content/about";

export type About = AboutMarkdownAttributes & { slug: string, content?: string }

function pageHasValidAttributes(attributes: any): attributes is AboutMarkdownAttributes {
    return attributes?.title;
}

export function getAboutBySlug(slug: string) {
    const aboutPage = about.find(page => page.filename.replace(/\.md$/, "") === slug);
    if (!aboutPage) {
        throw new Response(`/about/${slug}`, {
            status: 404
        });
    }
    const { attributes, filename, ContentComponent } = aboutPage;
    invariant(pageHasValidAttributes(attributes), `Page ${filename} is missing attributes.`);
    return {
        slug: filename.replace(/\.md$/, ""),
        title: attributes.title,
        content: renderToString(<ContentComponent />),
    };
}
