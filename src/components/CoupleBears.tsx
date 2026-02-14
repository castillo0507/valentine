"use client";

export default function CoupleBears() {
  return (
    <div className="flex justify-center items-end min-h-[280px] gap-1 relative">
      {/* Boy Bear */}
      <div className="relative w-[120px] h-[150px]">
        <div className="bear-head">
          <div className="bear-ear left">
            <div className="bear-ear-inner" />
          </div>
          <div className="bear-ear right">
            <div className="bear-ear-inner" />
          </div>
          <div className="bear-eye left">
            <div className="bear-eye-shine" />
          </div>
          <div className="bear-eye right">
            <div className="bear-eye-shine" />
          </div>
          <div className="bear-nose" />
          <div className="bear-mouth" />
          <div className="bear-blush left" />
          <div className="bear-blush right" />
        </div>
        <div className="bear-body">
          <div className="bow-tie">
            <div className="bow-center" />
          </div>
        </div>
        <div className="bear-arm" style={{ right: -8, transform: "rotate(15deg)" }} />
        <div className="bear-paw left" />
        <div className="bear-paw right" />
      </div>

      {/* Heart between them */}
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl z-10 animate-pulse-heart"
        style={{ filter: "drop-shadow(0 0 10px rgba(255, 77, 109, 0.6))" }}
      >
        ❤️
      </span>

      {/* Girl Bear */}
      <div className="relative w-[120px] h-[150px]">
        <div className="bear-head">
          <div className="bear-ear left">
            <div className="bear-ear-inner" />
          </div>
          <div className="bear-ear right">
            <div className="bear-ear-inner" />
          </div>
          <div className="hair-bow" />
          <div className="bear-eye left">
            <div className="bear-eye-shine" />
          </div>
          <div className="bear-eye right">
            <div className="bear-eye-shine" />
          </div>
          <div className="bear-nose" />
          <div className="bear-mouth" />
          <div className="bear-blush left" />
          <div className="bear-blush right" />
        </div>
        <div className="bear-body" />
        <div className="bear-arm" style={{ left: -8, transform: "rotate(-15deg)" }} />
        <div className="bear-paw left" />
        <div className="bear-paw right" />
      </div>
    </div>
  );
}
