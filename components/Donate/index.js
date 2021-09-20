
const Donate = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className="wpo-donation-page-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-donate-header">
                            <h2>Make a Donation</h2>
                        </div>
                        <form action="https://sandbox.payfast.co.za​/eng/process" method="post" >
                            <input type="hidden" name="merchant_id" value="10000100" />
                            <input type="hidden" name="merchant_key" value="46f0cd694581a" />
                            <input type="hidden" name="return_url" value="https://www.example.com/success" />
                            <input type="hidden" name="cancel_url" value="https://www.example.com/cancel" />
                            <input type="hidden" name="notify_url" value="https://www.example.com/notify" />
                            <input type="hidden" name="amount" value="" />
                            <input type="hidden" name="item_name" value="R10 goes a long way donation" />
                            <input type="hidden" name="name_first" value="John" />
                            <input type="hidden" name="name_last" value="Doe" />
                            <input type="hidden" name="email_address" value="john@doe.com" />
                            <input type="hidden" name="cell_number" value="0823456789" />
                            <input type="hidden" name="m_payment_id" value="01AB" />
                            <input type="hidden" name="amount" value="100.00" />
                            <input type="hidden" name="item_name" value="Test Item" />
                            <input type="hidden" name="item_description" value="A test product" />
                            <input type="hidden" name="custom_int1" value="2" />
                            <input type="hidden" name="custom_str1" value="Extra order information" />

                            <div className="wpo-donations-amount">
                                <h2>Your Donation</h2>
                                <input type="text" className="form-control" name="text" id="text" placeholder="Enter Donation Amount" />
                            </div>
                            <div className="wpo-donations-details">
                                <h2>Details</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                        <input type="text" className="form-control" name="name" id="fname" placeholder="First Name" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                        <input type="text" className="form-control" name="name" id="name" placeholder="Last Name" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                        <input type="text" className="form-control" name="Adress" id="Adress" placeholder="Adress" />
                                    </div>
                                    <div className="col-lg-12 col-12 form-group">
                                        <textarea className="form-control" name="note" id="note" placeholder="Message"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="submit-area">
                                <button type="submit" className="theme-btn submit-btn">Donate Now</button>
                            </div>
                        </form>









                        {/* <form onSubmit={SubmitHandler} action="https://sandbox.payfast.co.za​/eng/process" method="post">
                        <div className="wpo-donations-amount">
                        <h2>Your Donation</h2>
                        <input type ="text" className="form-control" name="text" id="text" placeholder="Enter Donation Amount" />
                        </div>
                        <div className="wpo-donations-details">
                        <h2>Details</h2>

                    <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                        <input type="text" className="form-control" name="name" id="fname" placeholder="First Name" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                        <input type="text" className="form-control" name="name" id="name" placeholder="Last Name" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                        <input type="text" className="form-control" name="Adress" id="Adress" placeholder="Adress" />
                                    </div>
                                    <div className="col-lg-12 col-12 form-group">
                                        <textarea className="form-control" name="note" id="note" placeholder="Message"></textarea>
                                    </div>
                                 
                                </div>
                        </div>

                        <div className="wpo-doanation-payment">
                        <h2>Choose Your Payment Method</h2>
                        <div className="wpo-payment-area">
                        <div className="row">
                        <div className="col-12">
                        <div className="wpo-payment-option" id="open4">
                        <div className="wpo-payment-select">
                        <ul>
                        <li className="addToggle">
                        <input id="add" type ="radio" name="payment" value="30" />
                        <label htmlFor="add">Payment By Card</label>
                        </li>
                        <li className="removeToggle">
                        <input id="remove" type ="radio" name="payment" value="30" />
                        <label htmlFor="remove">Offline Donation</label>
                        </li>
                        </ul>
                        </div>
                        <div id="open5" className="payment-name">
                        <ul>
                        <li className="visa"><input id="1" type ="radio" name="size" value="30" />
                        <label htmlFor="1"><img src='images/checkout/img-1.png' alt="" /></label>
                        </li>
                        <li className="mas"><input id="2" type ="radio" name="size" value="30" />
                        <label htmlFor="2"><img src='images/checkout/img-2.png' alt="" /></label>
                        </li>
                        <li className="ski"><input id="3" type ="radio" name="size" value="30" />
                        <label htmlFor="3"><img src='images/checkout/img-3.png' alt="" /></label>
                        </li>
                        <li className="pay"><input id="4" type ="radio" name="size" value="30" />
                        <label htmlFor="4"><img src='images/checkout/img-4.png' alt="" /></label>
                        </li>
                        </ul>
                        <div className="contact-form form-style">
                        <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                        <label>Card holder Name</label>
                        <input type ="text" placeholder="" name="name" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                        <label>Card Number</label>
                        <input type ="text" placeholder="" id="card" name="card" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                        <label>CVV</label>
                        <input type ="text" placeholder="" name="CVV" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                        <label>Expire Date</label>
                        <input type ="text" placeholder="" name="date" />
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        <div className="submit-area">
                        <button type ="submit" className="theme-btn submit-btn">Donate Now</button>
                        </div>
                        </form> */}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate;