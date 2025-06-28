import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CategoryDetail from "./components/CategoryDetail";

function App() {
  const [language, setLanguage] = useState("ar");

  useEffect(() => {
    // Set document direction and language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;

    // Update body class for styling
    document.body.className = language === "ar" ? "lang-ar" : "lang-en";
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const HomePage = () => (
    <>
      <Hero language={language} />
      <About language={language} />
      <Services language={language} />
      <Portfolio language={language} />
      <Contact language={language} />
    </>
  );

  return (
    <div className="min-h-screen">
      {/* Language Switcher */}
      <div className="lang-switcher">
        <button
          onClick={toggleLanguage}
          className={language === "ar" ? "active" : ""}
          title="العربية"
        >
          ع
        </button>
        <button
          onClick={toggleLanguage}
          className={language === "en" ? "active" : ""}
          title="English"
        >
          EN
        </button>
      </div>

      <Header language={language} />

      <Routes>
        <Route path="/hekma/" element={<HomePage />} />
        <Route
          path="/hekma/category/:categoryId"
          element={<CategoryDetail language={language} />}
        />
      </Routes>

      <Footer language={language} />
    </div>
  );
}

export default App;
