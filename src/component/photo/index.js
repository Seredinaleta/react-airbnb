import React from "react";
import "./index.css";

export default function Photo({ url, name }) {
  return <img className="image" alt={name} src={url} />;
}
