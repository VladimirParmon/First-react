import './header.scss';
import { CustomSwitch } from '../utils/customSwitch';
import { useState } from 'react';
import { Themes } from '../../models/enums';

export function Header() {
  const [headerTheme, setHeaderTheme] = useState(Themes.BLUE)

  function handleSwitch(event: React.ChangeEvent<HTMLInputElement>): void {
    event.target.checked ? setHeaderTheme(Themes.BLUE) : setHeaderTheme(Themes.RED);
  }

  return (
    <header className={"header" + ' ' + headerTheme}>
      <span className="header__logo">First app!</span>
      <span className="header__spacer"></span>
      <CustomSwitch sx={{ m: 1 }} defaultChecked onChange={(event) => handleSwitch(event)}/>
    </header>
  )
}