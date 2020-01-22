import { Link } from "gatsby"
import React from "react"

import styles from "./header.module.scss"
import logoSrc from "../../images/logo.svg"

const Header = () => (
  <>
    <header
      className={styles.header}
    >
      <Link to="/" className={styles.logo}>
        <img src={logoSrc} alt="logo" />
      </Link>
      <nav>
        <Link to="/become-a-partner">Become a partner</Link>
        {" "}
        <Link to="/become-a-speaker">Become a speaker</Link>
      </nav>
    </header>
    <div className={styles.headerCompensator}></div>
  </>
)

export default Header
