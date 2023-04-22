import React from "react";

import "./features.css";

export default function Features() {
  return (
    <div id="card">
      <div className="card-box">
        <img alt="logo" src={require("../images/feature/easy.png")} />
        <div>
          <h1 className="card-title">Easy to use</h1>
        </div>
      </div>

      <div className="card-box">
        <img alt="logo" src={require("../images/feature/lang.png")} />
        <div>
          <h1 className="card-title">Language</h1>
        </div>
      </div>

      <div className="card-box">
        <img alt="logo" src={require("../images/feature/code.avif")} />
        <div>
          <h1 className="card-title">Run your code</h1>
        </div>
      </div>

      <div className="card-box">
        <img alt="logo" src={require("../images/feature/practice.jpg")} />
        <div>
          <h1 className="card-title">Practice </h1>
        </div>
      </div>
    </div>
  );
}
