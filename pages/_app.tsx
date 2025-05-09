import React from "react";
import { AppProps } from "next/app";
import { Open_Sans, Barlow } from "next/font/google";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import "@/styles/reset.css";
import "@/styles/global.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`flex flex-col items-center bg-[url('/images/background-mobile.png')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen w-full md:bg-[url('/images/background.png')] ${barlow.className} ${opensans.className}`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default App;
