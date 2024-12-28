import React from "react"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import * as styles from "../styles/pages/lyrics.module.scss"

function Lyrics() {
  return (
    <Layout>
      <Seo title="Lyrics" />
      <main>
        <h1 className={styles.header}>Lyrics</h1>
        <div className={styles.volume}>
          <div className={styles.text}>
            <p>
              I've found myself at the lonely alley
              <br />
              In the shine of the moon
              <br />
              At the wind-blow solos
              <br />
              Where future took the wrong turn
              <br />
              Covered with the dust of guilt
              <br />
              Drown in the puke of sorrows
              <br />
              With things which haven't been done
              <br />
              The hopes lost forever.
              <br />
              Dying slowly, every day, closer...
            </p>
          </div>
          <div className={styles.text}>
            <p>
              W spazmach tęsknoty wyję do nieba
              <br />
              za światem którego nie ma.
              <br />
              Dławię w sobie niespełnione pragnienia,
              <br />
              a rozpacz pustką rozbrzmiewa.
              <br />
              W bezkresie cierni i w krwi pomylenia,
              <br />
              toksyczność świata beznamiętnością zabija.
              <br />
              I czuję jak myśli i ciało zabiera
              <br />
              tęsknota za życiem, co we mnie umiera.
            </p>
          </div>
          <div className={styles.text}>
            <p>
              Palcami otwieram rany na ciele,
              <br />
              by wydać kaleki skowyt rozpaczy.
              <br />
              A gęsty łój sączy się z mych gruczołów
              <br />
              dławiąc wonią ekskrementów.
              <br />
              Rak miłości toczy moje ciało..
              <br />
              Każda sekunda istnienia mojego
              <br />
              nasiąknięta jest krwią marzenia o Tobie.
              <br />
              Czuję jak życie dorodne i młode,
              <br />
              zmienia się w ścierwo rozdeptywane.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Lyrics
