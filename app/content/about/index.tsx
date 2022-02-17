import type { ComponentType } from "react";

import KyleDavidCrosby, { attributes as KDCAttributes, filename as KDCFilename } from "~/content/about/kyle-david-crosby.md";
import Pictureshow, { attributes as PictureshowAttributes, filename as PictureshowFilename } from "~/content/about/pictureshow.md";

export type AboutMarkdownAttributes = {
    title: string,
};

export type AboutContent = {
    attributes: AboutMarkdownAttributes,
    filename: string,
    ContentComponent: ComponentType,
};

const aboutContent: AboutContent[] = [
    { attributes: KDCAttributes, filename: KDCFilename, ContentComponent: KyleDavidCrosby },
    { attributes: PictureshowAttributes, filename: PictureshowFilename, ContentComponent: Pictureshow },
];

export default aboutContent;
