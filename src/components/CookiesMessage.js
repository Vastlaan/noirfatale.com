import React from "react"
import * as styles from "../styles/components/cookies.module.scss"

function CookiesMessage({ setDisplayCookies }) {
  return (
    <div className={styles.cookies}>
      <p>
        This website uses cookies to deliver best user experience. By visiting
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
        Agree
      </button>
    </div>
  )
}

export default CookiesMessage
