import styles from "./Pie.module.css"
import img from "./logo.png"

function Pie(){
    return(
        <footer className={styles.container}>
            <img src={img}></img>
        </footer>
    )
}

export default Pie