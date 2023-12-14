import Layout from "@/components/layout/Layout";
import { colors } from "@/configs/colors";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
import { Noto_Serif_JP } from "next/font/google";
import { ThemeProvider } from "styled-components";

const fonts = Noto_Serif_JP({
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  display: "swap",
  style: "normal",
  preload: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={colors}>
      <main className={fonts.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </ThemeProvider>
  );
}
