import { useForm } from 'react-hook-form';

function Registration () {
    const {
        register,
        handleSubmit
      } = useForm();
      
    function submitHandler (data) {
        // POST request
       }

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
                                    onSubmit={handleSubmit(submitHandler)} 
                                    className="contact-validation-active" 
                                    id="myForm">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="first_name" id="name" placeholder="First Name"  
                                                {...register('first_name')} 
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="surname" id="surname" placeholder="Surname" 
                                                {...register('surname')}
                                                 />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                                <input type="text" className="form-control" name="email" id="email" placeholder="Email" 
                                                {...register('email')} 
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="contact_number" id="contact-number" placeholder="Contact Number" 
                                                {...register('contact_number')} 
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="id_number" id="id-number" placeholder="ID Number" 
                                                {...register('id_number')} 
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="nationality" id="nationality" placeholder="Nationality"
                                                 {...register('nationality')} 
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="qualification" id="qualification" placeholder="Qualification you're registering for?" 
                                                {...register('qualification')} 
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="institution" id="institution" placeholder="Institution you're registering at?" 
                                                {...register('institution')}
                                                 />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="student_number" id="student-number" placeholder="Student number?"
                                                 {...register('student_number')}
                                                 />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="number" className="form-control" name="fee_amount" id="fee-amount" placeholder="Registration fee amount?" 
                                                {...register('fee_amount')} 
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="number" className="form-control" name="year" id="year" placeholder="What year are you registering for?" 
                                                {...register('year')} 
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
                                                        type="radio" name="qualify_1" value="Postgraduate" id="choice-yes" 
                                                        {...register('qualify_1')}
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
                                                        type="radio" name="qualify_2" value="Undergraduate" id="choice-no" 
                                                        {...register('qualify_2')} 
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
                                                        type="radio" name="choice_1" value="Yes" id="choice-yes"
                                                         {...register('choice_1')}
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
                                                        type="radio" name="choice_2" value="No" id="choice-no" 
                                                        {...register('choice_1')}
                                                    />


                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-12 form-group">
                                                <textarea type="text" className="form-control" name="note" id="note" placeholder="Message..." 
                                                {...register('note')}
                                                ></textarea>
                                            </div>
                                           
                                        </div>
                                    </form>
                                    <div className="submit-area col-lg-12 col-12">
                                                <button 
                                                type="submit" 
                                                onClick={submitHandler} 
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




