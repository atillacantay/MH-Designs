import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

import logo from ".././logo.svg";
import "../App.css";

export default function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Monday Hero presents</p>
        <a
          className="App-link"
          href="https://mondayhero.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out Monday Hero!
        </a>
        <Link to="/test">
          <Button>Go to test page!</Button>
        </Link>
      </header>
    </div>
  );
}
