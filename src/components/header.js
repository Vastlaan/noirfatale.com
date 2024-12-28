import React from "react"
import { graphql, useStaticQuery, Link, Image } from "gatsby"
import { RiMenu4Line } from "react-icons/ri"
import * as styles from "../styles/components/header.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"

const Header = ({ siteTitle, renderMenu, setRenderMenu }) => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "moth.png" }) {
        name
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <header className={styles.header}>
      <Link fade to="/" className={styles.header__logo}>
        <GatsbyImage fluid={data.logo.image.fluid} alt={data.logo.name} />
      </Link>
      <div className={styles.header__name}>
        <h1>Noir Fatale</h1>
      </div>
      <div className={styles.header__buttons}>
        <button
          onClick={() => setRenderMenu(prevState => !prevState)}
          style={renderMenu ? { transform: "rotate(90deg)" } : null}
        >
          <RiMenu4Line />
        </button>
      </div>
      <div className={styles.header__sub}>
        <h2>Dark Electronics</h2>
      </div>

      <div
        className={styles.menu}
        style={renderMenu ? { height: "35rem" } : { height: "0rem" }}
      >
        <ul>
          <li>
            <Link fade to="/" className={styles.header__logo}>
              Music
            </Link>
          </li>
          <li>
            <Link fade to="/lyrics" className={styles.header__logo}>
              Lyrics
            </Link>
          </li>
          <li>
            <Link fade to="/contact" className={styles.header__logo}>
              Contact
            </Link>
          </li>
          <li>
            <Link fade to="/about" className={styles.header__logo}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
