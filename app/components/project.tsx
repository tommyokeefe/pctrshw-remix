import { useState } from 'react';
import { Link } from "remix";

import type { Project } from "~/project";

export default function Project({ title, subtitle, image, imageAlt, role, roleSubtitle, slug }: Project) {
    const [active, toggleActive] = useState(false);
    return (
        <div className="project">
            <h3 className="project__title">{title}</h3>
            <div
                className={`project__container ${active ? 'active' : ''}`}
                onMouseEnter={() => toggleActive(true)}
                onMouseLeave={() => toggleActive(false)}
                onTouchEnd={() => toggleActive(!active)}>
                <img className="project__image" src={image} alt={imageAlt} />
                <div className="project__overlay">
                    <div className="project__overlay--wrapper">
                        <h3 className="project__overlay--role">{role}</h3>
                        <h4 className="project__overlay--subtitle">{roleSubtitle}</h4>
                        <h3 className="project__overlay--title">{title}</h3>
                        <h4 className="project__overlay--subtitle">{subtitle}</h4>
                        <Link className="project__overlay--link" to={`/our-work/${slug}`} reloadDocument={true}>More Info</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}