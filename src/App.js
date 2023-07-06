import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Events from "./pages/Events";
import Merch from "./pages/Merch/Merch";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./pages/Merch/ProductDetails";

function App() {
  return (
    <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/merch" element={<Merch />} />
                <Route path="/details/:id" element={<ProductDetails />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
            <Footer />
        </Router>
    </>
  );
}

export default App;
