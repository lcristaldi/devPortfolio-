import React, { useEffect, useState } from "react";

const TYPE_MS = 55;
const ERASE_MS = 30;
const PAUSE_FULL_MS = 1800;
const PAUSE_EMPTY_MS = 400;

export default function Typewriter({ phrases }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState("typing"); // "typing" | "pausing" | "erasing"

  useEffect(() => {
    const current = phrases[index];

    if (mode === "typing") {
      if (text.length < current.length) {
        const t = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          TYPE_MS
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setMode("erasing"), PAUSE_FULL_MS);
      return () => clearTimeout(t);
    }

    if (mode === "erasing") {
      if (text.length > 0) {
        const t = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          ERASE_MS
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setMode("typing");
      }, PAUSE_EMPTY_MS);
      return () => clearTimeout(t);
    }
  }, [text, mode, index, phrases]);

  return (
    <span className="inline-flex items-baseline">
      <span>{text}</span>
      <span
        className="ml-0.5 inline-block w-[2px] h-[1em] bg-current animate-pulse"
        style={{ transform: "translateY(2px)" }}
      />
    </span>
  );
}
