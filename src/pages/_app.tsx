import Layout from "@/components/layout";
import "@/styles/globals.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Noto_Sans } from "next/font/google";

const fontFamily = Noto_Sans({ weight: ["400", "500"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <style jsx global>{`
          html {
            font-family: ${fontFamily.style.fontFamily};
          }
        `}</style>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ChakraProvider>
  );
}
