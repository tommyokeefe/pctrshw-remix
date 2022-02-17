import { Outlet } from "remix";

export default function OurWork() {
    return (
        <section className="main-content">
            <Outlet />
        </section>
    );
};