import { useEffect, useState } from "react";
import ProjectItem from "./project-item";
import axios from "axios";

function ProjectGrid() {

    const [projects, setProjects] = useState([]);

    const fetchProjects = () => {
        axios.get('http://127.0.0.1:8000/api/project-list', {
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': process.env.BACKEND_URL,
            }
        })
            .then(response => {
                setProjects(response.data);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchProjects()
    }, [])

    return (
        <div className="container">
            <div className="d-flex mb-4">
                {projects.map(project =>
                    <ProjectItem
                        key={project.id}
                        project={project} />
                )}
            </div>
        </div>
    )
}




export default ProjectGrid;