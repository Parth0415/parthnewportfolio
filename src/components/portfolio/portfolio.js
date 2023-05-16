import React from "react";
import "./portfolio.css";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import github from "../assets/images/github.png";
import web from "../assets/images/web.png";
function Portfolio() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projectContainer">
        <ProjectComponent
          title="Project 1"
          img={project1}
          github = "https://github.com/AshKetchumAndPikachu/PokemonBattle"
          link="https://ashketchumandpikachu.github.io/PokemonBattle/"
          tech="Javascript, HTML, CSS"
        />
        <ProjectComponent
          title="Project 2"
          img={project2}
          github ="https://github.com/Project2Group6/Shift_Wiz"
          link="https://shift-wiz.herokuapp.com/"
          tech="Javascript, HTML, CSS"
        />
        <ProjectComponent
          title="Project 3"
          img={project3}
          github ="https://github.com/Parth0415/Fundamental_Coding_Quiz"
          link="https://parth0415.github.io/Fundamental_Coding_Quiz/"
          tech="Javascript, HTML, CSS"
        />
           <ProjectComponent
          title="Project 4"
          img={project4}
          github ="https://github.com/Parth0415/Code-Refactor"
          link="https://parth0415.github.io/Code-Refactor/"
          tech="Javascript, HTML, CSS"
        />
           <ProjectComponent
          title="Project 5"
          img={project5}
          github ="https://github.com/Parth0415/Parth-Daily-Work-Day-Scheduler"
          link="https://parth0415.github.io/Parth-Daily-Work-Day-Scheduler/"
          tech="Javascript, HTML, CSS"
        />
           <ProjectComponent
          title="Project 6"
          img={project6}
          github ="https://github.com/Parth0415/Secure-Password-Generator"
          link="https://parth0415.github.io/Secure-Password-Generator/"
          tech="Javascript, HTML, CSS"
        />
      </div>
    </div>
  );
}

function ProjectComponent(props) {
  return (
    <div className="projectTile">
      <img src={props.img} alt="project" />

      <div className="projectBody">
      <h2>{props.title}</h2>
      
      <div className="projectLinks">
      <a href={props.github}><img className="projectLink" src={github} alt= "github"/></a>
      <a href={props.link}><img className="projectLink" src={web} alt= "web"/></a>
      </div>

      <p>{props.tech}</p>
      </div>

    </div>
  );
}

export default Portfolio;
