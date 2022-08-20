import React, { useState } from 'react';
import Button from '../Button'
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import StarsContainer from './StarsContainer';
import Color from '../Color';
import logo from '../../logo.png'
const SingleProduct = () => {
  const { getSpecificProduct, showModal, addToCart, cart } = useGlobalContext();
  const { id } = useParams();
  const product = getSpecificProduct(id);
  const [mainImg, setMainImg] = useState(null);
  const [itemCount, setItemCount] = useState(0);
  const { title, img, price, info, otherImg, colors, categories, stars, sizes } = product;
  const inCart = cart.find(item => item.id == id);
  return (
    <ProductContainer className='container'>
      <Link to='/'><img src={logo} className='w-100' alt="" /></Link>
      <h6 className='text-capitalize fw-bold'>{`Home > ${categories[0]} > ${title}`}</h6>
      <div className="row mt-2 mt-md-5 gx-4 gy-5 justify-content-md-between">
        <div className='col-md-5'>
          <div className='border border-1 border-black d-flex justify-content-center align-items-center main-image-container p-2'>
            <img src={mainImg || img} className='img-fluid' alt="" />
          </div>
          <div className='row g-1 mt-1'>
            {
              otherImg.map((image, index) => {
                return <div key={index} className='small-images-container col-3 d-flex justify-content-center align-items-center' onClick={() => { setMainImg(image) }}>
                  <img src={image} alt={image} />
                </div>
              })
            }
          </div>
        </div>
        <div className='col-md-6'>

          <h3 className='text-uppercase fw-bold mb-0 pb-0'>{title}</h3>
          <p className="lead">${price}</p>
          <StarsContainer starsCount={stars} />

          <p className='info mb-2'>{info}</p>
          <select className='w-25 p-1 text-capitalize border border-2 rounded'>
            {
              sizes.map((size, index) => {
                return <option value={size} key={index} className='text-capitalize'>{size}</option>
              })
            }
          </select>
          <input type="number" className='p-1 mx-2 rounded' min='0' value={itemCount} onChange={(e) => setItemCount(e.target.value)} />
          <section className='my-2'>
            <p className='d-block fw-bold'>Colors Available: </p>
            {colors.map((color, index) => {
              return <Color key={index} bg={color} className='rounded-circle me-2 d-inline-block' />
            })}
          </section>
          <Button className='btn btn-lg rounded-none btn-warning d-block my-4 d-flex justify-content-center align-items-center' disabled={inCart ? true : false} onClick={() => {
            addToCart(id, itemCount == 0 ? 1 : itemCount);
            showModal(id);
          }}>
            {inCart ? <p disabled={inCart ? true : false}>In Cart</p> : <h5 className="d-flex align-items-center mt-1"><i className="pe-1"><FaShoppingCart /></i> ADD TO CART</h5>}
          </Button>
        </div>
      </div>
    </ProductContainer>
  )
}

const ProductContainer = styled.main`
  padding-top: 7rem;
  padding-bottom: 4rem;
  position: relative;
  & > a{
    position: absolute;
    top: 2.5rem;
    left: 1rem;
  }
  img{
    width: 100%;
    
    object-position: center;
    object-fit: cover;
  }
  .main-image-container{
    img{
      max-height: 400px;
    }
  }
  .small-images-container{
    img{
      min-height: 100px;
      max-height: 100px;
    }
  }
  select, input{
    outline: none;
    border-color: black !important;
  }
  input{
    width: 50px;
  }
  .info{
    font-size: .8rem;
  }
`

export default SingleProduct