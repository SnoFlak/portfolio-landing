import './App.css';
import SkillsCarousel from './components/SkillsCarousel.js';
import IDEcontainer from './components/IDEcontainer';
function App() {
  return (
    <div className="App" id="home">
      {
        //start fresh, start refreshed, start renewed
      }
      <div className="background"></div>
      <header>
        <div className="left-header">
          <h1><b><span>this</span>.name=</b>(<span>"Mathias Sletten"</span>);</h1>
          <p><i><span>this</span>.titles=[<span>"Front End Developer"</span>, <span>"Father"</span>, <span>"Lifelong learner"</span>];</i></p>
        </div>
        <nav className="right-header">
          <a href='mailto: mathiasasletten@gmail.com'>.contact();</a>
          <a href='https://www.linkedin.com/in/mathias-sletten-4472531b4/'>.linkedIn();</a>
          <a href='https://drive.google.com/file/d/1aZfG_B774hu0a8W8-ZbJIFPJKIctQZii/view?usp=sharing'>.resume();</a>
        </nav>
      </header>
      <div className="app-body">
        <div className="stacks">
          <SkillsCarousel />
        </div>
        <div className="main-content">
          <IDEcontainer />
        </div>
      </div>
    </div>
  );
}

export default App;
