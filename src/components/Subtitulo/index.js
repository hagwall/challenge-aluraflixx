import styles from "./Subtitulo.module.css"

function Subtitulo(props){


    const {colorfondo} = props

    // const colorFondo = {
    //     backgroundColor: colofondo
    // }
    // const colorfondo ={
    //     backgroundColor: props.datos.colorcard
    // }
    return (
        <div className={styles.texto} style={colorfondo}>
            {props.children}
        </div>
    )
}

export default Subtitulo