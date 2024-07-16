import { Link } from "react-router-dom"
import styles from "./Cabecera.module.css"
import logo from "./logo.png"
import CabeceraLink from "../CabeceraLink"

function Cabecera(){
    return (
        <header className={styles.cabecera}>
            <Link to="/">
              <section className={styles.logoContainer}>
                <img src={logo} alt="logo-aluraflix"/>
              </section>
            </Link>
            <nav>
                <CabeceraLink url="./">
                    HOME
                </CabeceraLink>
                <CabeceraLink url="./NuevoVideo">
                    NUEVO VIDEO
                </CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera