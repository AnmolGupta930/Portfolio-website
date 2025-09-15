import React, { useRef, useState, useEffect, ReactNode } from "react";
import {
  motion,
  useMotionValue,
  MotionValue,
  useTransform,
} from "framer-motion";
import cn from "../lib/utils/cn";

export const IconPlaceholder = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <div
    className={cn(
      "flex size-full items-center justify-center rounded-full mask-radial-at-center text-lg font-bold text-white",
      className,
    )}
  >
    {children}
  </div>
);

// Define the dimensions of the container
const CONTAINER_SIZE = 225;
const ICON_SIZE = 40;
const ICON_MARGIN = 10;
const GRID_ROWS = 5;
const GRID_COLS = 5;

export const AppIcon = ({
  children,
  gridX,
  gridY,
}: {
  children: ReactNode;
  gridX: MotionValue<number>;
  gridY: MotionValue<number>;
}) => {
  const ref = useRef(null);
  const [elementCenter, setElementCenter] = useState({ x: 0, y: 0 });

  // This effect runs once to calculate the icon's center position
  useEffect(() => {
    if (ref.current) {
      //@ts-expect-error idk the type of getBoundingClientRect()
      const rect = ref.current.getBoundingClientRect();
      const parentRect =
        //@ts-expect-error idk the type of getBoundingClientRect()
        ref.current.parentElement.parentElement.getBoundingClientRect();
      setElementCenter({
        x: rect.left - parentRect.left + rect.width / 2,
        y: rect.top - parentRect.top + rect.height / 2,
      });
    }
  }, []);

  // Transform hook to calculate distance and scale
  const scale = useTransform([gridX, gridY], ([latestX, latestY]) => {
    const containerCenter = CONTAINER_SIZE / 2;
    //@ts-expect-error latestX is number
    const iconCurrentX = elementCenter.x + latestX;
    //@ts-expect-error latestX is number
    const iconCurrentY = elementCenter.y + latestY;

    const distance = Math.sqrt(
      Math.pow(iconCurrentX - containerCenter, 2) +
        Math.pow(iconCurrentY - containerCenter, 2),
    );

    // Map distance to scale. Closer to center = bigger scale.
    const newScale = 1.75 - (distance / (CONTAINER_SIZE / 2)) * 1.25;
    return Math.max(0.5, newScale); // Ensure scale doesn't go below a minimum value
  });

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        width: ICON_SIZE,
        height: ICON_SIZE,
      }}
      className="absolute flex items-center justify-center rounded-full mask-radial-from-100% select-none"
    >
      {children}
    </motion.div>
  );
};

export function AppleWatchMenu({ icons = [] }: { icons: ReactNode[] }) {
  const gridX = useMotionValue(0);
  const gridY = useMotionValue(0);

  const gridWidth = GRID_COLS * (ICON_SIZE + ICON_MARGIN);
  const gridHeight = GRID_ROWS * (ICON_SIZE + ICON_MARGIN);

  return (
    <div
      style={{ width: CONTAINER_SIZE, height: CONTAINER_SIZE }}
      className={cn(
        "relative mt-2 mr-4 overflow-hidden mask-t-from-85% mask-r-from-85% mask-b-from-85% mask-l-from-85% mask-radial-from-40%",
        "border-foreground/50 border bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-foreground)]/10",
      )}
    >
      <motion.div
        drag
        dragConstraints={{
          left: -(gridWidth - CONTAINER_SIZE),
          right: 0,
          top: -(gridHeight - CONTAINER_SIZE),
          bottom: 0,
        }}
        style={{
          x: gridX,
          y: gridY,
          width: gridWidth,
          height: gridHeight,
        }}
        className="relative cursor-grab active:cursor-grabbing"
      >
        {icons.slice(0, GRID_ROWS * GRID_COLS).map((icon, i) => {
          const row = Math.floor(i / GRID_COLS);
          const col = i % GRID_COLS;
          // Stagger odd rows for honeycomb effect
          const xOffset = row % 2 === 1 ? (ICON_SIZE + ICON_MARGIN) / 2 : 0;

          return (
            <div
              key={i}
              className="absolute"
              style={{
                top: row * (ICON_SIZE + ICON_MARGIN),
                left: col * (ICON_SIZE + ICON_MARGIN) + xOffset,
              }}
            >
              <AppIcon gridX={gridX} gridY={gridY}>
                {icon}
              </AppIcon>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
