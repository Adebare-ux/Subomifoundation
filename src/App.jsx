import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Gallery from "./components/Gallery";
import Donate from "./components/Donate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./global.css";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Donate />
      <Contact />
      <Footer />
    </>
  );
}
