import React from 'react';
import { Register } from '../routes/Register';
import { BarNavegation } from '../components/BarNavegation';

export const Init = () => {

  const downSignup = () => {
    window.scrollBy({
      top: 700,
      behavior: 'smooth',
    });
  }
  return (
    <>
      <BarNavegation />
      <div className='image'></div>
      <div className='welcome'>
        <h2>Welcome to the place where you can keep your most beautiful memories</h2>
        <h3>Register so you can store your images completely free</h3>
      </div>
        <button className='btnDown' onClick={downSignup}>
          <img src="../img/avance-rapido.png" alt="" />
        </button>
      <Register/>
    </>
  );
}
