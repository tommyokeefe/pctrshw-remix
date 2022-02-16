export default function MainMenu() {
  return (
    <nav className="main-menu">
      <h1 className="main-menu--headline">Pictureshow Productions</h1>
      <ul className="main-menu--links">
        <li className="active">
          <a href="/">Our Work</a>
        </li>
        <li className="">
          <a className="toggle">About</a>
          <ul className="submenu">
            <li className="inactive">
              <a href="/about/kyle-david-crosby">Kyle David Crosby</a>
            </li>
            <li className="inactive">
              <a href="/about/pictureshow">Pictureshow</a>
            </li>
          </ul>
        </li>
        <li className="">
          <a href="/resume">Resume</a>
        </li>
        <li className="">
          <a href="mailto:kdc@pctrshw.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
};