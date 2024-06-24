import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>My Personal Webpage</h1>
      </div>
    </header>
  );
}

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <p>Hello! I'm an aspiring financial engineer with a background in computer science and economics...</p>
      </div>
    </section>
  );
}

const Skills = () => {
  const skills = ['JavaScript', 'React', 'Python', 'Machine Learning', 'Data Analysis'];

  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <ul>
          {skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'Description for project one.',
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'Description for project two.',
      link: '#'
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

const Project = ({ project }) => {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link}>Learn More</a>
    </div>
  );
}

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default App;
