import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'

import c from 'classnames'
import menuStyles from './theme-menu.module.scss'

const handleMenuChange = e => {
  setTheme(e.target.value)
}

const ThemeSelectRadio = ({ themeOption }) => (
  <input type="radio" name="theme-select" value={themeOption} checked={theme === themeOption} onChange={handleMenuChange} />
)

const ThemeMenuOption = ({ theme, label }) => (
  <div>
    <label>
      <ThemeSelectRadio themeOption={theme} />
      <span>{label}</span>
    </label>
  </div>
)

const ThemeMenu = ({ setThemeMenuOpen, setTheme }) => (
  <div className={c([
    menuStyles.themeMenuWrapper,
    (themeMenuOpen && menuStyles.menuOpen)
    ])}>
    <button className={c([
      menuStyles.button
    ])} onClick={e => setThemeMenuOpen(!themeMenuOpen)}>
      <FontAwesomeIcon icon={faAdjust} />
    </button>
    {themeMenuOpen && <div className={menuStyles.themeMenu}>
      <ThemeMenuOption theme="system" label="Use system theme" />
      <ThemeMenuOption theme="light"  label="Light theme" />
      <ThemeMenuOption theme="dark"  label="Dark theme" />
    </div>}
  </div>
)

export default ThemeMenu