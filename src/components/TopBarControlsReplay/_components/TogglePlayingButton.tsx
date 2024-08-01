import React from "react";

const TogglePlayingButton = ({
  toggleIsPlaying,
  isPlaying,
}: {
  toggleIsPlaying: () => void;
  isPlaying: boolean;
}) => {
  return (
    <button
      onClick={() => toggleIsPlaying()}
      className={`flex gap-1 items-center cursor-pointer h-full hover:scale-[1.03] transition`}
    >
      <img
        draggable="false"
        className="h-8"
        src="/assets/icons/auto-play.svg"
        alt="prev"
      />
      <div
        className={`pt-0.5 shadow select-none ${
          isPlaying && "text-primary-500 text-shadow-neon"
        }`}
      >
        Auto Play
      </div>
    </button>
  );
};

export default TogglePlayingButton;
