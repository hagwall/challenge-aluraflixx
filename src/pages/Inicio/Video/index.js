import React, { useState } from "react";
import styles from "./Video.module.css";
import ModalEditarVideo from "../Modal";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";



function Video({
    id,
    titulo,
    categoria,
    imagen,
    video,
    descripcion,
    onDelete,
    onEdit,
}) {

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
  const [isModalOPen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveEdit = (videoEditado) => {
    onEdit(id, videoEditado);
    setIsModalOpen(false);
  };

  const categoriaColor = categorias.find(cat => cat.titulo === categoria) ?.colorfondo || '#000000';

  return (
    <div className={styles.video} style={{borderColor: categoriaColor}}>
      <div className={styles.video_datos}>
        <a href={video} target="_blank" rel="noopener noreferrer">
          <img src={imagen} alt={titulo}/>
          </a>
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
        
      </div>
      <div className={styles.video_boton}>
        <button onClick={handleEdit}><CiEdit className={styles.icono}/>Editar</button>
        <button onClick={handleDelete}><MdDeleteForever className={styles.icono}/>Borrar</button>
      </div>
      <ModalEditarVideo
        isOpen={isModalOPen}
        onClose={handleCloseModal}
        onSave={handleSaveEdit}
        videoData={{ titulo, categoria, imagen, video, descripcion }}
      />
    </div>
  );
}

export default Video;
