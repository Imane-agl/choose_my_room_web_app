import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        // console.log(this.props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg,
        };
    }
    static contextType = RoomContext;
    // componentDidMount() {

    
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        
        
        if (!room) {
            return (
                <div className="error">
                    <h3>no such room could be found...</h3>
                    <Link to="/rooms" className="btn-primary">
                        Retour aux chambres
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
            images
        } = room;
        
        const [mainImg, ...defaultImg] = images;
        
        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name}`}>
                        <Link to="/rooms" className="btn-primary">
                            Retour aux chambres
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                        return <img key={index} src={item} alt={name} />;
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Description</h3>
                            <h6>Prix: {price} Dhs</h6>
                            <h6>Surface : {size} SQFT</h6>
                            <h6>
                                Capacit?? maximale :{" "}
                                {capacity > 1 ? `${capacity} personnes` : `${capacity} personne `}
                            </h6>
                            
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>PLus</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>;
                        })}
                    </ul>
                </section>
            </>     
        );  
    }
}
