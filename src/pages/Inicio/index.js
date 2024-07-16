import React from "react";
import { Link } from "react-router-dom";
import CategoriaVideos from "../../components/Categoria";
import styles from "./Inicio.module.css"
import Video from "./Video";
const { default: Banner } = require("../../components/Banner");
const { default: Pie } = require("../../components/Pie");

function Inicio ({videos, onDeleteVideo, onEditeVideo}){

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
    return(
        <>
        <Banner img="dos" color="#154580"/>
            <div className={styles.contenedor_videos}>
                
                
                {categorias.map((categoria) => {
                    const videosCategoria = videos.filter(video => video.categoria === categoria.titulo);

                    if (videosCategoria.length === 0) return null;

                    return (
                        <div key={categoria.titulo} className={styles.categoria_seccion}>
                            <h2 style={{backgroundColor: categoria.colorfondo}}>{categoria.titulo}</h2>
                            <div className={styles.videos_container}>
                                {videosCategoria.map((video) => (
                                    <Video
                                    key={video.id}
                                    {...video}
                                    onDelete={onDeleteVideo}
                                    onEdit={onEditeVideo}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        <Pie/>
        </>
    )
}

export default Inicio