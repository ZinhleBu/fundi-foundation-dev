import React from 'react'
import ContactForm from '../ContactForm'
import Head from 'next/head'
import Script from 'next/script'
const DonateR10 = () => {
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
                                <h2>Please Make a Donation for #R10GoesALongWay</h2>
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


                                                                    <form name="PayFastPayNowForm" action="https://www.payfast.co.za/eng/process" method="post">
                                                                        <input required type="hidden" name="cmd" value="_paynow" />
                                                                        <input required type="hidden" name="receiver" pattern="[0-9]" value="16564521" />
                                                                        <input type="hidden" name="return_url" value="https://fundi-foundation-dev-chi.vercel.app" />
                                                                        <input type="hidden" name="cancel_url" value="https://fundi-foundation-dev-chi.vercel.app" />
                                                                        <input type="hidden" name="notify_url" value="https://fundi-foundation-dev-chi.vercel.app/SuccessPage" />
                                                                        <input required type="hidden" name="name_first" value="" />
                                                                        <input required type="hidden" name="name_last" value="" />
                                                                        <input required type="hidden" name="email_address" value="" />
                                                                        <input required type="hidden" name="cell_number" value="" />
                                                                        <input required type="hidden" name="item_name" maxLength="255" value="FundiFoundation" />
                                                                        <input type="hidden" name="signature" value="" />
                                                                        <table>
                                                                            <input id="PayFastName" type="text" name="name_first" placeholder="Name" valueAsString="" />
                                                                            <input id="PayFastLast" type="text" name="name_last" placeholder="Surname" valueAsString="" />
                                                                            <input id="PayFastEmail" type="text" name="email_address" placeholder="Email" valueAsString="" />
                                                                            <label id="PayFastAmountLabel" htmlFor="PayFastAmount">Amount: </label>
                                                                            <input id="PayFastAmount" type="text" step=".01" name="amount" min="0.01" placeholder="R0.00" valueAsNumber="" />
                                                                        </table>
                                                                        <table>
                                                                            <td colSpan="2" align="center" />
                                                                            <input type="image" src="https://www.payfast.co.za/images/buttons/DonateNow/Red-Large-Square-DonateNow.png" alt="Donate Now" title="Donate Now with PayFast" />
                                                                        </table>
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

export default DonateR10;
