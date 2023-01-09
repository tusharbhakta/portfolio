import Image from "next/image";
function Technology() {
    return (

        <div className="bg-light">
            <div className="container mt-5  tex-white">
                <div>
                    <h1 className="text-center pt-5">Technologies I have Experience </h1>
                    <p className="text-center text-secondary"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quam assumenda <br /> cupiditate sequi! Rem aut dolores perferendis error distinctio officiis.</p>
                </div>


                <div className="container text-center mt-5 pb-5">
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">

                        <div className="col">
                            <div className="p-3">
                                <Image className="" src='/images/icons/html.png' alt="html" width={40} height={40} />
                                <h4 className="text-center mt-2">HTML 5</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <Image className="" src='/images/icons/css.png' alt="html" width={40} height={40} />
                                <h4 className="text-center mt-2 ">CSS 3</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <Image className="" src='/images/icons/bootstrap.png' alt="html" width={40} height={40} />
                                <h4 className="text-center mt-2">Bootstrap</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <Image className="" src='/images/icons/tailwind.png' alt="html" width={40} height={40} />
                                <h4 className="text-center mt-2">Tailwind</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <Image className="" src='/images/icons/java-script.png' alt="html" width={40} height={40} />
                                <h4 className="text-center mt-2">Jvascript</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <Image className="" src='/images/icons/react.png' alt="html" width={40} height={40} />
                                <h4 className="text-center mt-2">React</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <Image className="" src='/images/icons/nextjs.png' alt="html" width={40} height={40} />
                                <h4 className="text-center mt-2">Next</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <Image className="" src='/images/icons/python.png' alt="html" width={40} height={40} />
                                <h4 className="text-center mt-2">Python</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <Image className="" src='/images/icons/django.png' alt="html" width={40} height={40} />
                                <h4 className="text-center mt-2">Django</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <Image className="" src='/images/icons/database.svg' alt="html" width={40} height={40} />
                                <h4 className="text-center mt-2">MySQL</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Technology;