// src/components/MeditationPlayer.tsx
"use client";
import { useState, useRef } from "react";
import { FiPlay, FiPause, FiSkipBack, FiSkipForward } from "react-icons/fi";

export function MeditationPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  return (
    <div className="bg-blue p-6 rounded-xl shadow-sm">
      <h2 className="font-medium text-lg mb-4">Breath Meditation</h2>
      
      <div className="aspect-video bg-purple-50 rounded-lg mb-4 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-2">🌿</div>
          <p className="text-purple-800">Focus on your breath</p>
        </div>
      </div>
      
      <audio
        ref={audioRef}
        src="/audio/meditation.mp3" // Add your audio file to public/audio
        onTimeUpdate={handleTimeUpdate}
        hidden
      />
      
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-gray-500">
          <span>
            {Math.floor(currentTime / 60)}:
            {String(Math.floor(currentTime % 60)).padStart(2, "0")}
          </span>
          <span>5:00</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-purple-500 h-2 rounded-full"
            style={{ width: `${(currentTime / 300) * 100}%` }}
          ></div>
        </div>
        
        <div className="flex justify-center gap-6">
          <button className="text-gray-500 hover:text-purple-600">
            <FiSkipBack size={24} />
          </button>
          <button
            onClick={handlePlayPause}
            className="bg-purple-600 text-white p-4 rounded-full hover:bg-purple-700"
          >
            {isPlaying ? <FiPause size={24} /> : <FiPlay size={24} />}
          </button>
          <button className="text-gray-500 hover:text-purple-600">
            <FiSkipForward size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}