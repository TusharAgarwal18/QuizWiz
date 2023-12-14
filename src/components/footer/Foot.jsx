import React from "react";
import "./Foot.css";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Foot = () => {
  return (
    <>
      <div className="footer-parent">
        <footer>
          <p>Made with &hearts; by QuizWiz</p>
          <p>&#169; 2023, QuizWiz.com, Inc. or its affiliates</p>
          <div className="f-icons">
            <a href="https://web.whatsapp.com/">
              {" "}
              <Whatsapp color="black" size={"3rem"} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100025287413664">
              <Facebook color="black" size={"3rem"} />
            </a>
            <a href="https://github.com/satkumar09/quizweb">
              <Gitub color="black" size={"3rem"} />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Foot;

// import React from "react";
// import "./Foot.css";
// //import "./Footer.css";
// //import Wave from "../../img/wave.png";
// import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Gitub from "@iconscout/react-unicons/icons/uil-github";

// const Footer = () => {
//   return (
//     <div className="footer">
//       {/* <img src={Wave} alt="" style={{ width: "100%" }} /> */}
//       <div className="f-content">
//         <span>QuizWiz.com</span>
//         <div className="f-icons">
//           <a href="https://web.whatsapp.com/">
//             {" "}
//             <Whatsapp color="black" size={"3rem"} />
//           </a>
//           <a href="https://www.facebook.com/profile.php?id=100025287413664">
//             <Facebook color="black" size={"3rem"} />
//           </a>
//           <a href="https://github.com/230Souvik">
//             <Gitub color="black" size={"3rem"} />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// import React from "react";
// import "./Foot.css";

// const Footer = () => {
//   return (
//     <>
//       {/* <p id="bod"></p> */}
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-12 col-md-3 first">
//             <svg
//               id="logo-16"
//               width="109"
//               height="43"
//               viewBox="0 0 109 43"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {" "}
//               <path
//                 d="M64.9315 11.4284C62.1883 8.6852 58.9316 6.5091 55.3475 5.0245C51.7633 3.5399 47.9219 2.7758 44.0424 2.7758C40.1629 2.7758 36.3215 3.5399 32.7373 5.0245C29.1532 6.5091 25.8965 8.6852 23.1533 11.4284L44.0424 32.3174L64.9315 11.4284Z"
//                 class="ccompli1"
//                 fill="#FFD200"
//               ></path>{" "}
//               <path
//                 d="M44.0686 32.3475C46.8118 35.0907 50.0684 37.2667 53.6526 38.7513C57.2367 40.2359 61.0782 41 64.9577 41C68.837 41 72.679 40.2359 76.263 38.7513C79.847 37.2667 83.104 35.0907 85.847 32.3475L64.9577 11.4584L44.0686 32.3475Z"
//                 class="ccompli2"
//                 fill="#06E07F"
//               ></path>{" "}
//               <path
//                 d="M44.017 32.3429C41.2738 35.0861 38.0171 37.2621 34.433 38.7467C30.8488 40.2313 27.0074 40.9954 23.1279 40.9954C19.2484 40.9954 15.407 40.2313 11.8228 38.7467C8.2387 37.2621 4.982 35.0861 2.2388 32.3429L23.1279 11.4538L44.017 32.3429Z"
//                 class="ccustom"
//                 fill="#E3073C"
//               ></path>{" "}
//               <path
//                 d="M64.9831 11.433C67.726 8.6898 70.983 6.5138 74.567 5.0292C78.151 3.5446 81.993 2.7805 85.872 2.7805C89.752 2.7805 93.593 3.5446 97.177 5.0292C100.761 6.5138 104.018 8.6898 106.761 11.433L85.872 32.3221L64.9831 11.433Z"
//                 class="ccustom"
//                 fill="#1F84EF"
//               ></path>{" "}
//             </svg>
//             <h1 id="head">QwizWiz</h1>
//             <h4>----ESTD:2023----</h4>
//             <p className="para">If you are a true warrior ,</p>
//             <p className="para">competition does not scare you.</p>
//             <p className="para">It makes you better</p>
//             <h4>
//               <b>5,108,462,246 quizzes played</b>
//             </h4>
//           </div>

//           <div className="col-12 col-md-3 first">
//             <h4>Contacts</h4>
//             <h5>
//               <b>Address:</b>
//             </h5>
//             <p>Anandapur,Kolkata-700107</p>
//             <h5>
//               <b>email:</b>
//             </h5>
//             <p>
//               <a href="mailto:ghoshdebjit2016@gmail.com">
//                 ghoshdebjit2016@gmail.com
//               </a>
//             </p>
//             <h5>
//               <b>phones:</b>
//             </h5>
//             <p>
//               <a href="tel:#">+91 7001805791</a>
//             </p>
//             <p>
//               <a href="tel:#">+91 7001758069</a>
//             </p>
//           </div>

//           <div className="col-12 col-md-3 first">
//             <h5>
//               <b>Company</b>
//             </h5>
//             <ul>
//               <li>
//                 <a href="/">About us</a>
//               </li>
//               <li>
//                 <a href="/">Stats</a>
//               </li>
//               <li>
//                 <a href="/">Jobs</a>
//               </li>
//               <li>
//                 <a href="/">Go Orange</a>
//               </li>
//               <li>
//                 <a href="/">Blog</a>
//               </li>
//             </ul>
//           </div>

//           <div className="col-12 col-md-3 first">
//             <h5>
//               <b>Resources</b>
//             </h5>
//             <ul>
//               <li>
//                 <a href="/">Feedback</a>
//               </li>
//               <li>
//                 <a href="/">Report a Problem</a>
//               </li>
//               <li>
//                 <a href="/">FAQ</a>
//               </li>
//               <li>
//                 <a href="/">Community Guidelines</a>
//               </li>
//               <li>
//                 <a href="/">Quizes for Your Sites</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="d-flex justify-content-around align-items-centers social">
//           <div className="p-md-5 p-2 flex-fill">
//             <a href="">
//               <i className="fa fa-facebook-official" aria-hidden="true"></i>
//               <span>Facebook</span>
//             </a>
//           </div>
//           <div className="p-md-5 p-2 flex-fill">
//             <a href="">
//               <i className="fa fa-instagram" aria-hidden="true"></i>
//               <span>Instagram</span>
//             </a>
//           </div>
//           <div className="p-md-5 p-2 flex-fill">
//             <a href="">
//               <i className="fa fa-linkedin" aria-hidden="true"></i>
//               <span>LinkdIn</span>
//             </a>
//           </div>
//           <div className="p-md-5 p-2 flex-fill">
//             <a href="">
//               <i className="fa fa-twitter" aria-hidden="true"></i>
//               <span>Twitter</span>
//             </a>
//           </div>
//           <div className="p-md-5 p-2 flex-fill">
//             <a href="">
//               <i className="fa fa-youtube" aria-hidden="true"></i>
//               <span>Youtube</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;
