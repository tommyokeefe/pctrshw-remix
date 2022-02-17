import { useState, useEffect, useRef } from "react";
import type { MutableRefObject } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
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
  return { title: "Pictureshow" };
};

export default function App() {
  const [isMenuOpen, toggleMenu] = useState(false);
  const ref = useRef<HTMLDivElement>();

  clickOutsideMenuHandler(ref, () => toggleMenu(false));

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="container" className={isMenuOpen ? 'menu-open' : ''} >
          <MainMenu menuRef={ref} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <div className="pusher">
            <div className="content-container">
              <div className="content-container--inner">
                <Header logo={logo} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
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

export function ErrorBoundary({ error }: any) {
  console.error(error);
  const [isMenuOpen, toggleMenu] = useState(false);
  const ref = useRef<HTMLDivElement>();

  clickOutsideMenuHandler(ref, () => toggleMenu(false));
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div id="container" className={isMenuOpen ? 'menu-open' : ''} >
          <MainMenu menuRef={ref} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <div className="pusher">
            <div className="content-container">
              <div className="content-container--inner">
                <Header logo={logo} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
                <section className="main-content">
                  <h1>Something went wrong!</h1>
                </section>
              </div>
            </div>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const [isMenuOpen, toggleMenu] = useState(false);
  const ref = useRef<HTMLDivElement>();

  clickOutsideMenuHandler(ref, () => toggleMenu(false));
  const caught = useCatch();
  console.log(caught);
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div id="container" className={isMenuOpen ? 'menu-open' : ''} >
          <MainMenu menuRef={ref} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <div className="pusher">
            <div className="content-container">
              <div className="content-container--inner">
                <Header logo={logo} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
                <section className="main-content">
                  {caught.data ?
                    (<div className="error-content">
                      <h1>{caught.status} {caught.statusText}</h1>
                      <p>Oops! Looks like we couldn't find what you were looking for. No content available for:</p>
                      <pre>pctrshw.com{caught.data}</pre>
                    </div>)
                    :
                    (<div className="error-content">
                      <h1>{caught.status} {caught.statusText}</h1>
                      <p>Oops! Looks like we couldn't find what you were looking for.</p>
                    </div>)
                  }
                </section>
              </div>
            </div>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}

const clickOutsideMenuHandler = (ref: MutableRefObject<HTMLDivElement | undefined>, handler: () => void) => {
  useEffect(
    () => {
      const listener = (event: Event) => {
        const target = event.target as Element
        if (!ref.current || ref.current.contains(target)) {
          return;
        }

        handler();
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler]
  );
}
