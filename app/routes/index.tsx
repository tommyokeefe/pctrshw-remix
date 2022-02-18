import banner from '~/images/pictureshowHero.jpg';
import Hero from '~/components/hero';
import { getFeaturedProjects } from '~/project';
import type { Project as ProjectProps } from '~/project';
import { useLoaderData } from 'remix';
import Project from '~/components/project';

export const loader = () => {
  return getFeaturedProjects();
};

export default function Index() {
  const projects = useLoaderData<ProjectProps[]>();

  return (
    <section className='main-content'>
      <Hero heroImage={banner} />
      <div className='our-work'>
        <h1 className='section-title'>Our Work</h1>
        <div className='films'>
          <div className='films_container'>
            {projects.map((project) => (
              <Project {...project} key={project.slug} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
