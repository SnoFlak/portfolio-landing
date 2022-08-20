import ARROW from '../imgs/ArrowStorefront.png';
import TM from '../imgs/Taskmeister.png';
const Projects = () => {
    return(
        <div className="projects">
            <h2 id="projects">Projects</h2>
            <div className="project">
                <div className="project-text">
                    <a href="https://github.com/SnoFlak/storefront"><h3>Arrow (storefront) </h3></a>
                    <p>E-Commerce Storefront webpage created with React, React-Router, JSX, and CSS, using the Fakestore API.</p>
                </div>
                <div className="project-image">
                    <img src={ARROW} alt='arrow storefront item page'></img>
                </div>
            </div>

            <div className="project">
                <div className="project-text">
                    <a href="https://github.com/SnoFlak/Taskmeister"><h3>Taskmeister (CRUD app) </h3></a>
                    <p>Calendar Agenda created with Javascript, HTML, and CSS.</p>
                </div>
                <div className="project-image">
                    <img src={TM} alt='arrow storefront item page'></img>
                </div>
            </div>
        </div>
    )
}

export default Projects;