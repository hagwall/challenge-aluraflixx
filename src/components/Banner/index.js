import ContentBanner from "../ContentBanner"
import styles from "./Banner.module.css"


function Banner({img, color}){


    return(
        <div className={styles.capa} style={{backgroundImage:`url("/img/banner-${img}.jpeg")`}}>
            <div className={styles.gradient} style={{background:`${color}`}}>
            <ContentBanner className={styles.contenido}></ContentBanner>
            </div>
            
        </div>
    )
}

export default Banner