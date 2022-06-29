import './header.scss';

export function Header() {
  return (
    <header className="header">
      <span className="header__logo">First app!</span>
      <span className="header__spacer"></span>
      <button className="header__button">Add</button>
    </header>
  )
}