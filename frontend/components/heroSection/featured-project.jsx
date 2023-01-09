import { Fragment } from "react";
import ProjectGrid from "../projects/project-grid";
import Link from "next/link";
function FeaturedProject(props) {
    return (
        <Fragment>
            <div className="container">
                <h1 className="text-center mt-5 pt-5 ">Featured Projects</h1>
                <p className="text-center text-secondary pb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Expedita nobis dicta voluptatibus corrupti! Ad ut cumque pariatur a. Eum, voluptatum!</p>
                <ProjectGrid projects={props.projects} />
                <Link href="/portfolio" legacyBehavior>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button className="btn  btn-outline-secondary me-md-2 mt-3 mb-5">View All</button>
                    </div>
                </Link>
            </div >
        </Fragment >

    )
}
export default FeaturedProject;