import { Outlet } from "remix";

export default function About() {
    return (
        <section className="main-content">
            <Outlet />
        </section>
    );
};