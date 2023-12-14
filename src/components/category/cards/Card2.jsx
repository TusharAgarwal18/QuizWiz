import { Link } from "react-router-dom";
import "./Card2.css";

const Card = ({ title, imageUrl, body, quizUrl }) => {
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
