
import React from "react"
import Video from "../../pages/Inicio/Video"


function CategoriaVideos({videos, onDeleteVideo, onEditeVideo}){
    return (
        <div>
            {videos.map((video) =>(
                <Video 
                    key={video.id}{...video}
                    onDelete={onDeleteVideo}    
                    onEdit={onEditeVideo}
                />
            ))}
        </div>
    )
}

export default CategoriaVideos