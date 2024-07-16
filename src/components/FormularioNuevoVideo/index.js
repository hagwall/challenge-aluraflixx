import React, {useState} from "react"
import { useNavigate } from "react-router-dom"

import styles from "./FormularioNuevoVideo.module.css"
import Campo from "../ComponentesForm/Campo";
import ListaOpciones from "../ComponentesForm/ListaOpciones";
import Boton from "../ComponentesForm/Boton";




function FormularioVideo({onSubmit}, props){

    const [videoData, setVideoData] = useState({
        titulo: '',
        categoria: '',
        imagen: '',
        video: '',
        descripcion: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setVideoData({...videoData, [name]: value});
    };

    const handlesSubmit = (e) => {
        e.preventDefault();
        onSubmit(videoData);
    };

    const handleCancel = (e) =>{
        navigate('/');
    }
    return (
        <form onSubmit={handlesSubmit} className={styles.container_formulario}>
            
            {/* <Subtitulo>Crear Tarjeta Video</Subtitulo> */}
            <h4>Crear Tarjeta</h4>
            <div className={styles.container_input}>
            <Campo
                label="Titulo"
                name="titulo"
                value={videoData.titulo}
                onChange={handleChange}
                placeholder="Ingrese el titulo"
                required
            />
            
            <ListaOpciones 
                label="Categoria"
                name="categoria"
                value={videoData.categoria}
                onChange={handleChange}
                placeholder="Categoria"
                required
            />

            <Campo
                label="URL de la imagen"
                name="imagen"
                type="url"
                value={videoData.imagen}
                onChange={handleChange}
                placeholder="Ingrese la URL imagen"
                required
            />

            <Campo 
                label="url del video"
                name="video"
                value={videoData.video}
                onChange={handleChange}
                placeholder="Ingrese la URL video"
                required
            />

            <Campo
                label="Descripcion"
                name="descripcion"
                type="textarea"
                value={videoData.descripcion}
                onChange={handleChange}
                placeholder="Ingrese una Descripcion"
                required
            />
            </div>
            <div className={styles.container_boton}>
                <Boton type="submit" color="#ddd">GUARDAR</Boton>
                <Boton type="button" onClick={handleCancel}>CANCELAR</Boton>
            </div>
        </form>
    );
}

export default FormularioVideo