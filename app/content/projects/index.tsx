import type { ComponentType } from "react";

import DcNoir, { attributes as DcNoirAttributes, filename as DcNoirFilename } from "~/content/projects/dc-noir.md";
import Fishbowl, { attributes as FishbowlAttributes, filename as FishbowlFilename } from "~/content/projects/fishbowl.md";
import AprilInWinter, { attributes as AprilAttributes, filename as AprilFilename } from "~/content/projects/april-in-winter.md";
import TheConfidentialInformant, { attributes as CIAttributes, filename as CIFilename } from "~/content/projects/the-confidential-informant.md";
import Strays, { attributes as StraysAttributes, filename as StraysFilename } from "~/content/projects/strays.md";
import TheChallengerDisaster, { attributes as TCDAttributes, filename as TCDFilename } from "~/content/projects/the-challenger-disaster.md";
import VHS, { attributes as VHSAttributes, filename as VHSFilename } from "~/content/projects/vhs-2-haxan-segment.md"

export type ProjectMarkdownAttributes = {
    title: string,
    subtitle: string,
    image: string,
    imageAlt: string,
    role: string,
    roleSubtitle: string,
    featured: boolean,
};

export type ProjectContent = {
    attributes: ProjectMarkdownAttributes,
    filename: string,
    ContentComponent: ComponentType,
};

const projects: ProjectContent[] = [
    { attributes: DcNoirAttributes, filename: DcNoirFilename, ContentComponent: DcNoir },
    { attributes: FishbowlAttributes, filename: FishbowlFilename, ContentComponent: Fishbowl },
    { attributes: AprilAttributes, filename: AprilFilename, ContentComponent: AprilInWinter },
    { attributes: CIAttributes, filename: CIFilename, ContentComponent: TheConfidentialInformant },
    { attributes: StraysAttributes, filename: StraysFilename, ContentComponent: Strays },
    { attributes: TCDAttributes, filename: TCDFilename, ContentComponent: TheChallengerDisaster },
    { attributes: VHSAttributes, filename: VHSFilename, ContentComponent: VHS },
];

export default projects;
