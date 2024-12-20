import React, { useRef, useState } from "react";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa"; // Importa ícones de play e pause
import Video from "../../images/wine-video2.mp4";
import "./loopVideo.css";

export default function LoopVideo() {
  const videoRef = useRef(null); // Referência ao vídeo
  const [isPlaying, setIsPlaying] = useState(true); // Estado para controlar play/pause

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="general-container-video">
      <video ref={videoRef} autoPlay muted loop>
        <source src={Video} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>

      <a
        className="play-pause-button"
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause" : "Play"} // Para acessibilidade
      >
        {isPlaying ? <FaPauseCircle size={20} /> : <FaPlayCircle size={20} />}
      </a>
    </div>
  );
}
