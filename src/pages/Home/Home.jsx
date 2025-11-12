import React from 'react';
import Banner from '../../components/Banner/Banner';
import RecentListings from '../../components/RecentListings/RecentListings';

const listingsPromise = fetch('http://localhost:3000/listings').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentListings listingsPromise={listingsPromise}></RecentListings>
        </div>
    );
};

export default Home;