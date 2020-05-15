import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../styles/components/footer.module.scss"

function Footer() {
  return (
    <footer className={styles.page}>
      <ul>
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
        <AniLink fade to="/cookies">
          <li>Cookies</li>
        </AniLink>
      </ul>
      <div>
        <p>
          &copy; {new Date().getFullYear()} This website has been designed and
          made by <a href="https://www.michalantczak.com">Michał Antczak</a>.
          All rights reserved.
        </p>
        <p>
          The music has been created by{" "}
          <a href="https://www.michalantczak.com">Michał Antczak</a> appearing
          here under a nickname Noir Fatale. It is ALLOWED to copy and share
          this music. It is NOT ALLOWED to make profits without agreement or
          claim an ownership over this music.
        </p>
      </div>
    </footer>
  )
}

export default Footer
