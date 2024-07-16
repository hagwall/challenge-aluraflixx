// import { useState } from "react"
import React from "react"
import styles from "./Campo.module.css"

function Campo({label, name, type = 'text', value, onChange, required = true,placeholder}){

   

    const placeholderModificado = `${placeholder}...`

    // const manejarCambio = (e) => {
        
    //     props.actualizarValor(e.target.value)
    // }

    return(
        <div className={styles.campo}>
            <label>{name}</label>
            {
                type === 'textarea' ? (
                    <textarea
                        id={name}
                        name={name}
                        value={value}
                        onChange={onChange}
                        required={required}
                        placeholder={placeholderModificado}
                    />
                ): (
                    <input 
                        type={type}
                        id={name}
                        name={name}
                        value={value}
                        onChange={onChange}
                        required={required}
                        placeholder={placeholderModificado}
                    />
                )
            }
        </div>
    )
}
export default Campo