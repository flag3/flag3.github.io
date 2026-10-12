"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

// Tailwind owns the global reset, typography, and page colors.
const { globalCss: _, ...chakraConfig } = defaultConfig;
const system = createSystem(chakraConfig, { preflight: false });

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        {...props}
      >
        {children}
      </NextThemesProvider>
    </ChakraProvider>
  );
}

export const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <FaCircleHalfStroke
        className="h-[14px] w-[14px] text-[#1c1c1c]"
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      id="theme-toggle"
      aria-label={`${theme} mode`}
      onClick={toggleTheme}
      className="flex items-center justify-center transition-opacity duration-300 hover:opacity-90 cursor-pointer"
    >
      <FaCircleHalfStroke
        className={`h-[14px] w-[14px] ${
          theme === "dark" ? "text-[#D4D4D4]" : "text-[#1c1c1c]"
        }`}
      />
    </button>
  );
};
