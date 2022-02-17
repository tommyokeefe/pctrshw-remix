import type { ComponentType } from "react";

import DcNoir, { attributes as DcNoirAttributes, filename as DcNoirFilename } from "~/content/projects/dc-noir.md";
import Fishbowl, { attributes as FishbowlAttributes, filename as FishbowlFilename } from "~/content/projects/fishbowl.md";
import AprilInWinter, { attributes as AprilAttributes, filename as AprilFilename } from "~/content/projects/april-in-winter.md";
import TheConfidentialInformant, { attributes as CIAttributes, filename as CIFilename } from "~/content/projects/the-confidential-informant.md";
import Strays, { attributes as StraysAttributes, filename as StraysFilename } from "~/content/projects/strays.md";
import TheChallengerDisaster, { attributes as TCDAttributes, filename as TCDFilename } from "~/content/projects/the-challenger-disaster.md";
import VHS, { attributes as VHSAttributes, filename as VHSFilename } from "~/content/projects/vhs-2-haxan-segment.md";
import RealityHigh, { attributes as RealityHighAttributes, filename as RealityHighFilename } from "~/content/projects/reality-high.md";
import PurgeElectionYear, { attributes as PurgeAttributes, filename as PurgeFilename } from "~/content/projects/the-purge-election-year.md";
import JeenaIsi, { attributes as JeenaIsiAttributes, filename as JeenaIsiFilename } from "~/content/projects/jeena-isi-ka-naam-hai.md";
import Exists, { attributes as ExistsAttributes, filename as ExistsFilename } from "~/content/projects/exists.md";
import WhiteHouseDown, { attributes as WHDownAttributes, filename as WHDownFilename } from "~/content/projects/white-house-down.md";
import TheEast, { attributes as TheEastAttributes, filename as TheEastFilename } from "~/content/projects/the-east.md";
import Wanderlust, { attributes as WanderlustAttributes, filename as WanderlustFilename } from "~/content/projects/wanderlust.md";
import JEdgar, { attributes as JEAttributes, filename as JEFilename } from "~/content/projects/j-edgar.md";
import LovelyMolly, { attributes as LMAttributes, filename as LMFilename } from "~/content/projects/lovely-molly.md";
import FairGame, { attributes as FairGameAttributes, filename as FairGameFilename } from "~/content/projects/fair-game.md";

export type ProjectMarkdownAttributes = {
    title: string,
    subtitle: string,
    image: string,
    imageAlt: string,
    role: string,
    roleSubtitle: string,
    featured: boolean,
    type: "film" | "television" | "commercial"
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
    { attributes: RealityHighAttributes, filename: RealityHighFilename, ContentComponent: RealityHigh },
    { attributes: PurgeAttributes, filename: PurgeFilename, ContentComponent: PurgeElectionYear },
    { attributes: JeenaIsiAttributes, filename: JeenaIsiFilename, ContentComponent: JeenaIsi },
    { attributes: ExistsAttributes, filename: ExistsFilename, ContentComponent: Exists },
    { attributes: WHDownAttributes, filename: WHDownFilename, ContentComponent: WhiteHouseDown },
    { attributes: TheEastAttributes, filename: TheEastFilename, ContentComponent: TheEast },
    { attributes: WanderlustAttributes, filename: WanderlustFilename, ContentComponent: Wanderlust },
    { attributes: JEAttributes, filename: JEFilename, ContentComponent: JEdgar },
    { attributes: LMAttributes, filename: LMFilename, ContentComponent: LovelyMolly },
    { attributes: FairGameAttributes, filename: FairGameFilename, ContentComponent: FairGame },
];

export default projects;
