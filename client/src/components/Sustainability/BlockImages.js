import React from "react";
import "../../styles/Sustainability.css";
import "../../styles/animate.css";
import ImageOne from "../../images/sustainability/sus_one.jpg";
import ImageTwo from "../../images/sustainability/sus_two.jpg";

const BlockImages = () => {
  return (
    <div className="block-images">
      <div className="container">
        <div className="row block-row">
          <div className="col-md-6">
            <img src={ImageOne} alt="" className="sus-img" />
          </div>
          <div className="col-md-6">
            <h1 className="sus-big">volunteer</h1>
            <h4 className="sus-orange">Overture's Green Team</h4>
            <p className="basic">
              The Green Team is a volunteer group of self-proclaimed,
              tree-hugging Overture employees who are passionate about
              motivating us all to do more. They meet bi-weekly to create and
              propose sustainability-related initiatives to the management team,
              and execute them once approved. We believe no initiative is too
              small and no idea is too big when it comes to making Overture a
              greener place to work.
            </p>
          </div>
        </div>
        <div className="row block-row flippy-stuff">
          <div className="col-md-6">
            <h1 className="sus-big">grow</h1>
            <h4 className="sus-green">The Green Team's Mission Statement</h4>
            <p className="basic">
              Overture is committed to conducting business in an environmentally
              responsible manner and educating our clients, employees, and the
              public on best, eco-friendly practices. We are dedicated to annual
              growth in improving the quality of the environment.
            </p>
          </div>
          <div className="col-md-6">
            <img src={ImageTwo} alt="" className="sus-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockImages;
