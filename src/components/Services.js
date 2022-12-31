import React, { Component } from 'react'
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";


export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaCocktail />,
                title: "Des restaurants luxieux",
                info: "Des repas gratuits inclus dans vos réservations vous permettant de profiter au maximum de vos sejours au sein de nos hotels "
            },
            {
                icon: <FaHiking />,
                title: "Loisirs",
                info: "une offre de chaîne TV, une location de films ou un accès à une plateforme vidéo est indispensable. Le confort et la satisfaction du client sont ainsi au rendez-vous."
            },
            {
                icon: <FaShuttleVan />,
                title: "Transport Gratuit",
                info: " la réception se charge de vous réserver un taxi, pour vos déplacements vers l’aéroport, vers d’autres villes, etc."
            },
            
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}
