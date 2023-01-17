import React from "react";

import "./Units.css";

export default function Units() {
  return (
    <span className="Units">
      <a href="/" id="celsius-symbol" rel="noreferrer">
        Cº
      </a>
      |
      <a href="/" id="fahrenheit-symbol" rel="noreferrer">
        Fº
      </a>
    </span>
  );
}
