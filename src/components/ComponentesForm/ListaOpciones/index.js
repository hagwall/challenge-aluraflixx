
import styles from "./ListaOpciones.module.css"

function ListaOpciones({label, name, value, onChange, required = false}){

    const categorias = [
        {
            titulo:'FRONT END',
            colorfondo: "#6BD1FF"
        },
        {
            titulo:'BACK END',
            colorfondo: "#00C86F"
        },
        {
            titulo:'INNOVACION Y GESTION',
            colorfondo: "#FF8C2A"
        }
    ];

    return (
        <div className={styles.list_opciones}>
        <label>{label}</label>
        <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
        >
            <option value="">Seleccion una Opcion</option>
            {categorias.map((categoria) =>(
                <option key={categoria.titulo} value={categoria.titulo}>
                    {categoria.titulo}
                </option>
            ))}
            
        </select>
        </div>
    )
}

export default ListaOpciones