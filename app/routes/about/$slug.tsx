import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";


import { getAboutBySlug } from "~/about";
import type { About } from "~/about";
import banner from "~/images/pictureshowHero.jpg";
import Hero from "~/components/hero";

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.slug, "expected params.slug");
    return getAboutBySlug(params.slug);
};

export default function aboutPage() {
    const { title, content } = useLoaderData<About>();
    return (
        < section className="main-content">
            <Hero heroImage={banner} />
            <div className="about">
                <h1 className="section-title">{title}</h1>
                {content && <div className="about__body" dangerouslySetInnerHTML={{ __html: content }} />}
            </div>
        </section>
    );
}