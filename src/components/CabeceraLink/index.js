import { Link } from "react-router-dom"
import styles from "./CabeceraLink.module.css"

function CabeceraLink({url, children}){

    return (
        <div className={styles.container}>
        <Link to={url} className={styles.link}>
            {children}
        </Link>
        </div>
    )
}

export default CabeceraLink