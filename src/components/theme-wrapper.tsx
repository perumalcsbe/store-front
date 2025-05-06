"use client";

import { cn } from "@/lib/utils";
import { Config, useConfig } from "@/stores/use-config";
import { useTheme } from "./theme-provider";
import { themes } from "@/registry/themes";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  defaultTheme?: string;
}

export function ThemeWrapper({
  defaultTheme,
  children,
  className,
}: ThemeWrapperProps) {
  const config: Config  = useConfig();
  const { theme: mode } = useTheme();

  const currentTheme = mode === "dark" ? "dark" : "light";
  const selectedTheme = themes.find(th => th.name === config.theme) ?? themes[0]
  const prefixedCssVars = Object.keys(selectedTheme.cssVars[currentTheme]).reduce(
    (acc, key) => {
      const value =
      selectedTheme.cssVars[currentTheme][
          key as keyof (typeof selectedTheme.cssVars)["light"]
        ];
      acc[`--${key}`] = value !== undefined ? `${value}` : "";
      return acc;
    },
    {} as Record<string, string>
  );

  const style = {
    ...prefixedCssVars,
    "--radius": `${defaultTheme ? "0.5rem" : selectedTheme.cssVars.light?.radius ?? "0.5rem"}`,
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        `theme-${defaultTheme || config.theme}`,
        "w-full",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}