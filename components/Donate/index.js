import ContactForm from '../../components/ContactForm'


const Donate = (props) => {

    return (
        <> <div className="wpo-donation-page-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 ">

                        <div className="wpo-donate-header">
                            <h2>Make a Donation</h2>
                        </div>
                        <section className="wpo-contact-form-map section-padding">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="contact-form">
                                                    <h2>Get In Touch</h2>
                                                    <ContactForm />
                                                </div>
                                            </div>
                                            <div className="col col-lg-6 col-md-12 col-sm-12 col-12">

                                                <div className="contact-form">
                                                    <h2>Donation Details</h2>
                                                    {/* 

                                                    <form name="PayFastPayNowForm" action="https://www.payfast.co.za/eng/process" method="post">
                                                        <input required type="hidden" name="cmd" value="_paynow" />
                                                        <input required type="hidden" name="receiver" pattern="[0-9]" value="16564521" />
                                                        <input type="hidden" name="return_url" value="https://fundi-foundation-dev-chi.vercel.app" />
                                                        <input type="hidden" name="cancel_url" value="https://fundi-foundation-dev-chi.vercel.app" />
                                                        <input type="hidden" name="notify_url" value="https://fundi-foundation-dev-chi.vercel.app" />
                                                        <input required type="hidden" name="name_first" value="" />
                                                        <input required type="hidden" name="name_last" value="" />
                                                        <input required type="hidden" name="email_address" value="" />
                                                        <input required type="hidden" name="cell_number" value="" />
                                                        <input required type="hidden" name="item_name" maxLength="255" value="FundiFoundation" />
                                                        <input type="hidden" name="signature" value="" />
                                                        <table>
                                                            <input id="PayFastName" type="text" name="name_first" placeholder="Name" valueAsString="" />
                                                            <input id="PayFastLast"type="text" name="name_last" placeholder="Surname" valueAsString="" />
                                                            <input id="PayFastEmail"type="text" name="email_address" placeholder="Email" valueAsString="" />
                                                            <label id="PayFastAmountLabel" htmlFor="PayFastAmount">Amount: </label>
                                                            <input id="PayFastAmount" type="number" step=".01" name="amount" min="0.00" placeholder="R0.00" valueAsNumber="" />
                                                        </table>
                                                        <table>
                                                            <td colSpan="2" align="center" />
                                                            <input type="image" src="https://www.payfast.co.za/images/buttons/DonateNow/Red-Large-Square-DonateNow.png" alt="Donate Now" title="Donate Now with PayFast" />
                                                        </table>
                                                    </form> */}



                                                    <div className="col-md-12">

                                                        {/* Having an issue genrating a HashCheck, please advise on this. */}

                                                        <form
                                                            method="POST"
                                                            action="https://pay.ozow.com/"
                                                            id="ipayForm"
                                                        >

                                                            <input type="hidden" name="SiteCode" value="FUN-FUN-015" />
                                                            <input type="hidden" name="CountryCode" value="ZA" />
                                                            <input type="hidden" name="CurrencyCode" value="ZAR" />
                                                            <input type="hidden" name="Amount" value="" />
                                                            <input type="hidden" name="TransactionReference" value="TestApi" />
                                                            <input type="hidden" name="BankReference" value="TestApi" />
                                                            <input type="hidden" name="Optional2" value="" />
                                                            <input type="hidden" name="Customer" value="" />
                                                            <input type="hidden" name="IsTest" value="false" />
                                                            <input type="hidden" name="HashCheck" value="" />


                                                            <p className="ipay-name">
                                                                <input type="text" name="Customer" placeholder="Full Name" className="fields" required="" aria-required="true" />
                                                            </p>
                                                            <p className="ipay-email">
                                                                <input type="text" name="Optional2" placeholder="Email" className="fields" required="" aria-required="true" />
                                                            </p>

                                                            <p className="ipay-amount">
                                                                <input type="number" name="Amount" placeholder="Enter Custom Amount" className="fields" required="" aria-required="true" />
                                                            </p>

                                                            <button
                                                                id="ipayButton"
                                                                className="form-submit"
                                                                type="submit"
                                                                style={{
                                                                    width: "100%",
                                                                    padding: "10px 16px",
                                                                    fontSize: "20px",
                                                                    lineHeight: "1.33",
                                                                    borderRadius: "6px",
                                                                    color: "rgb(68, 175, 133)",
                                                                    backgroundColor: "rgb(255, 255, 255)",
                                                                    borderColor: "rgb(68, 175, 133)",
                                                                    display: "inlineBlock",
                                                                    marginBottom: "20px",
                                                                    fontWeight: "800",
                                                                    textAlign: "center",
                                                                    whiteSpace: "nowrap",
                                                                    verticalAlign: "middle",
                                                                    cursor: "pointer",
                                                                    userSelect: "none",
                                                                    boxShadow: "rgb(136, 136, 136) 3px 3px 5px"
                                                                }}>

                                                                <p style={{ fontSize: "12px" }}>
                                                                    Click Here To Donate Now
                                                                </p>
                                                                <br></br>

                                                                <img src="https://cdn.i-station.co.za/img/ozow-payment-logo-c.png"
                                                                    style={{ margin: "5px 0 -5px 20px" }}
                                                                />

                                                            </button>


                                                        </form>

                                                    </div>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Donate;
