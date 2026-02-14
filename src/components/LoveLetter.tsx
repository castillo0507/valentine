"use client";

import { useState } from "react";

export default function LoveLetter() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-[280px] pt-[280px]">
      <div>
        <div
          className={`envelope ${opened ? "opened" : ""}`}
          onClick={() => setOpened(!opened)}
        >
          <div className="envelope-flap" />
          <div className="letter-paper">
            <p
              className="text-[#5c3a1e] text-[15px] text-center leading-[1.8]"
              style={{ fontFamily: "var(--font-dancing), cursive" }}
            >
              My Dearest palanggingg,
              <br />
              <br />
              I pray that our love reflects 1 Corinthians 16:14 —
              <br />
              “Let all that you do be done in love.”
              <br />
              May we grow together in faith,
              <br />
             choosing patience, kindness,
              <br />
             and forgiveness every day.
              <br />
              <br />
              I promise to love you today,
              <br />
              tomorrow, and forever. 🌹
              <br />
              <span className="inline-block mt-3 text-[#800020] text-lg font-bold">
                Forever Yours ❤️
              </span>
            </p>
          </div>
          <div className="envelope-front" />
          <div className="envelope-seal">💕</div>
        </div>
        <p className="text-[rgba(255,255,255,0.5)] text-xs text-center mt-3 italic">
          click to open
        </p>
      </div>
    </div>
  );
}
