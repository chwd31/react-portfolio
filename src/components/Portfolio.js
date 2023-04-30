import React from 'react';
import Project from './Project';
import project1Image from '../images/project1.png';
import project2Image from '../images/project2.png';
import project3Image from '../images/project3.png';
import project4Image from '../images/project4.png';
import project5Image from '../images/project5.png';
import project6Image from '../images/project6.png';

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <Project
        title="Project 1"
        image={project1Image}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel volutpat justo."
        deployedLink="https://example.com"
        githubLink="https://github.com"
      />
      <Project
        title="Project 2"
        image={project2Image}
        description="Duis efficitur nisl sed nulla vehicula, sit amet elementum ipsum faucibus."
        deployedLink="https://example.com"
        githubLink="https://github.com"
      />
      <Project
        title="Project 3"
        image={project3Image}
        description="Praesent vestibulum, velit eget lacinia suscipit, turpis elit pellentesque libero, vel lobortis velit velit sed sapien."
        deployedLink="https://example.com"
        githubLink="https://github.com"
      />
      <Project
        title="Project 4"
        image={project4Image}
        description="Nulla pulvinar lobortis elit, et feugiat mi posuere eget."
        deployedLink="https://example.com"
        githubLink="https://github.com"
      />
      <Project
        title="Project 5"
        image={project5Image}
        description="Fusce blandit enim vel ex elementum, id consequat quam faucibus."
        deployedLink="https://example.com"
        githubLink="https://github.com"
      />
      <Project
        title="Project 6"
        image={project6Image}
        description="Donec facilisis tincidunt velit. Duis ac imperdiet lacus."
        deployedLink="https://example.com"
        githubLink="https://github.com"
      />
    </section>
  );
}

export default Portfolio;
