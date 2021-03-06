import type { Dispatch, SetStateAction } from 'react';
import { Link } from 'remix';

type HeaderProps = {
  logo: string;
  toggleMenu: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
};

export default function Header({ logo, toggleMenu, isMenuOpen }: HeaderProps) {
  const onClickHandler = () => toggleMenu(!isMenuOpen);
  return (
    <header className='header'>
      <Link to='/' className='header--logo-link'>
        <img src={logo} className='header--logo-image' />
      </Link>
      <div
        className='header--nav-toggle'
        onClick={onClickHandler}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
