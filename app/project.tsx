import { renderToString } from "react-dom/server";
import projects from "~/content/projects"
import type { ProjectMarkdownAttributes } from "~/content/projects";

export type Project = ProjectMarkdownAttributes & { slug: string, content?: string }

export function getFeaturedProjects() {
    const featuredProjects = projects.filter(project => project.attributes.featured)
    return featuredProjects.map(({ attributes, filename }) => ({
        slug: filename.replace(/\.md$/, ""),
        title: attributes.title,
        subtitle: attributes.subtitle,
        image: attributes.image,
        role: attributes.role,
        roleSubtitle: attributes.roleSubtitle,
        link: attributes.link,
        featured: attributes.featured,
    }));
}

export function getProjectBySlug(slug: string) {
    const project = projects.find(project => project.filename.replace(/\.md$/, "") === slug);
    if (!project) {
        throw new Response("no matching project slug");
    }
    const { attributes, filename, ContentComponent } = project;
    return {
        slug: filename.replace(/\.md$/, ""),
        title: attributes.title,
        subtitle: attributes.subtitle,
        image: attributes.image,
        role: attributes.role,
        roleSubtitle: attributes.roleSubtitle,
        link: attributes.link,
        featured: attributes.featured,
        content: renderToString(<ContentComponent />),
    };
}
