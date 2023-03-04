import type { AppProps } from "next/app";
import "@/styles/main.css";
import Context from "@/common/components/Context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  );
}

