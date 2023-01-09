import Link from "next/link";
import Image from "next/image";

function ProjectItem(props) {
    const { name, image, description, link } = props.project;
    // const imagePath = `/images/projects/${image}`
    return (
        <div className="card col-lg-3 ms-2" >
            <Image className="card-img-top h-200" src={`http://127.0.0.1:8000${image}`} alt={name} width={300} height={200} />

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <Link href={link} legacyBehavior>
                    <div className="d-grid gap-2">
                        <button className="btn btn-warning text-white custom">Project Details</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProjectItem;