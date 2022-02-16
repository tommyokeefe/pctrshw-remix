type Props = {
  logo: string
}

export default function Header({ logo }: Props) {
  return (
    <header className="header">
      <a href="/" className="header--logo-link">
        <img src={logo} className="header--logo-image" />
      </a>
      <div className="header--nav-toggle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}