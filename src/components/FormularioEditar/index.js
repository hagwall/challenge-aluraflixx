// import Titulo from "../Titulo";
// import Campo from "../ComponentesForm/Campo";
// import styles from "./FormularioEditar.module.css";
// import ListaOpciones from "../ComponentesForm/ListaOpciones";
// import Boton from "../ComponentesForm/Boton";
// import CampoArea from "../ComponentesForm/CampoArea";
// import React, { useState } from "react";
// import { IoCloseCircleOutline } from "react-icons/io5";

// function FormularioEditar(props) {


//   const [titulo, actualizarTitulo] = useState("");
//   const [categoria, actualizarCategoria] = useState("");

//   const [imagen, actualizarImagen] = useState("");
//   const [video, actualizarVideo] = useState("");
//   const [descripcion, actualizarDescripcion] = useState("");

//   const { registrarVideo } = props;

//   const manejarEnvio = (evento) => {
//     evento.preventDefault();
//     console.log("manejar evento de envio", evento.target.value);

//     let enviarDatos = {
//       titulo,
//       categoria,
//       imagen,
//       video,
//       descripcion,
//     };
//     registrarVideo(enviarDatos);
//   };

//   return (
    
//     <section className={styles.formulario}>
//       <form onSubmit={manejarEnvio} >
//         <IoCloseCircleOutline className={styles.cerrar}/>
//         <Titulo color="#2271D1">
//           <h2>EDITAR CARD:</h2>
//         </Titulo>
//         <Campo
//           titulo="Titulo"
//           placeholder="¿Que es javaScript?"
//           valor={titulo}
//           actualizarValor={actualizarTitulo}
//         />
//         <ListaOpciones
//           valor={categoria}
//           categorias={props.categorias}
//           actualizarValor={actualizarCategoria}
//         />
//         <Campo
//           titulo="Image"
//           placeholder="Ingrese enlace de una imagen"
//           valor={imagen}
//           actualizarValor={actualizarImagen}
//         />
//         <Campo
//           titulo="Video"
//           placeholder="Ingrese enlace del video"
//           valor={video}
//           actualizarValor={actualizarVideo}
//         />
//         <CampoArea
//           titulo="Descripcion"
//           placeholder="Ingrese la descrpcion"
//           valor={descripcion}
//           actualizarValor={actualizarDescripcion}
//         ></CampoArea>
//         <section className={styles.container_boton}>
//           <Boton color="#FF6E33">GUARDAR</Boton>
//           <Boton color="red">CANCELAR</Boton>
//         </section>
        
//       </form>
      
//     </section>

//   );
// }

// export default FormularioEditar;
