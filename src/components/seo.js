import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            robots
            image
            canonicalUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaKeywords = site.siteMetadata.keywords
  const metaSiteUrl = site.siteMetadata.siteUrl
  const metaRobots = site.siteMetadata.robots
  const metaImage = site.siteMetadata.image
  const metaCanonicalUrl = site.siteMetadata.canonicalUrl
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  )
}

export default Seo
