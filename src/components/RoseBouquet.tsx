"use client";

export default function RoseBouquet() {
  return (
    <div className="flex justify-center items-end min-h-[280px]">
      <div className="relative w-[260px] h-[300px]">
        {/* Stems */}
        <div className="stem" style={{ top: 70, left: 130, height: 130, transform: "rotate(-2deg)" }} />
        <div className="stem" style={{ top: 90, left: 82, height: 120, transform: "rotate(8deg)" }} />
        <div className="stem" style={{ top: 90, left: 173, height: 120, transform: "rotate(-8deg)" }} />
        <div className="stem" style={{ top: 95, left: 48, height: 110, transform: "rotate(15deg)" }} />
        <div className="stem" style={{ top: 95, left: 208, height: 110, transform: "rotate(-15deg)" }} />

        {/* Leaves */}
        <div className="leaf" style={{ top: 140, left: 133, transform: "rotate(30deg)" }} />
        <div className="leaf" style={{ top: 130, left: 70, transform: "rotate(-20deg)" }} />
        <div className="leaf" style={{ top: 150, left: 175, transform: "rotate(25deg)" }} />
        <div className="leaf" style={{ top: 160, left: 95, transform: "rotate(-35deg)" }} />

        {/* Roses */}
        <div className="rose" style={{ top: 20, left: 105, width: 55, height: 55 }} />
        <div className="rose" style={{ top: 45, left: 60, width: 50, height: 50 }} />
        <div className="rose" style={{ top: 45, left: 150, width: 50, height: 50 }} />
        <div className="rose" style={{ top: 80, left: 85, width: 52, height: 52 }} />
        <div className="rose" style={{ top: 80, left: 130, width: 48, height: 48 }} />
        <div className="rose" style={{ top: 55, left: 25, width: 42, height: 42 }} />
        <div className="rose" style={{ top: 55, left: 190, width: 42, height: 42 }} />
        <div className="rose" style={{ top: 110, left: 105, width: 46, height: 46 }} />
        <div className="rose" style={{ top: 100, left: 55, width: 40, height: 40 }} />
        <div className="rose" style={{ top: 100, left: 160, width: 40, height: 40 }} />

        {/* Wrapper */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[100px] rounded-b-[10px]"
          style={{
            background: "linear-gradient(135deg, #d4a574, #c9956a)",
            clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Ribbon */}
        <div className="absolute bottom-[85px] left-1/2 -translate-x-1/2 w-[70px] h-[18px] bg-[#ff4d6d] rounded-[5px] shadow-[0_2px_8px_rgba(255,77,109,0.4)]">
          <div
            className="absolute -bottom-3 left-1/2 -translate-x-1/2"
            style={{
              borderLeft: "14px solid transparent",
              borderRight: "14px solid transparent",
              borderTop: "14px solid #ff4d6d",
            }}
          />
        </div>
      </div>
    </div>
  );
}
