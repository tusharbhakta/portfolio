import Link from "next/link";
function Navbar() {
    return (
        <div className="bg-dark  fixed-top">
            <div className="container">
                <nav className="navbar  navbar-expand-lg bg-body-tertiary my-2">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="/">TUSHAR BHAKTA</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
                                </li>

                                <li className="nav-item">
                                    <Link href='/technology' legacyBehavior>
                                        <a className="nav-link text-white" >Technology</a>
                                    </Link>

                                </li>

                                <li className="nav-item">
                                    <Link href='/portfolio' legacyBehavior>
                                        <a className="nav-link me-5 text-white" >Portfolio</a>
                                    </Link>

                                </li>
                            </ul>
                            <Link href='/contact' legacyBehavior>
                                <button className="btn btn-secondary " type="submit">HIRE ME</button>
                            </Link>


                        </div>
                    </div>
                </nav>
            </div>
        </div>

    )
}
export default Navbar;