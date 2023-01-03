import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import PopularProducts from '../PopularProducts/PopularProducts';
import ProductCategory from '../ProductCategory/ProductCategory';
import AdvertiseSection from '../AdvertiseSection/AdvertiseSection';

const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <ProductCategory></ProductCategory>
            <PopularProducts></PopularProducts>
            <AdvertiseSection></AdvertiseSection>
        </>
    );
};

export default Home;