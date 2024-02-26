import React from "react";
import "../../styles/Sustainability.css";
import "../../styles/animate.css";
import Leaf from "../../images/sustainability/green_leaf.svg";

const GiveBack = () => {
  return (
    <div className="together-sus">
      <div className="container">
        <div style={{ marginBottom: "50px" }}>
          <h1 className="sus-big" style={{ marginTop: "25px" }}>
            give back
          </h1>
          <h4 className="sus-blue">How We're Making a Difference</h4>
        </div>
        <div className="leaf-div">
          <img src={Leaf} alt="" className="sus-leaf" />
          <p className="basic">
            We recycle all boxes and corrugated materials within the office and
            distribution center.
          </p>
        </div>
        <div className="leaf-div">
          <img src={Leaf} alt="" className="sus-leaf" />
          <p className="basic">
            We allocated a separate machine for compacting cardboard materials.
          </p>
        </div>
        <div className="leaf-div">
          <img src={Leaf} alt="" className="sus-leaf" />
          <p className="basic">
            We utilize green void fill packaging in the form of recyclable air
            pillows and/or paper fill when packing out boxes.
          </p>
        </div>
        <div className="leaf-div">
          <img src={Leaf} alt="" className="sus-leaf" />
          <p className="basic">
            Our Waukegan headquarters utilizes a BAS HVAC system to efficiently
            control airflow throughout the building with automatic settings to
            detect when people are in the building and to adjust temperatures
            locally and only as needed.
          </p>
        </div>
        <div className="leaf-div">
          <img src={Leaf} alt="" className="sus-leaf" />
          <p className="basic">
            We maintain partnerships with eco-friendly suppliers, ensuring our
            top-tier suppliers reflect our corporate values.
          </p>
        </div>
        <div className="leaf-div">
          <img src={Leaf} alt="" className="sus-leaf" />
          <p className="basic">
            We developed a partnership with Fill it Forward to encourage
            employee hydration while simultaneously giving back to communities
            in need of safe drinking water.
          </p>
        </div>
        <div className="leaf-div">
          <img src={Leaf} alt="" className="sus-leaf" />
          <p className="basic">
            We acquired battery recycling bins for our Waukegan headquarters.
          </p>
        </div>
        <div className="leaf-div">
          <img src={Leaf} alt="" className="sus-leaf" />
          <p className="basic">
            Our Waukegan headquarters is home to an Overture garden, maintained
            by staff.
          </p>
        </div>
        <div className="leaf-div">
          <img src={Leaf} alt="" className="sus-leaf" />
          <p className="basic">
            We always offer clients an extensive, curated selection of
            sustainable promotional products.{" "}
          </p>
        </div>
        <div className="leaf-div">
          <img src={Leaf} alt="" className="sus-leaf" />
          <p className="basic">
            We ensure our overseas sources are certified for product safety,
            social accountability, and environmental stewardship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GiveBack;
