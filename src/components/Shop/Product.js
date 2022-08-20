import React from "react";
import { FaExpand, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context";
const Product = ({ id, title, img, price, inCart }) => {
  const {showModal, addToCart} = useGlobalContext();
  return (
    <ProductContainer className="col-12 col-lg-6 col-xl-4">
      <div className="img-container p-2 d-flex justify-content-center">
        <img src={img} alt={title} className="img-fluid" />
        <div className="hover-text d-flex align-items-end">
          <div className="p-1 px-2 bg-black text-white d-flex justify-content-between align-items-center">
            <button
              className="btn p-0 h6 text-white m-0"
              disabled={inCart ? true : false}
              onClick={()=>{
                addToCart(id)
                showModal(id);
              }}
            >
              {inCart ? <p disabled={inCart ? true : false}>In Cart</p> : <p className="d-flex align-items-center"><i className="mb-1 pe-1"><FaShoppingCart /></i> ADD TO CART</p>}
            </button>
            <Link to={`/product/${id}`} className="text-black">
              <i className=" text-white h6">{<FaExpand />}</i>
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center p-2 bg-light">
        <h4 className="h6 text-uppercase my-1">{title}</h4>
        <p>${price}</p>
      </div>
    </ProductContainer>
  );
};

const ProductContainer = styled.article`
  /* overflow: hidden; */

  .img-container {
    position: relative;

    .hover-text {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.2);
      transition: all 0.7s;
      opacity: 0;
      overflow: hidden;
      & > * {
        width: 100%;
        transform: translateY(100%);
        transition: all .5s;
      }
    }
  }
  &:hover {
    .hover-text {
      opacity: 1;
      & > * {
        transform: translateY(0);
      }
    }
  }
  img {
    height: 300px;
    transform: scale(0.8);
  }
  button{
    border-radius: 0;
    border: none;
  }
`;

export default Product;
