import React, { useState, useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styles from "../styles/components/main.module.scss"
import {
  TiMediaPlayOutline,
  TiMediaPauseOutline,
  TiMediaStopOutline,
  TiVolume,
} from "react-icons/ti"
import { FiYoutube } from "react-icons/fi"
import { FaSoundcloud } from "react-icons/fa"
import MefedronLake from "../audio/mefedron/Noir Fatale - Mefedron lake.mp3"
import Serenity from "../audio/mefedron/Noir Fatale - Serenity of the raising sun.mp3"
import Anthem from "../audio/mefedron/Noir Fatale - Anthem of ancestors.mp3"
import Farwell from "../audio/mefedron/Noir Fatale - Farewell kiss.mp3"
import Romance from "../audio/mefedron/Noir Fatale - Romance with nature.mp3"

function Mefedron() {
  const audio = useRef()
  const bar = useRef()
  const zip = useRef()
  const volume = useRef()
  const container = useRef()

  const [currentSong, setCurrentSong] = useState(MefedronLake)
  const [displayedName, setDisplayedName] = useState(
    "Noir Fatale - Mefedron lake"
  )

  const play = () => {
    audio.current.play()
  }
  const stop = () => {
    audio.current.pause()
    audio.current.currentTime = 0
  }
  const pause = () => {
    audio.current.pause()
  }
  const displaySongName = song => {
    const band = "Noir Fatale -"
    const name = song.split("-")[1].split("-")[0]
    return setDisplayedName(band + name)
  }
  const changeSong = async song => {
    await setCurrentSong(song)
    displaySongName(song)
    play()
  }
  const adjustVolume = e => {
    let left = container.current.getBoundingClientRect().left.toFixed(0)
    let right = container.current.getBoundingClientRect().right.toFixed(0)
    audio.current.volume = (e.clientX - left) / (right - left)
    const computedVolumeWidth = (audio.current.volume * 100).toFixed(0)
    volume.current.style.width = `${computedVolumeWidth}%`
    volume.current.style.height = `${computedVolumeWidth}%`
  }

  const moveZip = e => {
    const audioDuration = audio.current.duration.toFixed(0)
    let audioCurrentTime = audio.current.currentTime.toFixed(0)
    const barLength = bar.current.getBoundingClientRect()
    let left = barLength.left.toFixed(0)
    let right = barLength.right.toFixed(0)
    let w = right - left
    audioCurrentTime = (((e.clientX - left) * audioDuration) / w).toFixed(0)
    audio.current.currentTime = audioCurrentTime
    let unit = (w / audioDuration).toFixed(0)
    let zipPosition = unit * audioCurrentTime
    zip.current.style.left = `${zipPosition}px`
  }

  useEffect(() => {
    const inter = setInterval(() => {
      const audioDuration = audio.current.duration.toFixed(0)
      const audioCurrentTime = audio.current.currentTime.toFixed(0)
      const barLength = bar.current.getBoundingClientRect()
      const zipCurrentPosition = Number(
        window.getComputedStyle(zip.current).left.split("px")[0]
      )
      let left = barLength.left.toFixed(0)
      let right = barLength.right.toFixed(0)
      let barWidth = right - left

      const zipPosition = (barWidth * audioCurrentTime) / audioDuration
      zip.current.style.left = `${zipPosition.toFixed(0)}px`
    }, 100)

    return () => clearInterval(inter)
  }, [])

  const data = useStaticQuery(graphql`
    {
      backlight: file(relativePath: { eq: "backlight.jpg" }) {
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
    <div className={styles.album}>
      <div className={styles.image}>
        <Image fluid={data.backlight.image.fluid} alt={data.backlight.name} />
      </div>

      <div className={styles.all}>
        <div className={styles.list}>
          <h3>Mefedron Lake</h3>
          <ul>
            {currentSong === MefedronLake ? (
              <li className={styles.highlited}>Noir Fatale - Mefedron lake</li>
            ) : (
              <li onClick={() => changeSong(MefedronLake)}>
                Noir Fatale - Mefedron lake
              </li>
            )}
            {currentSong === Serenity ? (
              <li className={styles.highlited}>
                Noir Fatale - Serenity of the raising sun
              </li>
            ) : (
              <li onClick={() => changeSong(Serenity)}>
                Noir Fatale - Serenity of the raising sun
              </li>
            )}
            {currentSong === Anthem ? (
              <li className={styles.highlited}>
                Noir Fatale - Anthem of ancestors
              </li>
            ) : (
              <li onClick={() => changeSong(Anthem)}>
                Noir Fatale - Anthem of ancestors
              </li>
            )}
            {currentSong === Farwell ? (
              <li className={styles.highlited}>Noir Fatale - Farewell kiss</li>
            ) : (
              <li onClick={() => changeSong(Farwell)}>
                Noir Fatale - Farewell kiss
              </li>
            )}
            {currentSong === Romance ? (
              <li className={styles.highlited}>
                Noir Fatale - Romance with nature
              </li>
            ) : (
              <li onClick={() => changeSong(Romance)}>
                Noir Fatale - Romance with nature
              </li>
            )}
          </ul>
        </div>
        <div className={styles.music}>
          <h4>{displayedName}</h4>
          <div className={styles.buttons}>
            <TiMediaPlayOutline onClick={play} />
            <TiMediaStopOutline onClick={stop} />
            <TiMediaPauseOutline onClick={pause} />
          </div>
          <div className={styles.bar} ref={bar} onClick={e => moveZip(e)}>
            <div ref={zip}></div>
          </div>
          <div className={styles.volume}>
            <TiVolume className={styles.volume__icon} />
            <div
              className={styles.volume__container}
              onClick={e => adjustVolume(e)}
              ref={container}
            >
              <div ref={volume}></div>
            </div>
          </div>
          <div className={styles.icons}>
            <div>
              <p>Listen on Youtube:</p>
              <a href="https://www.youtube.com/channel/UCClsAvUH0nthUDzKpc0sYtg">
                <FiYoutube style={{ color: "red", cursor: "pointer" }} />
              </a>
            </div>
            <div>
              <p>Listen on SoundCloud:</p>
              <a href="https://soundcloud.com/micha-antczak-329856988">
                <FaSoundcloud style={{ color: "orange", cursor: "pointer" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <audio
        ref={audio}
        className={styles.audio}
        src={currentSong}
        type="mp3"
        style={{ opacity: 0 }}
      />
    </div>
  )
}

export default Mefedron
