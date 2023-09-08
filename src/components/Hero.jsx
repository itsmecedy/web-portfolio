import heroImg from "../assets/cedy.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwindcss.png";
import sass from "../assets/sass.png";

const Hero = () => {
  const images = [html, css, javascript, react, sass, tailwind];
  const imageElements = images.map((image, index) => (
    <img key={index} src={image} alt={`Image ${index}`} />
  ));
  return (
    <div className=" flex justify-between h-screen text-2xl items-center ">
      <div className="flex-1 justify-center flex-col text-left">
        <p className="text-4xl font-semibold mb-10 ">
          Front-End Web Developer💻
        </p>
        <p className="text-slate-500 ">
          Hi I'm Cedrick Mancio. A passionate aspiring front-end developer.
        </p>
        <div className=" space-x-5 flex text-slate-700  text-[3rem] my-2 mb-20 mt-5">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className=" hover:text-blue-700"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className=" hover:text-blue-700"
          >
            <AiFillLinkedin />
          </a>
        </div>
        <div className="flex justify-center items-center ">
          <p>Tech Stack |</p>
          <div className="flex ml-8 ">
            <div className="flex gap-4">{imageElements}</div>
          </div>
        </div>
      </div>
      <div className=" flex-1 justify-center items-center">
        <img
          id="heroimg"
          src={heroImg}
          className="object-cover h-auto w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
