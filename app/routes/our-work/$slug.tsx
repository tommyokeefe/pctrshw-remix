import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import type { ComponentType } from "react"


import { getProjectBySlug } from "~/project";
import type { Project } from "~/project";

export const loader: LoaderFunction = async ({ params }) => {
    return getProjectBySlug(params.slug || '');
};

export default function ProjectSlug() {

    const { title, subtitle, image, imageAlt, role, roleSubtitle, content } = useLoaderData<Project>();
    return (
        <section className="main-content">
            <div className="our-work__single">
                <h1 className="section-title">{title}</h1>
                <h2 className="section-subtitle">{subtitle}</h2>
            </div>
            <div className="our-work__container">
                <div className="our-work__poster">
                    <img src={image} alt={imageAlt} />
                </div>
                <div className="our-work__details">
                    <h2 className="single-project-detail__role">{role}</h2>
                    <h3 className="single-project-detail__subtitle">{roleSubtitle}</h3>
                    {content && (<div className="single-project-detail__content" dangerouslySetInnerHTML={{ __html: content }} />)}
                </div>
            </div>
        </section>
    );
}
