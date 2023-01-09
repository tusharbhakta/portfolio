import ProjectGrid from "./project-grid";
import Link from "next/link";
function AllProject(props) {
    return (
        <div className="container">
            <h1 className="text-center mt-5 pt-5 pb-5">All Projects</h1>
            <ProjectGrid projects={props.projects} />

            <Link href='/' legacyBehavior>
                <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                    <button className="btn  btn-outline-secondary me-md-2 mt-3 mb-5">Go Back</button>
                </div>
            </Link>
        </div>
    )
}
export default AllProject;