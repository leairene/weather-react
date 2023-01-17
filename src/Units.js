import React from "react";

import "./Units.css";

export default function Units() {
    return (
      <span className="Units">
        <a href="/" id="celsius-symbol">
          Cº
        </a>
        |
        <a href="/" id="fahrenheit-symbol">
          Fº
        </a>
      </span>
    );
}