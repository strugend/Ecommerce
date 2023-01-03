import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import PopularProducts from '../PopularProducts/PopularProducts';
import ProductCategory from '../ProductCategory/ProductCategory';

const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <ProductCategory></ProductCategory>
            <PopularProducts></PopularProducts>
        </>
    );
};

export default Home;