import { useState } from "react"
import styles from "./CampoArea.module.css"


function CampoArea(props){

    // const [valor, actualizarValor] = useState("")

    const placeholderModificado = `${props.placeholder}...`

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }

    return (
        <div className={styles.campoArea}>
            <label>{props.titulo}</label>
            <textarea 
            placeholder={placeholderModificado} 
            style={{width:`${props.ancho}`}}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            />
        </div>
    )
}

export default CampoArea