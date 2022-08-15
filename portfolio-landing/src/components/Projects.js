import ARROW from '../imgs/ArrowStorefront.png';

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
        </div>
    )
}

export default Projects;