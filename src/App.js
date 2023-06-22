import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

const Home = lazy(() => import('./components/pages/Home'));
const Events = lazy(() => import('./components/pages/Events'));
const Merch = lazy(() => import('./components/pages/Merch'));
const SignUp = lazy(() => import('./components/pages/SignUp'));

function App() {
  return (
    <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Suspense fallback={<h1>Loading Homepage...</h1>}><Home /></Suspense>} />
                <Route path="/events" element={<Suspense fallback={<h1>Loading Events...</h1>}><Events /></Suspense>} />
                <Route path="/merch" element={<Suspense fallback={<h1>Loading Merch...</h1>}><Merch /></Suspense>} />
                <Route path="/sign-up" element={<Suspense fallback={<h1>Loading SignUp...</h1>}><SignUp /></Suspense>} />
            </Routes>
            <Footer />
        </Router>
    </>
  );
}

export default App;
