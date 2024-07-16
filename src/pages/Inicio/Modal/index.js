import React, {useState, useEffect} from "react"
import styles from "./Modal.module.css"
import Campo from "../../../components/ComponentesForm/Campo";
import ListaOpciones from "../../../components/ComponentesForm/ListaOpciones";
import Boton from "../../../components/ComponentesForm/Boton";
import Titulo from "../../../components/Titulo";
function ModalEditarVideo ({isOpen, onClose, onSave, videoData}){

    const [videoEditado, setVideoEditado] = useState(videoData);

    useEffect(() => {
        setVideoEditado(videoData);
    }, [videoData]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setVideoEditado({...videoEditado, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(videoEditado);
    }

    if (!isOpen) return null;
    return(
        <div className={styles.modal_principal}>
            <div className={styles.modal_contenido}>
                <Titulo>EDITAR VIDEO</Titulo>
                <form onSubmit={handleSubmit}>
                    
                    <Campo
                        label="Titulo"
                        name="titulo"
                        value={videoEditado.titulo}
                        onChange={handleChange}
                        // placeholder="titulooooo"
                        required
                    />
                    <ListaOpciones
                        label="Categoria"
                        name="categoria"
                        value={videoEditado.categoria}
                        onChange={handleChange}
                        // placeholder="Categoria"
                        required
                        
                    />
                    <Campo 
                        label="url"
                        name="imagen"
                        type="url"
                        value={videoEditado.imagen}
                        onChange={handleChange}
                        // placeholder="URL de la imagen"
                        required
                    />
                    <Campo
                        label="url"
                        name="video"
                        type="url"
                        value={videoEditado.video}
                        onChange={handleChange}
                        placeholder="URL del video"
                        required
                    />

                    <Campo className={styles.tamanoArea}
                        label="Descripcion"
                        name="descripcion"
                        type="textarea"
                        value={videoEditado.descripcion}
                        onChange={handleChange}
                        placeholder="Descripcion"
                        required
                        
                    />
                    <div className={styles.modal_boton}>
                        <Boton type="submit">GUARDAR</Boton>
                        <Boton type="button" onClick={onClose}>CANCELAR</Boton>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default ModalEditarVideo