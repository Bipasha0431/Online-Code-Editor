import React from "react";
import HomeNav from "../homenav";
import "./Q.css";
function Q2() {
  function runTests() {
    let btn = document.getElementById("runtestsbtn");
    btn.style.display = "none";
    document.getElementById("results").innerHTML = "Running...";

    const code = document.getElementById("code").value;
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("results").innerHTML = xhr.responseText;
        btn.style.display = "initial";
      }
    };

    xhr.open("POST", "http://localhost:8000/test/");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("code=" + code + "1");
  }
  return (
    <div>
      <HomeNav />
      <div class="containerQuestion">
        <div class="question">
          <h2>QUESTION :</h2>
          <div>
            Find the minimum number in an array of integers. For example, in the
            array [1, -3, 5], the minimum number is -3.
          </div>
        </div>
        <div class="code-area">
          <h1>Input:</h1>
          <textarea class="input" id="code" autofocus>
            def solution(arr):
          </textarea>

          <button id="runtestsbtn" onClick={runTests}>
            RUN TESTS
          </button>
          <h1 className="output">Output:</h1>
          <span id="results"></span>
        </div>
      </div>
    </div>
  );
}

export default Q2;
