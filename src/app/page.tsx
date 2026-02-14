"use client";

import { useState, useEffect, useCallback } from "react";
import LoginPage from "@/components/LoginPage";
import ValentinePage from "@/components/ValentinePage";
import FloatingHearts from "@/components/FloatingHearts";

export default function Home() {
  const [user, setUser] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleLogin = (username: string) => {
    setUser(username);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4500);
  };

  const handleLogout = () => {
    setUser(null);
  };

  // Sparkle trail on mouse move
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (Math.random() > 0.92) {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = e.pageX + "px";
      sparkle.style.top = e.pageY + "px";
      const colors = ["#ffd700", "#ff4d6d", "#ff8fa3", "#fff"];
      sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 1000);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <>
      <FloatingHearts />
      {showConfetti && <Confetti />}
      {!user ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <ValentinePage username={user} onLogout={handleLogout} />
      )}
    </>
  );
}

function Confetti() {
  useEffect(() => {
    const colors = ["#ff4d6d", "#ff8fa3", "#ffd6e0", "#800020", "#ffd700", "#ff6b8a", "#ffb3c1"];
    const els: HTMLDivElement[] = [];
    for (let i = 0; i < 80; i++) {
      const c = document.createElement("div");
      c.className = "confetti";
      c.style.left = Math.random() * 100 + "vw";
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.animationDuration = (Math.random() * 2 + 2) + "s";
      c.style.animationDelay = (Math.random() * 1) + "s";
      c.style.width = (Math.random() * 8 + 6) + "px";
      c.style.height = (Math.random() * 10 + 8) + "px";
      c.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
      document.body.appendChild(c);
      els.push(c);
    }
    const t = setTimeout(() => els.forEach((c) => c.remove()), 4500);
    return () => { clearTimeout(t); els.forEach((c) => c.remove()); };
  }, []);
  return null;
}
