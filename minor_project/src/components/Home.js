import React from "react";
import Homenav from "./homenav";
import "./Home.css";
import card1 from "../images/card1.jpeg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.png";
export default function Home() {
  return (
    <div className="mainpge">
      <Homenav />

      <h1 className="feature">Features</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={card1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Run Your Code</h5>
                <p className="card-text">
                  It allows the user to compile their own code. Even without
                  registering the user can solve their problem
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={card2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Practice Questions</h5>
                <p className="card-text">
                  To improve coding , Practice questions are also included. A
                  list of questions on different topics are available. User can
                  check the progress in the dashboard section.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={card3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Language</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
