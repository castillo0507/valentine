"use client";

import RoseBouquet from "./RoseBouquet";
import CoupleBears from "./CoupleBears";
import ValentineCard from "./ValentineCard";
import LoveLetter from "./LoveLetter";
import PolaroidPhotos from "./PolaroidPhotos";

interface ValentinePageProps {
  username: string;
  onLogout: () => void;
}

export default function ValentinePage({ username, onLogout }: ValentinePageProps) {
  return (
    <div className="relative z-[1] min-h-screen pb-10">
      {/* Logout Button */}
      <button
        onClick={onLogout}
        className="fixed top-5 right-5 z-[100] bg-[rgba(80,10,30,0.7)] border border-[rgba(255,77,109,0.3)] text-[#ff8fa3] py-2 px-5 rounded-full cursor-pointer text-sm transition-all hover:bg-[rgba(128,0,32,0.8)] hover:border-[#ff4d6d]"
      >
        🚪 Logout
      </button>

      {/* Welcome Banner */}
      <div className="text-center pt-8 pb-3 animate-fadeInUp">
        <h1
          className="text-[#ff8fa3] text-5xl md:text-6xl"
          style={{ fontFamily: "var(--font-vibes), cursive" }}
        >
          Happy Valentine&apos;s Day,{" "}
          <span className="text-[#ff4d6d] font-semibold">{username}</span>! 💕
        </h1>
        <p className="text-[#cc7a8a] text-base mt-2">
          A special celebration crafted just for you
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-[1100px] mx-auto mt-8 px-5 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Rose Bouquet */}
        <div
          className="animate-fadeInUp bg-[rgba(60,0,15,0.7)] border-[1.5px] border-[rgba(255,77,109,0.2)] rounded-2xl p-8 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(255,77,109,0.15)]"
          style={{ animationDelay: "0.1s" }}
        >
          <h2
            className="text-[#ff8fa3] text-2xl mb-5 text-center"
            style={{ fontFamily: "var(--font-dancing), cursive" }}
          >
            🌹 Bouquet of Maroon Roses just for my Palangginggg
          </h2>
          <RoseBouquet />
        </div>

        {/* Couple Bears */}
        <div
          className="animate-fadeInUp bg-[rgba(60,0,15,0.7)] border-[1.5px] border-[rgba(255,77,109,0.2)] rounded-2xl p-8 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(255,77,109,0.15)]"
          style={{ animationDelay: "0.2s" }}
        >
          <h2
            className="text-[#ff8fa3] text-2xl mb-5 text-center"
            style={{ fontFamily: "var(--font-dancing), cursive" }}
          >
            🧸 Love Bears, this is u and me heheh
          </h2>
          <CoupleBears />
        </div>

        {/* Valentine Card */}
        <div
          className="animate-fadeInUp bg-[rgba(60,0,15,0.7)] border-[1.5px] border-[rgba(255,77,109,0.2)] rounded-2xl p-8 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(255,77,109,0.15)]"
          style={{ animationDelay: "0.3s" }}
        >
          <h2
            className="text-[#ff8fa3] text-2xl mb-5 text-center"
            style={{ fontFamily: "var(--font-dancing), cursive" }}
          >
            💌 Valentine&apos;s Card
          </h2>
          <ValentineCard />
        </div>

        {/* Love Letter */}
        <div
          className="animate-fadeInUp bg-[rgba(60,0,15,0.7)] border-[1.5px] border-[rgba(255,77,109,0.2)] rounded-2xl p-8 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(255,77,109,0.15)]"
          style={{ animationDelay: "0.4s" }}
        >
          <h2
            className="text-[#ff8fa3] text-2xl mb-5 text-center"
            style={{ fontFamily: "var(--font-dancing), cursive" }}
          >
            💌 Love Letter
          </h2>
          <LoveLetter />
        </div>
      </div>

      {/* Polaroid Photos */}
      <div
        className="max-w-[1100px] mx-auto mt-8 px-5 animate-fadeInUp"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="bg-[rgba(60,0,15,0.7)] border-[1.5px] border-[rgba(255,77,109,0.2)] rounded-2xl p-8 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all hover:shadow-[0_15px_50px_rgba(255,77,109,0.15)]">
          <h2
            className="text-[#ff8fa3] text-2xl mb-5 text-center"
            style={{ fontFamily: "var(--font-dancing), cursive" }}
          >
            📸 Our Memories
          </h2>
          <PolaroidPhotos />
          <p className="text-center text-[#cc7a8a] text-xs mt-3 italic">
            Click a photo to flip it over
          </p>
        </div>
      </div>
    </div>
  );
}
