import React from "react";
import About from "./pages/About";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactMe from "./pages/ContactMe";
import Work from "./pages/Work";
//Router
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<About />} />
          <Route path="/work" exact element={<Work />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
