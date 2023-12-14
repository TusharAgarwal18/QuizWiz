import React from "react";
import "./AboutUs.css";
import image1 from "../../images/satya.jpg"
import image2 from "../../images/tushar.jpeg"
import image3 from "../../images/debjeet.jpeg"
import image4 from "../../images/souvik.jpeg"


export const AboutUs = () => {
  return (
    <>
      <div className="about-container">
        <div className="main-container">
          <h1>About Us</h1>
          <p>
            Welcome to our Quiz App! At QuizWiz, we believe that learning can be fun and engaging. Our Quiz App is designed to provide you with an interactive and entertaining way to test your knowledge on a wide range of topics.
          </p>
          <p>
            Whether you're a student looking to brush up on your skills or simply someone who enjoys challenging themselves, our app has something for everyone.
          </p>
          <p>
          Our team of talented developers has skillfully crafted this app using React JS, a powerful JavaScript library for building user interfaces. With its component-based architecture and efficient rendering, React JS ensures a smooth and seamless experience as you navigate through the quizzes.
          </p>
          <h2>Key Features</h2>
          <ul>
            <li>Diverse Quiz Categories</li>
            <li>Interactive User Interface</li>
            <li>Responsive Design</li>
          </ul>
          <p>
            We are continuously working to improve and expand our Quiz App,
            adding new features, quizzes, and categories regularly. Your
            feedback and suggestions are valuable to us as we strive to provide
            you with the best possible experience.
          </p>
          <p>
            So why wait? Dive into the world of knowledge and fun with our Quiz
            App built on React JS. Start challenging yourself, learning new
            facts, and enjoying the thrill of quizzes. Let the journey begin!
          </p>
          <p>
            If you have any questions or need assistance, please don't hesitate to contact our support team. We're here to help.
          </p>
          <p>Happy quizzing!</p>
          <p>QuizWiz Team</p>
        </div>
      </div>
      <div className="gallery">
        <h1 className="gallery-heading">Developer Team</h1>
        <div className="image-div">
          <div className="image-t">
            <img src= {image1} alt="p-5" className="t1" />
            <h2 className="name-t1">Satyajit Kumar</h2>
            <p className="about-t1">
              <b>Team Member</b>
            </p>
            <p className="about-t1">Component Integration & Front End</p>
          </div>
          <div className="image-t">
            <img src= {image2} alt="p-6" className="t2" />
            <h2 className="name-t2">Tushar Agarwal</h2>
            <p className="about-t2">
              <b>Team Member</b>
            </p>
            <p className="about-t2">Quiz Interface</p>
          </div>
          <div className="image-t">
            <img src= {image3} alt="p-7" className="t3" />
            <h2 className="name-t3">Debjit Ghosh</h2>
            <p className="about-t3">
              <b>Team Member</b>
            </p>
            <p className="about-t3">Structure Design</p>
          </div>
          <div className="image-t">
            <img src= {image4} alt="p-9" className="t4" />
            <h2 className="name-t4">Souvik Saha</h2>
            <p className="about-t4">
              <b>Team Member</b>
            </p>
            <p className="about-t4">Testing</p>
          </div>
        </div>
      </div>
    </>
  );
};
