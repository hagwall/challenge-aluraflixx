import React from "react"
import { useNavigate } from "react-router-dom"
import FormularioVideo from "../../components/FormularioNuevoVideo"
import Pie from "../../components/Pie"
import styles from "./NuevoVideo.module.css"
import Titulo from "../../components/Titulo"


function NuevoVideo({onAgregarVideo}){

    const navigate = useNavigate();


    const handlesSubmit = (videoData) => {
        onAgregarVideo(videoData);
        navigate('/');
    };
    
    
    return <>
        <div className={styles.container_formulario}>
            <Titulo>
                <h1>AGREGAR VIDEO</h1>
                <p>COMPLETE EL FORMULARIO PARA AGREGAR UNA NUEVA TARJETA DE VIDEO</p>
            </Titulo>
            <FormularioVideo onSubmit={handlesSubmit}/>
        </div>


    
        <Pie/>


        </>
}

export default NuevoVideo