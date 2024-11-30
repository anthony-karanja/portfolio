import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import '../components/styles/Projects.css'

function Projects() {
    const Projects = [
        {
          name: "Job Portal",
          description: "Built with Django for job applications.",
          technologies: ["Python"],
          githubLink: "https://github.com/monicah-monic",
        },
      ];
  return (
    <>   
    <NavBar />
    <div id='projectsSection'>
        <h2>Projects I have Done</h2>
        <div className="grid-container">
            {Projects.map((project, index) => (
                <div key={index} className="project-card">
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <p className="project-technologies">Technologies: {project.technologies.join(", ")}</p>
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        View on GitHub
                    </a>
                </div>
            ))}
        </div>
    </div>
    <Footer />
    </>
               
       
   
  );
}

export default Projects;