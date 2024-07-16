import { useState } from "react";
import Cabecera from "./components/Cabecera";
import NuevoVideo from "./pages/NuevoVideo";

const {BrowserRouter, Routes, Route} = require("react-router-dom");
const {default: Inicio} = require("./pages/Inicio");

function AppRoutes(){

    const[videos, setVideos] = useState([
        {
            titulo:"Consejos de CSS FlexBox para comenzar",
            categoria:"FRONT END",
            imagen: "https://github.com/JoseDarioGonzalezCha.png",
            video:"https://www.youtube.com/embed/EB4vWLzfVcI",
            descripcion: "En esta nueva edición de Alura + aprenderemos un poco más sobre los primeros pasos para empezar a trabajar con Flexbox en CSS y conoceremos las principales etiquetas y cómo aplicarlas."
        }
    ]);

    const agregarVideo = (nuevoVideo) => {
        setVideos([...videos, {...nuevoVideo, id: Date.now()}]);
    };

    const eliminarVideo = (id) => {
        setVideos(videos.filter(video => video.id !== id));
    };

    const editarVideo = (id, videoEditado) => {
        setVideos(videos.map(video => video.id ===id ? {...video, ...videoEditado} : video));
    };
    return (
        <BrowserRouter>
        <Cabecera/>
            <Routes>
                <Route path="/" element={<Inicio videos={videos} onDeleteVideo={eliminarVideo} onEditeVideo={editarVideo}/>}></Route>
                <Route path="nuevovideo" element={<NuevoVideo onAgregarVideo={agregarVideo}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes