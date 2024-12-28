import React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/components/footer.module.scss"

function Footer() {
  return (
    <footer className={styles.page}>
      <ul>
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
        <Link fade to="/cookies">
          <li>Cookies</li>
        </Link>
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
