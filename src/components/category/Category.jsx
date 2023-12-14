import Card2 from "./cards/Card2";
import image1 from "../../images/tech.png";
import image2 from "../../images/coding.png";
import image3 from "../../images/anime.png";
import image4 from "../../images/gaming.png";
import image5 from "../../images/sports.png";
import image6 from "../../images/movies.png";
import image7 from "../../images/science.png";
import image8 from "../../images/gk.png";



import "./Category.css";

export const Category = () => {
  return (
    <div className="parent">
      <div className="child">
        <Card2
          title="Technology"
          imageUrl={image1}
          body="Test your tech prowess with our engaging and informative quiz, designed to challenge and expand your knowledge in the ever-evolving world of technology."
          quizUrl="tech/quiz"
        />
      </div>
      <div className="child">
        <Card2
          title="Coding"
          imageUrl={image2}
          body="Explore Science Quiz! Physics, biology, astronomy, chemistry, and more. Test your scientific knowledge now! How much do you know?"
          quizUrl="coding/quiz"
        />
      </div>
      <div className="child">
        <Card2
          title="Anime"
          imageUrl={image3}
          body="Explore Science Quiz! Physics, biology, astronomy, chemistry, and more. Test your scientific knowledge now! How much do you know?"
          quizUrl="anime/quiz"
        />
      </div>
      <div className="child">
        <Card2
          title="Gaming"
          imageUrl={image4}
          body="Explore Science Quiz! Physics, biology, astronomy, chemistry, and more. Test your scientific knowledge now! How much do you know?"
          quizUrl="gaming/quiz"
        />
      </div>
      <div className="child">
        <Card2
          title="Sports"
          imageUrl={image5}
          body="Test your sports knowledge with our exciting Sports Quiz! From football to basketball, tennis to cricket, challenge yourself with a series of engaging questions. Let the games begin!"
          quizUrl="sports/quiz"
        />
      </div>
      <div className="child">
        <Card2
          title="Film & Movies"
          imageUrl={image6}
          body="Lights, camera, action! Welcome to the Film and Movies Quiz! Test your knowledge of cinema, characters, and famous quotes. Let the fun begin!"
          quizUrl="movies/quiz"
        />
      </div>
      <div className="child">
        <Card2
          title="Science"
          imageUrl={image7}
          body="Explore Science Quiz! Physics, biology, astronomy, chemistry, and more. Test your scientific knowledge now! How much do you know?"
          quizUrl="science/quiz"
        />
      </div>
      <div className="child">
        <Card2
          title="General Knowledge"
          imageUrl={image8}
          body="Unleash your knowledge in our General Knowledge Quiz! Explore history, science, pop culture, and more. How much do you know? Find out now!"
          quizUrl="gk/quiz"
        />
      </div>
    </div>
  );
};
