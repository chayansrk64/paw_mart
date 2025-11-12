import React from 'react';
import Banner from '../../components/Banner/Banner';
import RecentListings from '../../components/RecentListings/RecentListings';
import AdoptionAwareness from '../../components/AdoptionAwareness/AdoptionAwareness';
import PetHeroes from '../../components/PetHeroes/PetHeroes';

const listingsPromise = fetch('http://localhost:3000/listings').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentListings listingsPromise={listingsPromise}></RecentListings>
            <AdoptionAwareness></AdoptionAwareness>
            <PetHeroes></PetHeroes>
        </div>
    );
};

export default Home;