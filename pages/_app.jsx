import "../styles/globals.css";
import { Hanken_Grotesk } from "@next/font/google";

const hanken = Hanken_Grotesk({ subsets: ["latin"] });

export default function App({ Component, pageProps, appProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${hanken.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} {...appProps} />
    </>
  );
}
