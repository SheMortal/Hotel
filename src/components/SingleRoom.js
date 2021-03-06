import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/Styled-Hero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  // componentDidMount(){
  // }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!roo) {
      return (
        <div className="error">
          <h3>Room could not be found..</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={mainImg[0] || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-ifo">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price: R{price}</h6>
              <h6>Size: {size} SQFT</h6>
              <h6>Max Capacity : {" "}
                {capacity > 1 ? `${capacity} people`: `${capacity} person`}
              </h6>
              <h6>{pets? "pets allows": "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
          {extras.map((item, index)=>{
            return <li key={index}>~{item}</li>
          })}
          </ul>
        </section>
        <section className="bookings">
          <button className="btn-primary">Book Now!</button>
        </section>
      </>
    );
  }
}
