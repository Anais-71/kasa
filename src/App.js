// React
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Error from './components/error/Error'

//Pages
import Home from './pages/Home';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
