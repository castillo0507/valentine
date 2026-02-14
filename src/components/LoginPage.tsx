"use client";

import { useState, FormEvent } from "react";

interface LoginPageProps {
  onLogin: (username: string) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username.trim() && password === "iloveyou") {
      onLogin(username.trim());
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 400);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative z-[1]">
      <div className="animate-fadeInUp bg-[rgba(60,0,15,0.85)] border-2 border-[rgba(255,77,109,0.3)] rounded-3xl p-12 w-[420px] max-w-[95vw] backdrop-blur-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(255,77,109,0.1)] text-center">
        {/* Heart Icon */}
        <div className="text-6xl mb-2 animate-pulse-heart">💝</div>

        {/* Title */}
        <h1
          className="text-[#ff8fa3] text-4xl mb-1"
          style={{ fontFamily: "var(--font-vibes), cursive" }}
        >
          Valentine&apos;s Day
        </h1>
        <p className="text-[#cc7a8a] text-sm mb-8">
          Enter your love credentials 💕
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="relative mb-5 text-left">
            <label className="block text-[#ff8fa3] text-sm font-semibold mb-1.5">
              Your Name
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-lg opacity-60">
                💌
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your name..."
                required
                autoComplete="off"
                className="w-full py-3.5 pl-11 pr-4 bg-[rgba(80,10,30,0.6)] border-[1.5px] border-[rgba(255,77,109,0.25)] rounded-xl text-[#ffd6e0] text-[15px] outline-none transition-all placeholder:text-[rgba(255,143,163,0.4)] focus:border-[#ff4d6d] focus:shadow-[0_0_15px_rgba(255,77,109,0.2)]"
              />
            </div>
          </div>

          {/* Password */}
          <div className="relative mb-5 text-left">
            <label className="block text-[#ff8fa3] text-sm font-semibold mb-1.5">
              Secret Love Code
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-lg opacity-60">
                🔐
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your love code..."
                required
                className="w-full py-3.5 pl-11 pr-4 bg-[rgba(80,10,30,0.6)] border-[1.5px] border-[rgba(255,77,109,0.25)] rounded-xl text-[#ffd6e0] text-[15px] outline-none transition-all placeholder:text-[rgba(255,143,163,0.4)] focus:border-[#ff4d6d] focus:shadow-[0_0_15px_rgba(255,77,109,0.2)]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 mt-2 bg-gradient-to-br from-[#800020] via-[#b30033] to-[#800020] text-white border-none rounded-xl text-base font-semibold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(179,0,51,0.4)] active:scale-[0.98]"
          >
            Enter the Garden of Love 🌹
          </button>

          {/* Error Message */}
          {error && (
            <p
              className={`text-[#ff6b6b] text-sm mt-3 ${
                shaking ? "animate-shake" : ""
              }`}
            >
              💔 Incorrect credentials! Try again, sweetheart.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
