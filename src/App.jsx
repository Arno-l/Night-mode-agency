import React from "react";
import {
    Routes,
    Route,
} from 'react-router-dom';
import Home from "pages/Home";
import About from "pages/About";
import Works from "pages/Works";
import Navbar from "components/Navbar";
import ThemeContextProvider from "Context";


const App = () => {

    return (
        <>
        <ThemeContextProvider>
            <Navbar />
            <main className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/works/*" element={<Works />} /> 
            </Routes>
        </main>
        </ThemeContextProvider>
        </>
    )
}

export default App;