import React from "react";
import styled from "styled-components";
import { FaFunnelDollar } from "react-icons/fa";
import { useGlobalContext } from "../context";
import Product from "./Product";
import logo from "../../logo.png";
const ProductsContainer = () => {
  const { filteredProducts, openFilterBar, filterBySearch } =
    useGlobalContext();
  return (
    <Container className="py-3 py-md-5 px-3">
      <img src={logo} className="d-block d-md-none mt-4" />
      {/* search box */}
      <input
        type="text"
        className="form-control rounded-pill d-inline-block me-2 mt-5"
        placeholder="Search Product"
        onChange={(e) => {
          filterBySearch(e.target.value);
        }}
      />
      <div
        className="mt-3 bg-light d-inline-block p-2 h5 d-md-none"
        onClick={openFilterBar}
      >
        <FaFunnelDollar />
      </div>
      <div className="row g-3 mt-5">
        {filteredProducts.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Container>
  );
};

const Container = styled.section`
  margin-left: 300px;
  input {
    max-width: 280px !important;
    &:focus {
      box-shadow: none;
      outline: none;
    }
  }
  @media screen and (max-width: 767px) {
    margin-left: 0px;
  }
`;

export default ProductsContainer;
