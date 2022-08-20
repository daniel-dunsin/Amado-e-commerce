import React, { useRef } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import logo from "../../logo.png";
import SingleFilterItem from "./SingleFilterItem";
import ProductsContainer from "./ProductsContainer";
import { FaTimes } from "react-icons/fa";
const Shop = () => {
  const refer = useRef(null);
  const { allFilterParameters, closeFilterBar, isFilterBarOpen, filterProducts, clearFilter } =
    useGlobalContext();

  return (
    <ShopContainer>
      <article
        className={`filters-container bg-light pt-4 ${isFilterBarOpen ? "open-filterbar" : ""
          }`}
      >
        <header className="d-flex justify-content-between align-items-center mb-5 px-4">
          <img src={logo} alt="" className="mt-1 px-2"/>
          <div
            className="h2 text-danger d-md-none d-block"
            onClick={closeFilterBar}
          >
            {<FaTimes />}
          </div>
        </header>
        {Object.keys(allFilterParameters).map((key) => {
          return (
            <SingleFilterItem
              key={key}
              details={key}
              allFilterParameters={allFilterParameters}
            />
          );
        })}
        <div className="mt-4 p-2 text-center">
          <button className="btn btn-warning rounded-sm px-4 py-2 mx-1" onClick={() => {
            filterProducts();
            // for smaller screens only
            setTimeout(closeFilterBar, 1000);
          }}>
            Filter
          </button>
          <button className="btn bg-black text-white rounded-sm px-4 py-2 mx-1" onClick={clearFilter}>
            Clear Filter
          </button>
        </div>
      </article>
      <ProductsContainer />
    </ShopContainer>
  );
};

const ShopContainer = styled.section`
  .filters-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    min-height: 100vh;
    z-index: 10;
  }
  @media screen and (max-width: 767px) {
    .filters-container {
      width: 100%;
      transition: all .5s;
      transform: translateY(-100%);
      img {
        display: block;
        padding: 0 5rem;
      }
      &.open-filterbar{
        transform: translateY(0);
      }
    }
  }
`;

export default Shop;
