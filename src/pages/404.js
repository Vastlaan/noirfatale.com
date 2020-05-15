import React from "react"
import styles from "../styles/pages/error.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <main className={styles.error}>
      <h1 style={{ textAlign: "center" }}>ERROR: 404</h1>
      <h1>PAGE NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </main>
  </Layout>
)

export default NotFoundPage
