import React from "react";
import styled from "styled-components";
import logo from "../../logo.png";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <HomeHeader className="header">
      <div className="container-xl mx-auto">
        <div className="header-img">
          <img src={logo} alt="" />
        </div>
        <div className="row">
          <div className="col-md-8 text-md-start">
            <p className="text-danger text-uppercase fw-bold h5">
              summer collection
            </p>
            <h1 className="fw-bold text-uppercase display-5 mt-4 mb-1">
              fall-winter collection 2022
            </h1>
            <p className="mb-3 mt-2">
              A specialist label creating luxury essentials ethically crafted
              with an unwavering commitement to exceptional quality
            </p>
            <Link to="/shop">
              <Button
                bg="mainBlack"
                className="btn px-5 py-3 rounded-none bg-black text-white"
              >
                SHOP NOW <i className="align-middle ms-1">{<FaArrowRight />}</i>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </HomeHeader>
  );
};

const HomeHeader = styled.header`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  p {
    line-height: 1.2;
  }
  .container-xl {
  }
  .header-img {
    position: absolute;
    top: 2rem;
    left: 2rem;
  }
  .container-xl {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .row {
      width: 100%;
    }
  }
`;

export default Home;
