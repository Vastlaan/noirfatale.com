import React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/components/nav.module.scss"

const Nav = ({ renderMenu }) => {
  return (
    <nav
      style={
        renderMenu
          ? { margin: "35rem 0 2rem 0" }
          : { margin: "13.5rem 0 2rem 0" }
      }
    >
      <ul className={styles.list}>
        <Link fade to="/">
          <li>Music</li>
        </Link>

        <Link fade to="/lyrics">
          <li>Lyrics</li>
        </Link>
        <Link fade to="/about">
          <li>About</li>
        </Link>
        <Link fade to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav
