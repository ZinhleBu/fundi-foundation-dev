import React, { Component } from 'react'

class Newsletter extends Component {


    state = {
      
        email: '',
       
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { 
            email,
             error } = this.state;

       
        if (email === '') {
            error.email = "Please enter your email";
        }
        

        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.lastname === '' && error.subject === '' && error.events === '' && error.notes === '') {
            this.setState({
               
                email: '',
               
                error: {}
            })
        }
    }

    render() {
        const { 
            email,
            
            error } = this.state;

        return (
            <section className="wpo-news-letter-section">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-6 offset-lg-3 col-sm-8 offset-md-2">
                            <div className="wpo-newsletter">
                                <h3>Follow us For further information</h3>
                                <div className="wpo-newsletter-form">

                                    <form action="https://formsubmit.co/fund@fundi.co.za" method="POST" >

                                        <div>
                                            <input type="text" placeholder="Enter Your Email" name="email" value="" className="form-control" />
                                            <button type="submit">Subscribe</button>
                                        </div>
                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Newsletter;