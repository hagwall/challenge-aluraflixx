

import styles from "./ContentBanner.module.css"

function ContentBanner({titulo,
    categoria,
    imagen,
    video,
    descripcion}){
    return (
        <section className={styles.container}>
        <div className={styles.container_descripcion}>
            <h1>BIENVENIDO A ALURAFLIX, DISFRUTA LOS VIDEOS Y APRENDE</h1>
            
        </div>
        <div className={styles.video}>
                <div className={styles.video_datos}>
                <a href={video="https://www.youtube.com/embed/lKaXteKYbSA"} target="_blank" rel="noopener noreferrer">
                <img src={imagen="https://github.com/JeanmarieAluraLatam.png"} alt={titulo}/>
                </a>
                    <h3>{titulo="Consejos para crear tu Portfolio"}</h3>
                    <p>{descripcion="En este video la instructora Jeanmarie Quijada, te enseñara varios tips esenciales para diseñar y construir un portfolio que muestre tus habilidades y proyectos de manera profesional."}</p>
        
      </div>
        </div>
        </section>
    )
}

export default ContentBanner