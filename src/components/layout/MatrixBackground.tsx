"use client";

import { useEffect, useState } from "react";

const MatrixBackground = () => {
  const [matrixChars, setMatrixChars] = useState<Array<{
    id: number;
    char: string;
    x: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const newChars: Array<{
      id: number;
      char: string;
      x: number;
      delay: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      newChars.push({
        id: i,
        char: chars[Math.floor(Math.random() * chars.length)],
        x: Math.random() * 100,
        delay: Math.random() * 10,
      });
    }

    setMatrixChars(newChars);
  }, []);

  return (
    <div className="matrix-bg">
      {matrixChars.map((char) => (
        <div
          key={char.id}
          className="matrix-char"
          style={{
            left: `${char.x}%`,
            animationDelay: `${char.delay}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          {char.char}
        </div>
      ))}
    </div>
  );
};

export default MatrixBackground;
