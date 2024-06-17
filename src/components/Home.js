import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>About Me</h1>
      <div className="bio">
        <p>
          Hi, I'm Khareen Francis Proverbs, a highly skilled and motivated Software Engineer from Barbados. I have 4 years of experience in building responsive and scalable web applications. I am proficient in React, Tailwind, and SQL databases, with hands-on experience utilizing web services. I am passionate about staying current with the latest technologies and trends in the industry.
        </p>
        <p>
          I attended the Combermere School, where I had the unique experience of going to school with Rihanna! I later earned my Bachelor of Science in Software Engineering from the University of the West Indies, Cave Hill Campus, where I was awarded the SWEN scholarship and made the Dean's List. My favorite subject during my studies was front-end development, and I was actively involved in soccer and basketball.
        </p>
        <p>
          My professional journey includes various web development roles during my undergraduate studies. Currently, I work at Charter Communications as an IVR and bot developer. I became a software engineer because I was fascinated by the ability to develop software that can automate tasks and assist in our everyday lives, including building websites. One of the most challenging projects I've worked on involves bot development and IVR systems, which is my current job. I am most proud of my achievement in becoming a bot developer.
        </p>
      </div>
      <img src="images/profile.jpg" alt="My profile" className="profile-pic" />

      <h2>Interests</h2>
      <p>
        Outside of work, I enjoy a variety of activities. I am passionate about sports, particularly basketball and soccer, and I love coding in my spare time to build my skills. I also enjoy spending time with my family and traveling. I have a special love for all genres of music, and my preferences depend on my mood.
      </p>

      <h2>Life Philosophy and Goals</h2>
      <p>
        My personal and professional goals for the next 5-10 years include starting a software solutions business and becoming an entrepreneur. I believe in the philosophy that you never stop learning; each new day presents a new opportunity. To stay motivated and focused, I always challenge myself.
      </p>

      <h2>Fun Facts</h2>
      <p>
        I have 2 kids, both under the age of 2! I am known for my exceptional organizational skills.
      </p>

      <h2>Contact Information</h2>
      <ul className="contact-info">
        <li>Email: khareenp1@gmail.com</li>
        <li>Phone: 646-953-4323</li>
        <li>Location: Troutman, NC, USA</li>
      </ul>
    </div>
  );
};

export default Home;
