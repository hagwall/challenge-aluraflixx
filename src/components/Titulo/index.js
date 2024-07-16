import styles from "./Titulo.module.css"

function Titulo(props){
    return(
        // style={{color:`${props.color}`}}
        <div className={styles.texto}>
            {props.children}
        </div>
    )
}

export default Titulo