import React from 'react';
import styled from 'styled-components';
import SingleProduct from './SingleProduct';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
const Cart = () => {
  const { cart, allTotal } = useGlobalContext();
  const { total, subtotal, tax } = allTotal;
  return <Container className='container'>
    <Link to='/'>
      <img src={logo} className='w-100' />
    </Link>
    <header className='p-4 bg-light mb-5'>
      <h2>SHOPPING CART</h2>
      <p>Home {'>'} Shop {'>'} <span className='fw-bold'>Shopping Container</span></p>
    </header>

    {
      cart.length > 0 ? <div className="main-cart-contianer row justify-content-between align-items-start p-1">
        <section className="cart-table col-md-8">
          <article className='row py-2 border-bottom border-1 border-secondary'>
            <h6 className="col-md-5 col-4 fw-bold">PRODUCT</h6>
            <h6 className='col-md-3 col-4 fw-bold text-center'>QUANTITY</h6>
            <h6 className='col-2 fw-bold text-center'>TOTAL</h6>
            <h6 className='col-2'></h6>
          </article>
          {
            cart.length > 0 ? cart.map(item => <SingleProduct key={item.id} {...item} />) : null
          }
        </section>
        <section className="total-container col-md-3 p-4 bg-light">
          <h4 className='fw-bold mb-4'>CART TOTAL</h4>
          <div className="row">
            <p className="col-6 text-start mb-1">SUBTOTAL: </p>
            <p className="col-6 text-end fw-bold">${subtotal}</p>
            <p className="col-6 text-start mb-1">TAX: </p>
            <p className="col-6 text-end fw-bold">${tax}</p>
            <p className="col-6 text-start mb-1">TOTAL: </p>
            <p className="col-6 text-end fw-bold">${total}</p>
          </div>
          <button className="w-100 rounded-0 bg-black btn text-white mt-2">PROCEED TO CHECKOUT</button>
        </section>
      </div> : <h1 className='text-center display-1 fst-italic'>YOUR CART IS CURRENTLY EMPTY</h1>
    }
  </Container>
}

const Container = styled.main`
  padding-top:7rem;
  padding-bottom: 4rem;
  position: relative;
  & > a{
    position: absolute;
    top: 2.5rem;
    left: 1rem;
  }
`

export default Cart