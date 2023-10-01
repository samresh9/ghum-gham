import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from './pages/SharedLayout.jsx';
import ContactForm from './pages/Contact.jsx';
import About from './pages/About.jsx';
import App from './App.jsx'
import "./App.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
          <Route index element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
