import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from './Product';

const PopularProducts = () => {
    return (
        <Container>
            <div className='d-md-flex justify-content-between'>
                <h3 className='text_bg_color'>Popular Products</h3>
                <div>
                    <button className='btn btn-outline-primary ms-2'>Camera</button>
                    <button className='btn btn-outline-primary ms-2'>Tablet</button>
                    <button className='btn btn-outline-primary ms-2'>Mobile</button>
                    <button className='btn btn-outline-primary ms-2'>Games</button>
                </div>
            </div>
            <Row className='mt-4'>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </Row>
        </Container>
    );
};

export default PopularProducts;