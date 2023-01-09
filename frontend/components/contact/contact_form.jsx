import { useState } from "react";
import axios from "axios";
import Image from "next/image";
function ContactForm() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const messagePayload = {
            fullName,
            email,
            description
        }

        console.log('payload', messagePayload)

        try {
            const { res } = await axios({
                url: "http://127.0.0.1:8000/api/contact",
                method: "POST",
                data: messagePayload,
            });

            setFullName('')
            setEmail('')
            setDescription('')

        } catch (error) {
            console.log('Error', error)
        }

    }


    return (
        <div className="bg-light pb-5">
            <div className="container pt-5 ">
                <h1 className="text-center mt-4">Contact Me</h1>
                <p className="text-center text-secondary ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Expedita nobis dicta voluptatibus corrupti! Ad ut cumque pariatur a. Eum, voluptatum!</p>
                <div className="d-flex col-md-8 ms-5 ps-5">
                    <div className="col-10 mt-5 ms-5">
                        <form className="row g-3 col-12">
                            <div className="mb-2 col-12">

                                <input
                                    value={fullName}
                                    onChange={({ target }) => setFullName(target?.value)}
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter FullName..."
                                    required />
                            </div>
                            <div className="mb-2 col-12">

                                <input
                                    value={email}
                                    onChange={({ target }) => setEmail(target?.value)}
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter Email..."
                                    required />
                            </div>
                            <div className="mb-1">

                                <textarea
                                    value={description}
                                    onChange={({ target }) => setDescription(target?.value)}
                                    className="form-control"
                                    name=""
                                    id="message"
                                    rows="5"
                                    placeholder="Your Project Details Here..."
                                    required></textarea>

                            </div>
                            <button
                                onClick={handleSubmit}
                                type="submit"
                                className="btn btn-primary">Submit</button>
                        </form>
                        <p className="mt-3 text-center">Don't like form?  <a href="https://mail.google.com/mail">  email</a> me.</p>
                    </div>


                    <div className="col-12">
                        < Image src='/images/icons/login.png' alt="login" width={400} height={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;