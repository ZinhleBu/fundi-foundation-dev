import React, { useState } from 'react'

function Registration() {



    const [data, setData] = useState({
        first_name: "",
        surname: "",
        email: "",
        contact_number: "",
        id_number: "",
        nationality: "",
        qualification: "",
        institution: "",
        student_number: "",
        fee_amount: "",
        year: "",
        qualify_1: "",
        qualify_2: "",
        choice_1: "",
        choice_2: "",
        note: ""


    });

    const { first_name, surname, email, contact_number, id_number, nationality, qualification, institution, student_number, fee_amount, year, qualify_1, qualify_2, choice_1, choice_2, note } = data;

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "https://v1.nocodeapi.com/zinhle/google_sheets/FUwIDcKuRpVRQmsq?tabId=Sheet1", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify([
                    [first_name, surname, email, contact_number, id_number, nationality, qualification, institution, student_number, fee_amount, year, qualify_1, qualify_2, choice_1, choice_2, note, new Date().toLocaleString()],
                ]),
            }
            );
            await response.json()
            setData({ ...data, first_name: "", surname: "", email: "", contact_number: "", id_number: "", nationality: "", qualification: "", institution: "", student_number: "", fee_amount: "", year: "", qualify_1: "", qualify_2: "", choice_1: "", choice_2: "", note: ""})
        } catch (successfull) {
            alert("successfull")
        }
    };
    return (


        <>

            <div className="volunteer-area">
                <div className="volunteer-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="volunteer-item">
                                    <div className="volunteer-img-wrap">
                                        <div className="volunter-img">
                                            <img src='images/Changing-view-from-space.jpg' alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="volunteer-contact">
                                    <div className="volunteer-contact-form">

                                        <h2>Register for Registration Fees Funding</h2>

                                        <form
                                            onSubmit={handleSubmit}
                                            className="contact-validation-active"
                                            id="myForm">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input type="text" className="form-control" name="first_name" id="name" placeholder="First Name" value={first_name} onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input type="text" className="form-control" name="surname" id="surname" placeholder="Surname" value={surname} onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                                    <input type="text" className="form-control" name="email" id="email" placeholder="Email" value={email} onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input type="text" className="form-control" name="contact_number" id="contact-number" placeholder="Contact Number" value={contact_number} onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input type="text" className="form-control" name="id_number" id="id-number" placeholder="ID Number" value={id_number} onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input type="text" className="form-control" name="nationality" id="nationality" placeholder="Nationality" value={nationality} onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input type="text" className="form-control" name="qualification" id="qualification" placeholder="Qualification you're registering for?" value={qualification} onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input type="text" className="form-control" name="institution" id="institution" placeholder="Institution you're registering at?" value={institution} onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input type="text" className="form-control" name="student_number" id="student-number" placeholder="Student number?" value={student_number} onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input type="number" className="form-control" name="fee_amount" id="fee-amount" placeholder="Registration fee amount?" value={fee_amount} onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input type="number" className="form-control" name="year" id="year" placeholder="What year are you registering for?" value={year} onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-group">
                                                    <label
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            lineHeight: "15px"
                                                        }}
                                                        htmlFor="qualify-post">What type qualification are you registering for?</label>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                        }}
                                                        className="col-lg-12 col-md-12 col-sm-6 col-12 form-group">


                                                        <label
                                                            style={{
                                                                width: "100px"
                                                            }}
                                                            htmlFor="qualify-post">Postgraduate

                                                        </label>

                                                        <input

                                                            style={{
                                                                height: "20px",
                                                                width: "20px",
                                                                margin: "20px"
                                                            }}
                                                            type="radio" name="qualify_1" value="Postgraduate" id="choice-yes" value={qualify_1} onChange={handleChange}
                                                        />
                                                        <label
                                                            style={{
                                                                width: "100px"
                                                            }}
                                                            htmlFor="qualify-under">Undergraduate</label>
                                                        <input

                                                            style={{
                                                                height: "20px",
                                                                width: "20px",
                                                                margin: "20px"
                                                            }}
                                                            type="radio" name="qualify_2" value="Undergraduate" id="choice-no" value={qualify_2} onChange={handleChange}
                                                        />


                                                    </div>
                                                </div>





                                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-group">

                                                    <label
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            lineHeight: "15px"
                                                        }}
                                                        htmlFor="choice">
                                                        Do you hereby consent to the conducting of a background check?
                                                    </label>

                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                        }}
                                                        className="col-lg-12 col-md-12 col-sm-6 col-12 form-group">


                                                        <label
                                                            style={{
                                                                width: "100px"
                                                            }}
                                                            htmlFor="choice-yes">Yes

                                                        </label>
                                                        <input
                                                            style={{
                                                                height: "20px",
                                                                width: "20px",
                                                                margin: "20px"
                                                            }}
                                                            type="radio" name="choice_1" value="Yes" id="choice-yes" value={choice_1} onChange={handleChange}
                                                        />

                                                        <label
                                                            style={{
                                                                width: "100px"
                                                            }}
                                                            htmlFor="choice-no">No

                                                        </label>
                                                        <input
                                                            style={{
                                                                height: "20px",
                                                                width: "20px",
                                                                margin: "20px"
                                                            }}
                                                            type="radio" name="choice_2" value="No" id="choice-no" value={choice_2} onChange={handleChange}
                                                        />


                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-12 form-group">
                                                    <textarea type="text" className="form-control" name="note" id="note" placeholder="Message..." value={note} onChange={handleChange}
                                                    ></textarea>
                                                </div>

                                            </div>
                                        </form>
                                        <div className="submit-area col-lg-12 col-12">
                                            <button
                                                onClick={handleSubmit}
                                                type="submit"
                                                className="theme-btn submit-btn">Send Message</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}



export default Registration;




