'use client';

import { ThemeProvider } from 'next-themes';

interface ClientThemeProviderProps {
  children: React.ReactNode;
}

export default function ClientThemeProvider({ children }: ClientThemeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"      // adds class="light" or "dark" to body
      defaultTheme="light"   // default theme on SSR
      enableSystem           // detect system theme preference
      storageKey="theme"     // key to store theme in localStorage
    >
      {children}
    </ThemeProvider>
  );
}
