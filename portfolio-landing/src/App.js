import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
