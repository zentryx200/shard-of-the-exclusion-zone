import React, { useEffect } from "react";

const AudioPlayer = ({ audioRef, paused }) => {
  useEffect(() => {
    if (!audioRef.current) return;
    if (paused) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
  }, [paused]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  return (
    <audio
      ref={audioRef}
      loop
      src="/audio/MoozE - Stalker ambient.mp3"
    />
  );
};

export default AudioPlayer;
