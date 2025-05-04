"use client";

import { ThemeProvider } from "next-themes";

export function ThemeContext({ children }) {
	return <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>{children}</ThemeProvider>;
}
