import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import Services from '../components/services';
import Footer from "../components/footer";
// import Rewards from "../components/rewardsmember";


export default function Home() {
    return (
        <div className="Home">
            <Hero>
            <Banner title="Hotel Trasylvania" subtitle="NO HUMANS ALLOWED">
                <Link to="/rooms" className="btn-primary">our rooms
                </Link>
            </Banner>
            </Hero>
            <Services></Services>
            {/* <Rewards></Rewards> */}
            <Footer></Footer>
            
        </div>
    )
}

