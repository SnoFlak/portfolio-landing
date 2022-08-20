import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App" id="home">
      <header>
        <div className="header-bar">
          <div className="left-header">
            <div className="header-text">
              <div className="name-title">
                <h1 className="name-text">Mathias Sletten</h1> 
                <h1 className="frontend-developer">, Frontend Developer</h1>
              </div>
              <p className="info">mathiasasletten@gmail.com (701)-600-9009</p>
            </div>
          </div>
        </div>
      </header>
      <div className="nav-control-div">
        <Navigation />
      </div>
      <About />
      <Projects />
      <Contact />
      <div className="back-to-top">
        <a href="#home">Back to top</a>
      </div>
      <footer>
        <h3>Special Thanks</h3>
        <p>Special thanks to John Shoff for helping me pursue my dream job, and supporting me all the way through. Thanks to Mathias Begley for helping me dive into programming and helping me out in the toughest of times, and being a great business partner. Thanks to my family, for constantly being supportive of what I want to do in life, and being there on the journey with me.</p>
      </footer>
    </div>
  );
}

export default App;
