import React from "react";
import "../../styles/Diversity.css";
import "../../styles/animate.css";
import ImageOne from "../../images/diversity/diversity_one.jpg";
import ImageTwo from "../../images/diversity/diversity_two.jpg";
import ImageThree from "../../images/diversity/diversity_three.jpg";
import DiversityIcon from "../../images/diversity/diversity_full.svg";

const BlockImages = () => {
  return (
    <div className="block-images">
      <div className="container">
        <div className="row block-row">
          <div className="col-md-6">
            <img src={ImageOne} alt="" className="diverse-img" />
          </div>
          <div className="col-md-6">
            <h1 className="diversity-big">diverse</h1>
            <h4 className="diversity-blue">
              We Value Diversity, Equity, & Inclusion
            </h4>
            <div className="strange-div">
              <img
                style={{ height: "150px", marginRight: "25px" }}
                src={DiversityIcon}
                alt=""
              />
              <span className="basic">
                We don’t just believe in diversity, we live it. We’re
                minority-owned and women-led. Our employee-led Diversity &
                Inclusion Advisory Council (DIAC) works tirelessly to ensure our
                employees and clients are not only heard, but also feel
                respected and valued.
              </span>
            </div>
          </div>
        </div>
        <div className="row block-row">
          <div className="col-md-6">
            <h1 className="diversity-big">inclusive</h1>
            <img src={ImageTwo} alt="" className="diverse-img mobile-melissa" />
            <h4 className="diversity-green">
              Overture's Diversity & Inclusion Advisory Council
            </h4>
            <p className="basic">
              The DIAC is a volunteer team of Overture employees who are
              passionate about diversity, equity, and inclusion. We meet every
              two weeks to create and propose diversity-related initiatives and
              strategies to the management team. We value communication and
              transparency as tools for education and acceptance. We are leading
              the charge in ensuring Overture walks the walk when it comes to
              its culture of inclusivity, diversity, and equity.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={ImageTwo}
              alt=""
              className="diverse-img desktop-melissa"
            />
          </div>
        </div>
        <div className="row block-row">
          <div className="col-md-6">
            <img src={ImageThree} alt="" className="diverse-img" />
          </div>
          <div className="col-md-6">
            <h1 className="diversity-big">informed</h1>
            <h4 className="diversity-orange">DIAC's Mission Statement</h4>
            <p className="basic">
              <strong>
                Our first project as a team was to develop our mission
                statement:
              </strong>{" "}
              Overture is an involved, informed, and inclusive organization that
              accepts, celebrates, and showcases the uniqueness of our
              workforce. Weird is cool. Different is ideal. Identity is
              ever-evolving. Diversity is how we grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockImages;
