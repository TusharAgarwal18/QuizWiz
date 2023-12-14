//import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";


const Card = ({ title, imageUrl, body, quizUrl }) => {
  // let [click, setClick] = useState(0);
  // const increment = () => {
  //   setClick(++click);
  // };
  return (
    <>
      <div className="card-container">
        <div className="image-container">
          <img src={imageUrl} alt="" />
        </div>

        <div className="card-content">
          <div className="card-title">
            <h3>{title}</h3>
          </div>
          <div className="card-body">
            <p>{body}</p>
          </div>
        </div>

        <div className="btn">
          <button>
            <Link to={quizUrl}>Take Quiz</Link>
          </button>
          {/* <button onClick={increment}>{click}</button> */}
        </div>
      </div>
    </>
  );
};

export default Card;
