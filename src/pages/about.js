import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/pages/about.module.scss"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FiYoutube } from "react-icons/fi"
import { FaSoundcloud } from "react-icons/fa"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      me: file(relativePath: { eq: "me.jpg" }) {
        name
        image: childImageSharp {
          fluid(grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      me2: file(relativePath: { eq: "noirfatale.jpg" }) {
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
    <Layout>
      <SEO title="About" />
      <main>
        <article className={styles.page}>
          <div className={styles.description}>
            <p>
              <strong>Noir Fatale</strong> is the dark electronic music project
              founded by Michal Antczak in the year 2015. The name has its
              origin in 'retro-noir' mood present the most in the early
              productions and catastrophic, depressive ambience. The project
              experiments with wide range electronic sounds trying to reflect
              nostalgic, anxious, deep emotional or just dark atmosphere.
            </p>
            <p>
              As none of the production contains its vocal track, some of them
              have been written with lyrics. Those lyrics you will find in the
              section{" "}
              <AniLink fade to="/lyrics">
                Lyrics
              </AniLink>{" "}
              of this website.
            </p>
            <p></p>
          </div>
          <div className={styles.newImage}>
            <Image fluid={data.me2.image.fluid} name={data.me2.name} />
          </div>
          <div className={styles.social}>
            <h2>Find Noir Fatale</h2>
            <div>
              <h3>On Youtube</h3>
              <a href="https://www.youtube.com/channel/UCClsAvUH0nthUDzKpc0sYtg">
                <FiYoutube style={{ color: "red", fontSize: "10rem" }} />
              </a>
            </div>
            <div>
              <h3>On Soundcloud</h3>
              <a href="https://soundcloud.com/micha-antczak-329856988">
                <FaSoundcloud style={{ color: "orange", fontSize: "10rem" }} />
              </a>
            </div>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export default About
