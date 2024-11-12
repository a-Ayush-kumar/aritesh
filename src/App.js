import Home from "./components/pages/Home";
import About from "./components/pages/About";
import FAQ from "./components/pages/FAQ";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Footer from "./Footer";

function App(props) {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [displayText, setDisplayText] = useState("Go Dark Mode");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0b1918";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#d9e5e0";
      document.body.style.color = "grey";
      showAlert("Light mode has been enabled", "success");
    }
    handleDisplayText();
  };
  const handleDisplayText = () => {
    if (mode === "dark") {
      setDisplayText("Go Dark Mode");
    } else {
      setDisplayText("Go Light Mode");
    }
  };
  return (
    <Router>
      <div style={{ paddingTop: "56px", paddingBottom: "56px" }}>
        <Navbar
          title="The Ultimate Text App"
          mode={mode}
          toggleMode={toggleMode}
          displayText = {displayText}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={<Home mode={mode} toggleMode={toggleMode} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
