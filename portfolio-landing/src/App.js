import './App.css';
import SkillsCarousel from './components/SkillsCarousel.js';
function App() {
  return (
    <div className="App" id="home">
      {
        //start fresh, start refreshed, start renewed
      }
      <header>
        <div className="left-header">
          <h1><b><span>this</span>.name=</b>(<span>"Mathias Sletten"</span>);</h1>
          <p><i><span>this</span>.titles=[<span>"Front End Developer"</span>, <span>"Father"</span>, <span>"Lifelong learner"</span>];</i></p>
        </div>
        <nav className="right-header">
          <a href='/'>.about();</a>
          <a href='/'>.projects();</a>
          <a href='/'>.contact();</a>
        </nav>
      </header>
      <div>
        <div className="stacks">
          <SkillsCarousel />
        </div>
      </div>
    </div>
  );
}

export default App;
