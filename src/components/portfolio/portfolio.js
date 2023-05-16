import React from "react";
import "./portfolio.css";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
function Portfolio() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projectContainer">
        <ProjectComponent
          title="Project 1"
          img={project1}
          link="https://ashketchumandpikachu.github.io/PokemonBattle/"
          tech="Javascript, HTML, CSS"
        />
        <ProjectComponent
          title="Project 2"
          img={project2}
          link="https://shift-wiz.herokuapp.com/"
          tech="Javascript, HTML, CSS"
        />
        <ProjectComponent
          title="Project 3"
          img={project3}
          link="https://parth0415.github.io/Fundamental_Coding_Quiz/"
          tech="Javascript, HTML, CSS"
        />
           <ProjectComponent
          title="Project 4"
          img={project4}
          link="https://parth0415.github.io/Code-Refactor/"
          tech="Javascript, HTML, CSS"
        />
           <ProjectComponent
          title="Project 5"
          img={project5}
          link="https://parth0415.github.io/Parth-Daily-Work-Day-Scheduler/"
          tech="Javascript, HTML, CSS"
        />
           <ProjectComponent
          title="Project 6"
          img={project6}
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
      <a href={props.link}>Gitub</a>
      <p>{props.tech}</p>
      </div>
    </div>
  );
}

export default Portfolio;
