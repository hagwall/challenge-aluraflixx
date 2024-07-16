import styles from "./Boton.module.css"

function Boton(props){

    return (
        
        <button className={styles.boton} style={{color:`${props.color}`}}>{props.children}</button>
        
    )
}

export default Boton