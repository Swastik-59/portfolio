import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import "./App.css"
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  const data = {
    name: "Swastik Mukherjee",
    title: "Web Developer",
    about: `I’m a first-year Computer Science Engineering student at SRMIST KTR, Chennai,
            specializing in AI and Machine Learning. Skilled in the MERN stack and Python,
            I have experience building scalable web applications and integrating AI-driven
            solutions. I’m passionate about real-world problem-solving and open to
            opportunities in web development, AI/ML, and data science.`,
    insta: "https://www.instagram.com/_swastik_2006/",
    github: "https://github.com/Swastik-59",
    linkedin: "https://www.linkedin.com/in/swastik-mukherjee-851979315"
  };
  

  return (
    <div>
      <Navbar />
      <Home name={data.name} title={data.title} />
      <About about={data.about} />
      <Projects />
      <Contact insta={data.insta} github={data.github} linkedin={data.linkedin} />
    </div>
  )
}

export default App