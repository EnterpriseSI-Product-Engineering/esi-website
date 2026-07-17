import React, { useRef, useState } from "react";

interface AwardBadgeProps {
  text?: string;
}

const identityMatrix =
  "1, 0, 0, 0, " +
  "0, 1, 0, 0, " +
  "0, 0, 1, 0, " +
  "0, 0, 0, 1";

const maxRotate = 0.1;
const minRotate = -0.1;
const maxScale = 1;
const minScale = 0.99;

export const AwardBadge = ({ text = "Agentic Business Acceleration Platform" }: AwardBadgeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [matrix, setMatrix] = useState(identityMatrix);
  const [isHovered, setIsHovered] = useState(false);

  const getDimensions = () => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return { left: 0, right: 0, top: 0, bottom: 0 };
    return { left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom };
  };

  const getMatrix = (clientX: number, clientY: number) => {
    const { left, right, top, bottom } = getDimensions();
    const xCenter = (left + right) / 2;
    const yCenter = (top + bottom) / 2;

    const scaleX = maxScale - (maxScale - minScale) * Math.abs(xCenter - clientX) / (xCenter - left || 1);
    const scaleY = maxScale - (maxScale - minScale) * Math.abs(yCenter - clientY) / (yCenter - top || 1);

    const rotateX = -maxRotate + (2 * maxRotate) * (clientY - top) / (bottom - top || 1);
    const rotateY = maxRotate - (2 * maxRotate) * (clientX - left) / (right - left || 1);

    return `${scaleX}, 0, 0, 0, 0, ${scaleY}, 0, 0, 0, 0, 1, 0, ${rotateY}, ${rotateX}, 0, 1`;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMatrix(getMatrix(e.clientX, e.clientY));
  };

  const handleMouseLeave = () => {
    setMatrix(identityMatrix);
    setIsHovered(false);
  };

  return (
    <div
      ref={ref}
      className="w-max border border-white/20 bg-white/5 backdrop-blur-md rounded-full px-5 py-2 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
    >
      <div
        style={{
          transform: `perspective(1000px) matrix3d(${matrix})`,
          transformOrigin: "center center",
          transition: "transform 150ms ease-out"
        }}
      >
        <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white/80 whitespace-nowrap transition-all duration-300 ${isHovered ? 'text-white scale-105' : ''}`}>
          {text}.
        </p>
      </div>
    </div>
  );
};