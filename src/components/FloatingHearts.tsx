"use client";

import { useEffect, useRef } from "react";

export default function FloatingHearts() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const hearts = ["❤", "💕", "💖", "♥", "💗", "💓"];
    for (let i = 0; i < 25; i++) {
      const heart = document.createElement("div");
      heart.className = "floating-heart";
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * 100 + "%";
      heart.style.fontSize = (Math.random() * 24 + 14) + "px";
      heart.style.animationDuration = (Math.random() * 10 + 8) + "s";
      heart.style.animationDelay = (Math.random() * 15) + "s";
      container.appendChild(heart);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    />
  );
}
