"use client";

export default function ValentineCard() {
  return (
    <div className="v-card-wrapper flex justify-center items-center min-h-[280px]">
      <div className="v-card">
        {/* Front */}
        <div className="v-card-front">
          <div className="text-7xl mb-4 animate-pulse-heart">💖</div>
          <h3
            className="text-[#ffd6e0] text-3xl"
            style={{ fontFamily: "var(--font-vibes), cursive" }}
          >
            Be My Valentine
          </h3>
          <p className="text-[rgba(255,143,163,0.5)] text-xs mt-4 italic">
            ~ hover to open ~
          </p>
        </div>

        {/* Back */}
        <div className="v-card-back">
          <div className="text-[#cc3355] text-2xl mb-2">✿ ❤ ✿</div>
          <p
            className="text-[#800020] text-lg text-center leading-relaxed"
            style={{ fontFamily: "var(--font-dancing), cursive" }}
          >
            Roses are red,
            <br />
            Violets are blue,
            <br />
            I wasn’t looking for love,
            <br />
            But then I found you.
            <br />
            <br />
            Every moment with you
            <br />
            feels perfectly new,
            <br />
            Like my heart finally knows what it’s meant to do. 💕
          </p>
          <div className="text-[#cc3355] text-2xl mt-2">✿ ❤ ✿</div>
        </div>
      </div>
    </div>
  );
}
