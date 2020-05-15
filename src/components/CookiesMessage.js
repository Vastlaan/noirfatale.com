import React from "react"
import styles from "../styles/components/cookies.module.scss"

function CookiesMessage({ setDisplayCookies }) {
  return (
    <div className={styles.cookies}>
      <p>
        This website uses cookies to deliver best user experience.Cookies do not
        cause any harm to your computer and do not contain viruses. By visiting
        this website you agree to our cookies policy.
        <a href="/cookies"> Here you will find more information</a>
      </p>
      <button
        onClick={() => {
          const cookieMessage = { agreed: true }
          localStorage.setItem(
            "noirfatalecookiepolicy",
            JSON.stringify(cookieMessage)
          )
          setDisplayCookies(false)
        }}
      >
        Ok, Prima!
      </button>
    </div>
  )
}

export default CookiesMessage
