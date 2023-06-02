import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BookingForm from './components/Bookingform';
import Summary from './components/Summary';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/Summary/:id" element={<Summary/>} />
        <Route path="/book/:id" element={<BookingForm/>} />
      </Routes>
    </Router>
  );
}

export default App;

