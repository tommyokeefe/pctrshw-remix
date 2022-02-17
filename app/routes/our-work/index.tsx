import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

import banner from "~/images/pictureshowHero.jpg";
import Hero from "~/components/hero";
import Project from "~/components/project";
import { getAllProjectsSortedByType } from "~/project";
import type { Project as ProjectProps } from "~/project";

type ProjectsByType = {
  filmProjects: ProjectProps[],
  televisionProjects: ProjectProps[],
  commercialProjects: ProjectProps[],
}

export const loader: LoaderFunction = async () => {
  return getAllProjectsSortedByType();
};

export default function OurWork() {
  const { filmProjects, televisionProjects, commercialProjects } = useLoaderData<ProjectsByType>();
  return (
    <>
      <Hero heroImage={banner} />
      <div className="our-work">
        <h1 className="section-title">Resume</h1>
        <div className="about">
          <div className="about__body">
            <p>Below is a sampling&nbsp;of the projects that Kyle David Crosby has done over the course of his career. Roll over for title and brief description.</p>
          </div>
        </div>
        <div className="films">
          <h2>Films</h2>
          <div className="films_container">
            {filmProjects.map(project => (
              <Project {...project} key={project.slug} />
            ))}
          </div>
        </div>
        <div className="television">
          <h2>Television Shows</h2>
          <div className="television__container">
            {televisionProjects.map(project => (
              <Project {...project} key={project.slug} />
            ))}
          </div>
        </div>
        <div className="other">
          <h2>Commercials</h2>
          <div className="other_container">
            {commercialProjects.map(project => (
              <Project {...project} key={project.slug} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
