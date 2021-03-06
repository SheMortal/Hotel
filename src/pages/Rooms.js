import React, { Component } from 'react';
import Hero from "../components/Hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
import Footer from "../components/footer";

class Rooms extends Component {
    render() {
        return (
            <>
            <Hero hero="roomsHero">
                <Banner title="our rooms">
                <Link to='/Transylvenia' className="btn-primary">
                return home
                </Link>
                </Banner>
            </Hero>
            <RoomsContainer></RoomsContainer>
            <Footer></Footer>
            </>
        );
    }
}

export default Rooms;
