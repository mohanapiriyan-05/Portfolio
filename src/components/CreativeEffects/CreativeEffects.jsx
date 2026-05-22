import "./CreativeEffects.css";
import { useEffect, useState } from "react";

export default function CreativeEffects() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-glow"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      ></div>

      <div className="particles">
        {[...Array(35)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>

      <div className="ai-bubble">
        <strong>Hi 👋</strong>
        <p>Need a website?</p>
      </div>
    </>
  );
}