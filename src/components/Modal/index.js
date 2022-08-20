import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import image from '../../images/modal image.jpg';
import Color from '../Color';
import { Link } from 'react-router-dom';
const Modal = () => {
    const { modal: { isModalOpen, modalContent }, closeModal } = useGlobalContext();
    const { title, price, info } = modalContent;
    return <>
        {isModalOpen && <ModalOverlay>
            <div className="modal-content bg-white rounded row g-0">
                <div className="col-6 d-md-block d-none">
                    <img src={image} className='img-fluid' />
                </div>
                <div className="col-12 col-md-6 p-3">
                    <p className='text-uppercase fw-bold mb-2'>Item has been added to cart!</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className='text-uppercase p-0 m-0'>{title}</h5>
                        <p className='lead m-0 p-0'>${price}</p>
                    </div>
                    <p className='info mt-2 mb-3'>
                        {info}
                    </p>
                    <button className="btn btn-warning" onClick={closeModal}>CONTINUE SHOPPING</button>
                    <Link to='/cart'><button className="btn bg-black text-white" onClick={closeModal}>GO TO CART</button></Link>
                </div>
            </div>
        </ModalOverlay>}
    </>
}

const ModalOverlay = styled.article`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,.8);
    z-index: 12;
    display: grid;
    place-items: center;
    .modal-content{
        width: 90vw;
        max-width: 600px;
        margin: 0 auto;
        height: 380px;
        overflow: hidden;
        & > *{
            height: 100%;
            
            img{
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
            .info{
                font-size: .84rem;
                word-wrap: break-word;
                line-height: 1.2;
            }
            button{
                width: 100%;
                margin: .2rem 0;
                border-radius: 5px !important;
                padding-top: .8rem;
                padding-bottom: .8rem;
            }
        }
    }
`

export default Modal