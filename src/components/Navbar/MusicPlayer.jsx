// import React, { useState, useEffect, useRef } from 'react';
// import './MusicPlayer.scss';
// //import cleanAirAudio from './Audio/CleanAir.mp3';

// const MusicPlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [volume, setVolume] = useState(10);
//   const audioRef = useRef(null);

//   const handlePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   useEffect(() => {
//     if (audioRef.current){
//         audioRef.current.volume = volume / 100;
//     } 
//   }, [volume]);

//   function handleVolumeChange(event) {
//     setVolume(event.target.value);
// }
  

// // Start or pause audio playback when the isPlaying state changes
// useEffect(() => {
//     if (isPlaying) {
//       audioRef.current.play();
//     } else {
//       audioRef.current.pause();
//     }
//   }, [isPlaying]);

//   const handleEnded = () => {
//     audioRef.current.currentTime = 0;
//     audioRef.current.play();
//   }

//   return (
//     <div className="music-player">
//       <audio ref={audioRef} src={ cleanAirAudio }  onEnded={handleEnded}/>
//       <button className="app__button" onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
//       <input type="range" min="0" max="100" value={volume} onChange={handleVolumeChange} />
//     </div>
//   );
// };

//  export default MusicPlayer;
