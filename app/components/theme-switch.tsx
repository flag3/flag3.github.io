"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { ChakraProvider, IconButton, createSystem, defaultConfig } from "@chakra-ui/react";

// Tailwind owns the global reset, typography, and page colors.
const { globalCss: _, ...chakraConfig } = defaultConfig;
const system = createSystem(chakraConfig, { preflight: false });

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
        {children}
      </NextThemesProvider>
    </ChakraProvider>
  );
}

export const ThemeSwitch: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <IconButton
      id="theme-toggle"
      aria-label={
        mounted
          ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`
          : "Toggle color mode"
      }
      onClick={toggleTheme}
      disabled={!mounted}
      variant="ghost"
      size="sm"
      colorPalette="gray"
    >
      <FaCircleHalfStroke aria-hidden="true" />
    </IconButton>
  );
};
