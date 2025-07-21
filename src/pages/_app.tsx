import React from "react"
// src/pages/_app.tsx
import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { AppThemeProvider } from "~/components/providers/theme-provider";
import MainLayout from "~/modules/common/MainLayout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppThemeProvider>
  );
}
