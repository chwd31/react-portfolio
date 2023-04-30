import React from 'react';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <p>Download my resume <a href="/path/to/resume.pdf">here</a>.</p>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
      </ul>
      <h3>Work History</h3>
      <ul>
        <li>
          Company Name - Position Title (Start Date - End Date)
          <ul>
            <li>Brief description of job responsibilities and accomplishments</li>
          </ul>
        </li>
        <li>
          Company Name - Position Title (Start Date - End Date)
          <ul>
            <li>Brief description of job responsibilities and accomplishments</li>
          </ul>
        </li>
      </ul>
      <h3>Education</h3>
      <ul>
        <li>
          Degree Name - Major (Graduation Date)
          <ul>
            <li>School Name</li>
            <li>Brief description of coursework and achievements</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default Resume;
