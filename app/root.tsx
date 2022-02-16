import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";

import styles from "~/styles/global.css";
import logo from "~/images/pctrshw.png";
import MainMenu from "~/components/main-menu";
import Header from "~/components/header";
import Footer from "~/components/footer"

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => {
  return { title: "PICTURESHOW" };
};

export default function App() {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="container">
          <MainMenu />
          <div className="pusher">
            <div className="content-container">
              <div className="content-container--inner">
                <Header logo={logo} />
                <Outlet />
                <Footer />
                <ScrollRestoration />
                <Scripts />
              </div>
            </div>
          </div>
        </div>
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
