import { useState } from 'react';
import type {
  Dispatch,
  MouseEvent,
  MutableRefObject,
  LegacyRef,
  SetStateAction,
  TouchEvent,
} from 'react';
import { NavLink } from 'remix';

type MainMenuProps = {
  menuRef: MutableRefObject<HTMLDivElement | undefined>;
  isMenuOpen: boolean;
  toggleMenu: Dispatch<SetStateAction<boolean>>;
};

export default function MainMenu({
  menuRef,
  isMenuOpen,
  toggleMenu,
}: MainMenuProps) {
  const [isAboutOpen, toggleAbout] = useState(false);
  const [isAboutActive, toggleAboutActive] = useState(false);
  const aboutClickHandler = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    toggleAbout(!isAboutOpen);
  };
  const nonAboutNavClickHandler = () => {
    toggleMenu(false);
    toggleAboutActive(false);
  };
  const aboutNavClickHandler = () => {
    toggleMenu(false);
    toggleAboutActive(true);
  };
  const activeClassName = 'active';
  return (
    <nav
      className='main-menu'
      ref={isMenuOpen ? (menuRef as LegacyRef<HTMLDivElement>) : undefined}
    >
      <h1 className='main-menu--headline'>Pictureshow Productions</h1>
      <ul className='main-menu--links'>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? activeClassName : '')}
            onClick={nonAboutNavClickHandler}
          >
            Our Work
          </NavLink>
        </li>
        <li>
          <a
            href=''
            className={`toggle ${isAboutActive && 'active'}`}
            onClick={aboutClickHandler}
            onTouchStart={aboutClickHandler}
          >
            About
          </a>
          <ul className={isAboutOpen ? 'submenu' : 'submenu-hidden'}>
            <li>
              <NavLink
                to='/about/kyle-david-crosby'
                className={({ isActive }) => (isActive ? activeClassName : '')}
                onClick={aboutNavClickHandler}
                prefetch='intent'
              >
                Kyle David Crosby
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about/pictureshow'
                className={({ isActive }) => (isActive ? activeClassName : '')}
                onClick={aboutNavClickHandler}
                prefetch='intent'
              >
                Pictureshow
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to='/our-work'
            className={({ isActive }) => (isActive ? activeClassName : '')}
            onClick={nonAboutNavClickHandler}
            prefetch='intent'
          >
            Resume
          </NavLink>
        </li>
        <li>
          <a href='mailto:kdc@pctrshw.com'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
