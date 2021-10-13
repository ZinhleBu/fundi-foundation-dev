import TeamSection from '../team'


const Registration = () => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
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

                                    <form action="https://formsubmit.co/fund@fundi.co.za" method="POST" className="contact-validation-active" id="contact-form">
                                        <input type="hidden" name="_next" value="https://fundifoundation.org/ThankYouPage" />
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="name" id="name" placeholder="First Name" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="surname" id="surname" placeholder="Surname" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="contact_number" id="contact-number" placeholder="Contact Number" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="id_number" id="id-number" placeholder="ID Number" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="nationality" id="nationality" placeholder="Nationality" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="qualification" id="qualification" placeholder="Qualification you're registering for?" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="institution" id="institution" placeholder="Institution you're registering at?" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="student_number" id="student-number" placeholder="Student number?" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="number" className="form-control" name="fee_amount" id="fee-amount" placeholder="Registration fee amount?" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="number" className="form-control" name="year" id="year" placeholder="What year are you registering for?" />
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-group">
                                                <label
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        lineHeight:"15px"
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
                                                        type="radio" name="qualify" value="Postgraduate" id="choice-yes" 
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
                                                    type="radio" name="qualify" value="Undergraduate" id="choice-no" />


                                                </div>
                                            </div>





                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-group">

                                                <label
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        lineHeight:"15px"
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
                                                            type="radio" name="choice" value="Yes" id="choice-yes" 
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
                                                            type="radio" name="choice" value="No" id="choice-no"
                                                             />


                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-12 form-group">
                                                <textarea className="form-control" name="note" id="note" placeholder="Message..."></textarea>
                                            </div>
                                            <div className="submit-area col-lg-12 col-12">
                                                <button type="submit" className="theme-btn submit-btn">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}



export default Registration;




