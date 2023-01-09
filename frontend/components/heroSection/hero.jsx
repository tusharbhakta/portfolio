import Image from "next/image";
import Link from "next/link";
function Hero() {
    return (
        <div className="container d-flex mt-5 pt-5">
            {/* heroText */}

            <div className="col-8 mt-5 pt-3">
                <h1 className="mt-4 text-primary">Tushar Bhakta</h1>
                <h3>Front Web Developer & <br />
                    WordPress Specialist</h3>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Sequi sunt magnam ipsam aliquid eum ex voluptate reprehenderit ab assumenda magni <br /> suscipit odit eos a dolores ut quis illo, voluptas sed!</p>

                <div>
                    <Link href='/portfolio' legacyBehavior>
                        <button type="button" className="btn btn-warning btn-lg text-white">View Projects </button>
                    </Link>
                    <Link href='/contact' legacyBehavior>
                        <button type="button" className="btn btn-outline-secondary btn-lg pl-2 ms-3">Hire Me</button></Link>

                </div>
            </div>



            {/* heroImage */}
            <div className="col-4 pt-3">
                <Image src='/images/tushar.png' alt="Tushar Bhakta" width={350} height={400} />
            </div>
        </div>
    )
}

export default Hero;