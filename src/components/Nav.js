import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../styles/components/nav.module.scss"

const Nav = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <AniLink fade to="/">
          <li>Music</li>
        </AniLink>

        <AniLink fade to="/lyrics">
          <li>Lyrics</li>
        </AniLink>
        <AniLink fade to="/about">
          <li>About</li>
        </AniLink>
        <AniLink fade to="/contact">
          <li>Contact</li>
        </AniLink>
      </ul>
    </nav>
  )
}

export default Nav
