import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="m-2 p-2 border border-success">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <i>
                <strong>Welcome to Text Analyzer</strong>
              </i>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body fw-bold">
              <strong>Welcome to Text Analyzer,</strong> a project born out of
              curiosity and a passion for learning! As a student developer, I
              embarked on this journey to create my first project, blending
              creativity with coding. Text Analyzer is designed to be a fun and
              practical tool that lets you play with words and explore various
              text manipulations.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <i>
                <strong>The Inspiration</strong>
              </i>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body fw-bold">
              The <strong>idea</strong> for Text Analyzer came from my desire to
              learn and apply the fundamentals of web development. I wanted to
              create a tool that not only serves a practical purpose but also
              allows me to experiment with different features and
              functionalities. This project has been a fantastic opportunity to
              dive deep into concepts like props, state management, and user
              interaction in a real-world application.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <i>
                <strong>What You Can Do with Text Analyzer</strong>
              </i>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body fw-bold">
              Text Conversion: Easily convert text to uppercase or lowercase, or
              clear it entirely with a simple click.
              <br />
              Word and Character Count: Instantly see the number of words and
              characters, helping you analyze and improve your writing.
              <br />
              Real-Time Preview: View changes in real-time, making it easy to
              track your text transformations.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <i>
                <strong>The Journey</strong>
              </i>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body fw-bold">
              Creating Text Analyzer has been an exciting learning experience.
              From understanding the basics of React to integrating various
              features, this project has helped me grow as a developer. I've
              faced and overcome challenges, each one teaching me valuable
              lessons and pushing me to improve further.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <i>
                <strong>Future Plans</strong>
              </i>
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body fw-bold">
              I see Text Analyzer as a stepping stone to more complex projects.
              My goal is to continue enhancing this tool, adding new features,
              and improving its usability. I hope this project inspires others
              to dive into the world of coding and discover the joy of creating
              something from scratch.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              <i>
                <strong>About Me</strong>
              </i>
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body fw-bold">
              Hello, I'm Ayush Kumar, an aspiring developer with a fervent
              passion for technology and continuous learning. My journey into
              the world of coding and development began with a keen curiosity
              and has since evolved into a profound dedication to mastering the
              art and science of software development. <br />
              It will be honour for me if you could visit { " "}
              <Link
                to="https://ayush-portflio.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800"
              >
                <FaAddressCard size={30} />
              </Link>
              {" "}  my portfolio!!
            </div>
          </div>
        </div>

        <div className="container  mt-3">
          <strong className="fw-bold">
            <h3>Thank You !!</h3>
          </strong>
          <div className="fw-bold">
            Thank you for visiting Text Analyzer. I hope you find it as
            enjoyable and useful as I have found developing it. Your feedback
            and suggestions are always welcome as they help me learn and grow.
            Let's keep exploring and pushing the boundaries of what's possible!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
