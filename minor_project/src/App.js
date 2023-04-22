import React from "react";
import Navbar from "./components/navbar";

import "./App.css";
import Feature from "./components/Features";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="box">
        <h3>ONLINE CODE EDITOR</h3>
        <div id="intro">
          <p>
            Online compilers or code editors are tools which allows you to
            compile source code and execute it online in your desired
            programming language. They significantly reduce the hardware and
            software needed by programmers to work on any given project by
            storing and executing source code online. The compiler is essential
            for execution of the program. It transforms text-based source code
            into object code, an executable file type. Every system would take
            up a lot of space if the compiler were forced to run manually. It
            would also need to be properly configured if it wasn't installed
            using the default parameters. The majority of apps and the
            interfaces that go along with them in today's environment operate
            online. Therefore, these online tools are very helpful.
          </p>
        </div>
      </div>
      <div id="feature">
        <Feature />
      </div>
    </div>
  );
}
