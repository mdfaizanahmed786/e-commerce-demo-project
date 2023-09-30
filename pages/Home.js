import React from 'react';
import { Button } from 'react-bootstrap';
import Slider from '../components/Home/Slider';
import Products from '../components/Home/Products';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Slider />
      <Products />
      <div className="w-100 d-flex justify-content-center">
        <Button onClick={() => navigate('/products')} className="mt-4 ">
          Explore More Products
        </Button>
      </div>
    </>
  );
}

export default Home;
