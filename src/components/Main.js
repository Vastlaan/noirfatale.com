import React from "react"
import Autumn from "../components/Autumn"
import Mefedron from "../components/Mefedron"
import Lust from "../components/Lust"
import * as styles from "../styles/components/main.module.scss"

function Main() {
  return (
    <div className={styles.page}>
      <Autumn />
      <Mefedron />
      <Lust />
    </div>
  )
}

export default Main
