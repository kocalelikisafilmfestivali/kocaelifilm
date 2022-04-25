import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ApolloProvider } from "@apollo/client";
import { noSSRClient } from "../apollo-client";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={noSSRClient}>
      <>
        <Head>
          <title>Kocaeli Kısa Film Festivali</title>
        </Head>
        <Toaster />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    </ApolloProvider>
  );
}

export default MyApp;
