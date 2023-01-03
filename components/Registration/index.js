import React, { useState, useEffect, useRef } from 'react'
import Popup from '../../components/popup'

function Registration() {

    const [buttonPopup, setButtonPopup] = useState(false);

    // useEffect(() => {

    //         setTimeout(() => {
    //             setButtonPopup(true);
    //         }, 0);
    // }, []);

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
        type: "",
        consent: "",
        note: ""
    });

    const { first_name, surname, email, contact_number, id_number, nationality, qualification, institution, student_number, fee_amount, year, type, consent, note } = data;

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch(
                "https://v1.nocodeapi.com/fundifoundation1/google_sheets/TQXMeIwSGrdRnXjT?tabId=Sheet1", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify([
                    [first_name, surname, email, contact_number, id_number, nationality, qualification, institution, student_number, fee_amount, year, type, consent, note, new Date().toLocaleString()],
                ]),
            }
            );
            await response.json()
            setData({ ...data, first_name: "", surname: "", email: "", contact_number: "", id_number: "", nationality: "", qualification: "", institution: "", student_number: "", fee_amount: "", year: "", type: "", consent: "", note: "" })
        } catch (successfull) {
            console.log("data")
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
                                        <h2>Apply for Registration Fees Funding</h2>
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


                                                        <select
                                                            name="type" id="type" onChange={handleChange}
                                                        >
                                                            <option value="Postgraduate">Postgraduate</option>
                                                            <option value="Undergraduate">Undergraduate</option>
                                                        </select>


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
                                                        <select
                                                            name="consent" id="consent" onChange={handleChange}
                                                        >
                                                            <option value="Yes">Yes</option>
                                                            <option value="No">No</option>

                                                        </select>

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
                                                onClick={() => { handleSubmit(); setButtonPopup(true); }}
                                                type="submit"
                                                className="theme-btn submit-btn">Send Message</button>

                                        </div>
                                        <div className="submit-area col-lg-12 col-12"
                                            style={{

                                                margin: "20px"
                                            }}>
                                            <p>Fundi Foundation Trust makes every effort to be compliant to the Protection of Personal Information Act (POPIA). Your information will only be used for the provision of services for which  you are applying and may be shared with partner organisations who provide aspects of those services.  Visit our privacy policy and view our PAIA Manual on our website https://www.fundi.co.za/ to learn how we collect, keep, and process your personal information in accordance with this law.  Details regarding POPIA and PAIA requests are included on the website. </p>
                                        </div>
                                    </div>
                                </div>
                                <Popup
                                    trigger={buttonPopup}  setTrigger={setButtonPopup}
                                    >
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <h2>Your application has been sent successfully</h2>
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}



export default Registration;
