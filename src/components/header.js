import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { RiMenu4Line } from "react-icons/ri"
import styles from "../styles/components/header.module.scss"

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
      <AniLink fade to="/" className={styles.header__logo}>
        <Image fluid={data.logo.image.fluid} alt={data.logo.name} />
      </AniLink>
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
            <AniLink fade to="/" className={styles.header__logo}>
              Music
            </AniLink>
          </li>
          <li>
            <AniLink fade to="/lyrics" className={styles.header__logo}>
              Lyrics
            </AniLink>
          </li>
          <li>
            <AniLink fade to="/contact" className={styles.header__logo}>
              Contact
            </AniLink>
          </li>
          <li>
            <AniLink fade to="/about" className={styles.header__logo}>
              About
            </AniLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
