import React from 'react'
import ContactForm from '../ContactForm'
import Head from 'next/head'
import Script from 'next/script'
const DonateLeaders = () => {
    return (
        <>
            <Script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.min.js" />
            <Head>
                <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                <script src="https://cdn.i-station.co.za/js/sha512.js"></script>
                <script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.min.js"></script>
            </Head>
            <div className="wpo-donation-page-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <div className="wpo-donate-header">
                                <h2>Please Make a Donation to Leaders4Learners</h2>
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
                                                        <div className="container" style={{ width: "100%" }}>
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <form
                                                                        method="post" action="https://pay.ozow.com/" id="ipayForm">
                                                                        <p className="ipay-name">
                                                                            <input
                                                                                type="text"
                                                                                id="ipayFullName"
                                                                                name="Optional1"
                                                                                placeholder="Full Name"
                                                                                className="fields"
                                                                                required
                                                                            />
                                                                        </p>
                                                                        <p className="ipay-email">
                                                                            <input type="email" name="Customer" placeholder="Email" className="fields" required />
                                                                        </p>
                                                                        <p className="ipay-contact">
                                                                            <input type="text" name="Optional2" placeholder="Contact Number" className="fields" required />
                                                                        </p>
                                                                        <p className="ipay-amount">
                                                                            <input
                                                                                type="text"
                                                                                id="ipayAmount"
                                                                                name="Amount"
                                                                                placeholder="Please add decimal point '0.00'"
                                                                                className="fields"
                                                                                required
                                                                            />
                                                                        </p>

                                                                        <button
                                                                            id="ipayButton"
                                                                            type="submit"
                                                                            style=
                                                                            {{
                                                                                height: "50%",
                                                                                width: "100%",
                                                                                padding: "10px 16px",
                                                                                fontSize: "20px",
                                                                                lineHeight: "1.33",
                                                                                borderRadius: "6px",
                                                                                color: "rgb(68, 175, 133)",
                                                                                backgroundColor: " rgb(255, 255, 255)",
                                                                                borderColor: "rgb(68, 175, 133)",
                                                                                display: "inlineBlock",
                                                                                marginBottom: "20px",
                                                                                fontWeight: "800",
                                                                                textAlign: "center",
                                                                                whiteSpace: " nowrap",
                                                                                verticalAlign: "middle",
                                                                                cursor: "pointer",
                                                                                userSelect: "none",
                                                                                boxShadow: "rgb(136, 136, 136) 3px 3px 5px",
                                                                            }}
                                                                        >
                                                                            <p style={{ fontSize: "12px" }}>Click Here To Donate Now</p>
                                                                            <br />
                                                                            <img
                                                                                src="https://cdn.i-station.co.za/img/ozow-payment-logo-c.png"
                                                                                style={{ margin: "5px 0 -5px 20px" }}
                                                                            />
                                                                        </button>
                                                                        <input type="hidden" name="SiteCode" value="FUN-LEA-001" />
                                                                        <input type="hidden" name="CountryCode" value="ZA" />
                                                                        <input type="hidden" name="CurrencyCode" value="ZAR" />
                                                                        <input type="hidden" id="ipayTransactionRef" name="TransactionReference" value="" />
                                                                        <input type="hidden" id="ipayBankRef" name="BankReference" value="" />
                                                                        <input type="hidden" name="Optional5" value="Buy Now" />
                                                                        <input type="hidden" name="CancelUrl" value="https://ozow.com/demo-cancelled/" />
                                                                        <input type="hidden" name="ErrorUrl" value="https://ozow.com/demo-cancelled/" />
                                                                        <input type="hidden" name="SuccessUrl" value="https://fundi-foundation-dev-chi.vercel.app/SuccessPage" />
                                                                        <input type="hidden" name="IsTest" value="false" />
                                                                        <input type="hidden" id="ipayHash" name="HashCheck" value="" />
                                                                    </form>
                                                                </div>
                                                            </div>
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
            </div >
            <Script src="/script.js" />
        </>

    )

}

export default DonateLeaders;
