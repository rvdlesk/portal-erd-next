'use client';

import { ThemeProvider } from '@ogticrd/ui-kit';

export default function ClientThemeProvider({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
