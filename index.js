import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="wrapper">
          <Routes>
            <Route path={'/'} exact element={<Home />} />
            <Route path={'/products'} exact element={<ProductList />} />
            <Route path={'/products/:id'} exact element={<ProductDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

render(<App />, document.getElementById('root'));
