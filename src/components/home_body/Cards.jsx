import Card from "./Card";
import Carousel from "@itseasy21/react-elastic-carousel";
import image1 from "../../images/tech1.jpg";
import image2 from "../../images/sports1.jpg";
import image3 from "../../images/movies1.jpg";
import homeSec2 from "../../images/homeSec2.png";
import "./Cards.css";

export const Cards = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <>
      <div className="homeSec">
        <img src={homeSec2} alt="homeSection" />
      </div>
      <div className="top-ctg-heading">
        <h1>Top Catgories</h1>
      </div>
      <div className="parent-home">
        <Carousel breakPoints={breakPoints}>
          <div className="child">
            <Card
              title="Technology"
              imageUrl={image1}
              body="Test your tech prowess with our engaging and informative quiz, designed to challenge and expand your knowledge in the ever-evolving world of technology."
              quizUrl="categories/tech/quiz"
            />
          </div>
          <div className="child">
            <Card
              title="Sports"
              imageUrl={image2}
              body="Test your sports knowledge with our exciting Sports Quiz! From football to basketball, tennis to cricket, challenge yourself with a series of engaging questions. Let the games begin!"
              quizUrl="categories/sports/quiz"
            />
          </div>
          <div className="child">
            <Card
              title="Film & Movies"
              imageUrl={image3}
              body="Lights, camera, action! Welcome to the Film and Movies Quiz! Test your knowledge of cinema, characters, and famous quotes. Let the fun begin!"
              quizUrl="categories/movies/quiz"
            />
          </div>
          {/* <div className="child">
            <Card
              title="Film & Movies"
              imageUrl={image3}
              body="Lights, camera, action! Welcome to the Film and Movies Quiz! Test your knowledge of cinema, characters, and famous quotes. Let the fun begin!"
            />
          </div>
          <div className="child">
            <Card
              title="Film & Movies"
              imageUrl={image3}
              body="Lights, camera, action! Welcome to the Film and Movies Quiz! Test your knowledge of cinema, characters, and famous quotes. Let the fun begin!"
            />
          </div>
          <div className="child">
            <Card
              title="Film & Movies"
              imageUrl={image3}
              body="Lights, camera, action! Welcome to the Film and Movies Quiz! Test your knowledge of cinema, characters, and famous quotes. Let the fun begin!"
            />
          </div> */}
        </Carousel>
      </div>
    </>
  );
};
