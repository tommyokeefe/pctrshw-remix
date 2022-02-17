import { renderToString } from "react-dom/server";
import invariant from "tiny-invariant";

import projects from "~/content/projects"
import type { ProjectMarkdownAttributes } from "~/content/projects";

export type Project = ProjectMarkdownAttributes & { slug: string, content?: string }

function hasValidPostAttributes(attributes: any): attributes is ProjectMarkdownAttributes {
    return (
        attributes?.title &&
        attributes?.subtitle &&
        attributes?.image &&
        attributes?.imageAlt &&
        attributes?.role &&
        attributes?.roleSubtitle &&
        attributes?.type
    );
}

export function getFeaturedProjects() {
    const featuredProjects = projects.filter(project => project.attributes.featured)
    return featuredProjects.map(({ attributes, filename }) => {
        invariant(hasValidPostAttributes(attributes), `Project ${filename} is missing attributes`);
        return {
            slug: filename.replace(/\.md$/, ""),
            title: attributes.title,
            subtitle: attributes.subtitle,
            image: attributes.image,
            role: attributes.role,
            roleSubtitle: attributes.roleSubtitle,
            type: attributes.type,
            featured: attributes.featured,
        };
    });
}

export function getProjectBySlug(slug: string) {
    const project = projects.find(project => project.filename.replace(/\.md$/, "") === slug);
    if (!project) {
        throw new Error("no matching project slug");
    }
    const { attributes, filename, ContentComponent } = project;
    invariant(hasValidPostAttributes(attributes), `Project ${filename} is missing attributes`);
    return {
        slug: filename.replace(/\.md$/, ""),
        title: attributes.title,
        subtitle: attributes.subtitle,
        image: attributes.image,
        role: attributes.role,
        roleSubtitle: attributes.roleSubtitle,
        type: attributes.type,
        featured: attributes.featured,
        content: renderToString(<ContentComponent />),
    };
}

export function getAllProjectsSortedByType() {
    const formattedProjects = projects.map(({ attributes, filename }) => {
        invariant(hasValidPostAttributes(attributes), `Project ${filename} is missing attributes`);
        return {
            slug: filename.replace(/\.md$/, ""),
            title: attributes.title,
            subtitle: attributes.subtitle,
            image: attributes.image,
            role: attributes.role,
            roleSubtitle: attributes.roleSubtitle,
            type: attributes.type,
            featured: attributes.featured,
        };
    });

    const filmProjects = formattedProjects.filter(({ type }) => type === "film");
    const televisionProjects = formattedProjects.filter(({ type }) => type === "television");
    const commercialProjects = formattedProjects.filter(({ type }) => type === "commercial");

    return { filmProjects, televisionProjects, commercialProjects };
}
