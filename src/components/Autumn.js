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
import Autumn from "../audio/autumn/Noir Fatale - Autumn.mp3"
import BornToDie from "../audio/autumn/Noir Fatale - Born to die.mp3"
import Radion from "../audio/autumn/Noir Fatale - Radion.mp3"
import TenderSuicide from "../audio/autumn/Noir Fatale - Tender suicide.mp3"
import TheBeautyOfItAll from "../audio/autumn/Noir Fatale - The beauty of it all.mp3"

function AutumnAlbum() {
  const audio = useRef()
  const bar = useRef()
  const zip = useRef()
  const volume = useRef()
  const container = useRef()

  const [currentSong, setCurrentSong] = useState(Autumn)
  const [displayedName, setDisplayedName] = useState("Noir Fatale - Autumn")

  const play = () => {
    const allAudio = document.querySelectorAll("audio")
    allAudio.forEach(a => a.pause())
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
      angel: file(relativePath: { eq: "autumn.jpg" }) {
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
        <Image fluid={data.angel.image.fluid} alt={data.angel.name} />
      </div>

      <div className={styles.all}>
        <div className={styles.list}>
          <h3> Autumn</h3>
          <ul>
            {currentSong === Autumn ? (
              <li className={styles.highlited}>Noir Fatale - Autumn</li>
            ) : (
              <li
                onClick={() => changeSong(Autumn)}
                role="button"
                onKeyDown={e => (e.keyCode === 13 ? changeSong(Autumn) : null)}
              >
                Noir Fatale - Autumn
              </li>
            )}
            {currentSong === BornToDie ? (
              <li className={styles.highlited}>Noir Fatale - Born to Die</li>
            ) : (
              <li
                onClick={() => changeSong(BornToDie)}
                role="button"
                onKeyDown={e =>
                  e.keyCode === 13 ? changeSong(BornToDie) : null
                }
              >
                Noir Fatale - Born to Die
              </li>
            )}
            {currentSong === TenderSuicide ? (
              <li className={styles.highlited}>Noir Fatale - Tender Suicide</li>
            ) : (
              <li
                onClick={() => changeSong(TenderSuicide)}
                role="button"
                onKeyDown={e =>
                  e.keyCode === 13 ? changeSong(TenderSuicide) : null
                }
              >
                Noir Fatale - Tender Suicide
              </li>
            )}
            {currentSong === TheBeautyOfItAll ? (
              <li className={styles.highlited}>
                Noir Fatale - The beauty of it all
              </li>
            ) : (
              <li
                onClick={() => changeSong(TheBeautyOfItAll)}
                role="button"
                onKeyDown={e =>
                  e.keyCode === 13 ? changeSong(TheBeautyOfItAll) : null
                }
              >
                Noir Fatale - The beauty of it all
              </li>
            )}
            {currentSong === Radion ? (
              <li className={styles.highlited}>Noir Fatale - Radion</li>
            ) : (
              <li
                onClick={() => changeSong(Radion)}
                role="button"
                onKeyDown={e => (e.keyCode === 13 ? changeSong(Radion) : null)}
              >
                Noir Fatale - Radion
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
          <div
            className={styles.bar}
            ref={bar}
            role="button"
            onClick={e => moveZip(e)}
          >
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

export default AutumnAlbum
