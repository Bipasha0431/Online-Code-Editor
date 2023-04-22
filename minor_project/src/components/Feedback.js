import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./homenav";
import bgImg from "../images/img2.webp";
import "./feedback.css";

function Feedback() {
  const navigate = useNavigate();

  const [feed, setfeedback] = useState({
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setfeedback({
      ...feed,
      [name]: value,
    });
  };

  const feedback = () => {
    const { feedback } = feed;
    // alert("Thanks for your feedback")
    axios.post("http://localhost:8000/feedback", feed).then((res) => {
      alert(res.data.message);
      navigate("/Feedback");
    });
  };
  return (
    <div>
      <Navbar />
      <section>
        <div className="f_box">
          <h2>Feedback</h2>
          <div className="ff_box">
            <div id="f_form" className="coll-1 ">
              <input
                type="text"
                name="feedback"
                value={feed.feedback}
                placeholder="Enter your feedback"
                onChange={handleChange}
              />
              <Link className="btnn" onClick={feedback}>
                SUBMIT
              </Link>
            </div>

            <div className="col-2">
              <img src={bgImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feedback;
