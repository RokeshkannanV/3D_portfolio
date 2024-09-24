import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader.jsx";
import HomeInfo from "../components/HomeInfo.jsx";
import Horror from "../models/Horror";
import Sky from "../models/Sky.jsx";
import { Bird } from "../models/Bird.jsx";
import sakura from "../assets/Leo.mp3";
import soundoff from "../assets/icons/Soundoffed-removebg-preview.png";
import soundon from "../assets/icons/soundon-removebg-preview.png";
// import Bio from "../components/Bio"; 
import {Link} from "react-router-dom";

const Home = () => {
  const [showBio, setShowBio] = useState(false);
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustHorrorForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [0.9, 1, 0.9];
      screenPosition = [0, -0.6, -43.4];
    } else {
      screenScale = [1, 1, 0.5];
      screenPosition = [0, -6.5, -43.4];
    }
    return [screenScale, screenPosition];
  };

  const [horrorScale, horrorPosition] = adjustHorrorForScreenSize();
  const toggleBio = () => {
    setShowBio(!showBio);
  };

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{
          near: 0.1,
          far: 1000,
        }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight position={[400, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
          <Bird />
          <Sky isRotating={isRotating} />
          <Horror
            position={horrorPosition}
            screenScale={horrorScale}
            rotation={[0.1, 4.7077, 0]}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            scale={horrorScale}
          />
        </Suspense>
      </Canvas>
      <div className="home-container">
  <div className="clickable-container" onClick={toggleBio}>
    <Link to="/contact">
      <span className="btn clickable-object">Want To See Me</span>
    </Link>
  </div>
</div>



      {/* {showBio && <Bio />}  */}
      <div className="absolute bottom-2 left-2">
        <img src={!isPlayingMusic ? soundoff : soundon} alt="jukebox" onClick={() => setIsPlayingMusic(!isPlayingMusic)} className="w-15 h-10 cursor-pointer object-contain" />
      </div>
      <div className="absolute bottom-2 left-2 z-10">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-15 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
