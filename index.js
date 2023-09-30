import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <div className="wrapper">
            <Routes>
              <Route path={'/'} exact element={<Home />} />
              <Route path={'/products'} exact element={<ProductList />} />
              <Route path={'/cart'} exact element={<Cart />} />
              <Route path={'/products/:id'} exact element={<ProductDetail />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

render(<App />, document.getElementById('root'));
