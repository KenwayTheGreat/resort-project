import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Enjoy our Fresh Cocktails that are made with love !"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Enjoy an Epic Limitless Hiking Adventures !"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Feel free to explore our Amazing City using our Free Shuttles !"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Challenge Yourself and taste and endure our Strongest Beer !"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
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
