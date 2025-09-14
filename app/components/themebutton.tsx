"use client";

import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <button
        className="text-foreground bg-card group absolute top-3 right-3 size-7 cursor-pointer rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(27,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <IconSunFilled className="absolute inset-0 m-auto size-5 scale-100 group-hover:rotate-25 dark:scale-0" />
        <IconMoonFilled className="absolute inset-0 m-auto size-5 scale-0 group-hover:rotate-25 dark:scale-100" />
      </button>
    </>
  );
}
