import Home from "@/app/Home";
import Head from "next/head";

export default function PageHome() {
  return (
    <>
      <Head>
        <title>Salcon - Bem-vindo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}

