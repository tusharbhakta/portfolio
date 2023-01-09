import { Fragment } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
function Layout(props) {
    return (
        <Fragment>
            <Navbar />
            <main>{props.children}</main>
            <Footer />
        </Fragment>
    )
}

export default Layout;