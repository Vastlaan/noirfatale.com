import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/pages/contact.module.scss"
import { MdCall, MdMailOutline } from "react-icons/md"
import { AiOutlineGlobal } from "react-icons/ai"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <main>
        <h1 className={styles.header}>Contact</h1>
        <p className={styles.info}>
          If you have any questions or you want to begin collaboration with Noir
          Fatale, choose one of the options below.
        </p>
        <div className={styles.contact}>
          <h3>Make a call</h3>
          <div>
            <MdCall />
            <a href="tel:0031682307051">(+31) (0) 682 307 051</a>
          </div>
        </div>
        <div className={styles.contact}>
          <h3>Send an email</h3>
          <div>
            <MdMailOutline />
            <a href="mailto:info@michalantczak.com">info@michalantczak.com</a>
          </div>
        </div>
        <div className={styles.contact}>
          <h3>Via author's Website</h3>
          <div>
            <AiOutlineGlobal />
            <a href="https://www.michalantczak.com">www.michalantczak.com</a>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Contact
