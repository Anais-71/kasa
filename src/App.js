// React
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Error from './components/error/Error'

//Pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Housing from './pages/housing/Housing';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/logement/:id' element={<Housing />} /> 
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
