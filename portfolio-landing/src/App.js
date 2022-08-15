import './App.css';
import Profile from './components/Profile';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
      <header>
        <div className="header-bar">
          <div className="left-header">
            <Profile />
            <div className="header-text">
              <h1 className="name-text">Mathias Sletten</h1>
              <p className="title">Frontend Developer</p>
            </div>
          </div>
        </div>
      </header>
      <div className="nav-control-div">
        <Navigation />
      </div>
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
