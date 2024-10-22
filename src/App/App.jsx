import React from "react";
import Navbar from "../components/Navbar";
import NavbarMd from "../components/NavbarMd.jsx";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

const App = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center w-screen ">
        <nav className="h-16 w-full hidden md:block">
          <Navbar />
        </nav>
        <nav className="min-h-16 block md:hidden w-full">
          <NavbarMd />
        </nav>
        <section className="flex flex-col w-full items-center h-[calc(100vh-4rem)]  justify-between overflow-y-scroll scroll-smooth">
          <MainContent />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default App;
