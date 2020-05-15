import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { RiMenu4Line } from "react-icons/ri"
import styles from "../styles/components/header.module.scss"

const Header = ({ siteTitle }) => {
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
        <a href="mailto:info@michalantczak.com">
          <RiMenu4Line />
        </a>
      </div>
      <div className={styles.header__sub}>
        <h2>Dark Electronics</h2>
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
