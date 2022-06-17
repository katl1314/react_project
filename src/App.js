import "./App.css";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
// import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
