import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import CookiesMessage from "../components/CookiesMessage"

import "../styles/main.module.scss"

const Layout = ({ children }) => {
  const [displayCookies, setDisplayCookies] = useState(true)
  const [renderMenu, setRenderMenu] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("noirfatalecookiepolicy")) {
      const cookiePolicy = JSON.parse(
        localStorage.getItem("noirfatalecookiepolicy")
      )

      if (cookiePolicy.agreed) {
        setDisplayCookies(false)
      }
    }
  }, [])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        renderMenu={renderMenu}
        setRenderMenu={setRenderMenu}
      />
      <Nav renderMenu={renderMenu} />
      {children}
      <Footer />
      {displayCookies ? (
        <CookiesMessage setDisplayCookies={setDisplayCookies} />
      ) : null}
    </>
  )
}
export default Layout
