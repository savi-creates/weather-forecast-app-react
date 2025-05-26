import React from "react";
import { BeatLoader } from "react-spinners";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="Loader-container">
      <BeatLoader color="#f65282" size={15} />
    </div>
  );
}
