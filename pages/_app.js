import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
