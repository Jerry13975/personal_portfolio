import React from 'react';
import Me from './assets/IMG_3745.jpg';
import linkedin from './assets/LI-In-Bug.png';
import git from './assets/github-mark-white.png'
import 'font-awesome/css/font-awesome.min.css';
import TerminalComponent from './components/terminal';

const App: React.FC = () => {
  return (
    <div className='app'>
      <header>
        <h1 className='header__name'>Jerry Liu | Full-Stack Developer</h1>
      </header>
      <div className='about-page'>
        <img className='about-page__portrait'src={Me} alt="Photo of me" />
        <div className='about-page__content'>
        <h1>I'm Jerry, a Junior at Boston University, and I am currently majoring in computer science</h1>
        <p>Hey there! &#x1F44B;  I’m on an exciting path to becoming a full-stack developer. Along the way, I’ve worked on a variety of projects that have helped me grow my skills and build a solid foundation in coding. From creating small websites to solving fun coding challenges, I've discovered so many creative ways to approach problems. I’ve also started exploring AWS, diving into cloud solutions and how they can make applications more scalable and efficient. There’s still so much to discover, and I’m excited to keep learning and growing in the tech world.</p>
        </div>
      </div>
      <section className='skills'>
        <div className='skills__category'>
          <h3>Technical Skills</h3>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>Typescript</li>
            <li>C++</li>
          </ul>
        </div>
        <div className='skills__category'>
          <h3>Frontend Development</h3>
          <ul>
            <li>HTML & CSS</li>
            <li>React</li>
          </ul>
        </div>
        <div className='skills__category'>
          <h3>Backend Development</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className='skills__category'>
          <h3>Development Tools</h3>
          <ul>
            <li>Docker</li>
            <li>Git</li>
            <li>Postman</li>
            <li>Docker</li>
            <li>Linux</li>
          </ul>
        </div>
      </section>
      <TerminalComponent/>
      <footer>
        <div className='footer'>
          <h2>Contact Me</h2>
          <p className='footer__content'>Currently open for Software Engineer Internship</p>
          <div className='contacts'>
            <a href='mailto:liujerry647@gmail.com' className='footer__email'>
              <i className="fa fa-envelope"></i>
            </a>
            <a href='https://www.linkedin.com/in/jerryliu2981' target='_blank'>
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href='https://github.com/Jerry13975' target='_blank'>
              <img src={git} alt="GitHub" />
            </a>
          </div>
          <a href="/Jerry_Liu_Resume.pdf" download="Jerry_Liu_Resume">Download My Resume</a>
          <p className='footer__copyright'>&copy; Jerry Liu</p>
        </div>
      </footer>
    </div>
  )
};

export default App;

