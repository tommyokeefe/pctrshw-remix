import { useState } from "react";
import type { MouseEvent, MutableRefObject, LegacyRef, TouchEvent } from "react";
import { Link } from "remix";

type MainMenuProps = {
  menuRef: MutableRefObject<HTMLDivElement | undefined>,
  isMenuOpen: boolean,
};

export default function MainMenu({ menuRef, isMenuOpen }: MainMenuProps) {
  const [isAboutOpen, toggleAbout] = useState(false);
  const aboutClickHandler = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    toggleAbout(!isAboutOpen)
  };
  return (
    <nav className="main-menu" ref={isMenuOpen ? menuRef as LegacyRef<HTMLDivElement> : undefined}>
      <h1 className="main-menu--headline">Pictureshow Productions</h1>
      <ul className="main-menu--links">
        <li className="active">
          <Link to="/">Our Work</Link>
        </li>
        <li className="">
          <a href="" className="toggle" onClick={aboutClickHandler} onTouchStart={aboutClickHandler}>About</a>
          <ul className={isAboutOpen ? 'submenu' : 'submenu-hidden'}>
            <li className="inactive">
              <Link to="/about/kyle-david-crosby">Kyle David Crosby</Link>
            </li>
            <li className="inactive">
              <Link to="/about/pictureshow">Pictureshow</Link>
            </li>
          </ul>
        </li>
        <li className="">
          <Link to="/resume">Resume</Link>
        </li>
        <li className="">
          <a href="mailto:kdc@pctrshw.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
};