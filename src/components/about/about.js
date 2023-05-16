import React from "react";
import me from "../assets/images/me.jpg";
import "./about.css";

function About() {
  return (
    <div className="aboutSection">
      <h1>About</h1>
      <div className="aboutSectionContent">
        <img src={me} alt="me" />
        <div>
          <p>
            My name is Parth Mali and i am your future software developer in
            baking! I am currently pursuing a software developer boot camp
            course from University Of Toronto. To seek a responsible and
            challenging career as a Developer which provisdes an opportunity to
            unveil my skills and continuously develop them while at work. I have
            completed Chemical Lab Technician with Pharmaceuticals-Advanced
            diploma course from Seneca college. I started working at age of 18.
            From being Team member to General Manager in Tim Hortons and
            currently working as QA tech in Ace bakery acquired by FGF Foods.
            FGF is a bakery company which manufactures all bakery items such as
            naan, bagel, muffins, baguette, pizza, croissants etc. at a large
            scale.
          </p>
          <p>
            In the year end of 2022, I decided to pursue something which was
            very new to me but I had confidence in myself that i can pull it
            off. After joining the software developer course I found my
            inspiration, passion, desire and determination which I felt was
            lacking while working in my current job. I personally prefer playing
            any sport game for instance cricket, volleyball, basketball, tennis,
            badminton etc. during my free time. Other than this activities I
            like spending time with my pet Oliver and playing cards with family
            and friends.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
