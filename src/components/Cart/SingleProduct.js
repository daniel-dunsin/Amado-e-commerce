import React from 'react';
import styled from 'styled-components';
import { FaTimes, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useGlobalContext } from '../context';
const SingleProduct = ({ id, title, price, count, total, img }) => {
    const {editItemCount, removeItem} = useGlobalContext();
    return <SingleProductContainer className='py-2 row'>
        <div className="col-md-5 col-4 d-md-flex justify-content-start align-items-center d-block text-md-start text-center">
            <img src={img} alt="" className='img-fluid' />
            <div className='mt-md-0 mt-3 mx-0 mx-md-2'>
                <p className='text-capitalize fw-bold mb-1'>{title}</p>
                <p className='fw-bold'>{price}</p>
            </div>
        </div>
        <div className='col-md-3 col-4 text-center d-flex justify-content-center align-items-center'>
            <i onClick={()=>{editItemCount(id, 'decrease')}}><FaChevronLeft /></i>
            <p>{count}</p>
            <i onClick={()=>{editItemCount(id, 'increase')}}><FaChevronRight /></i>
        </div>
        <div className='col-2 fw-bold text-center d-flex justify-content-center align-items-center'>${total}</div>
        <div className='col-2 d-flex justify-content-center align-items-center'>
            <i className='remove-btn' onClick={()=>{removeItem(id)}}><FaTimes /></i>
        </div>
    </SingleProductContainer>
}


const SingleProductContainer = styled.article`
    img{
        width: 90px;
    }
    p{
        line-height: 1.2;
    }
    .remove-btn{
        width: 30px;
        height: 30px;
        margin: auto;
        background-color: lightgrey;
        display: grid;
        place-items: center;
        border-radius: 50%;
    }
`

export default SingleProduct