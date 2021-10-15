import ContactForm from '../../components/ContactForm'
import Script from 'next/script'


const DonateCopy = (props) => {

    return (


        <div classNameName="wpo-donation-page-area section-padding">
            <div classNameName="container">
                <div classNameName="row">
                    <div classNameName="col-lg-12 ">

                        <div classNameName="wpo-donate-header">
                            <h2>Make a Donation</h2>
                        </div>
                        <section classNameName="wpo-contact-form-map section-padding">
                            <div classNameName="container">
                                <div classNameName="row">
                                    <div classNameName="col-12">
                                        <div classNameName="row">
                                            <div classNameName="col col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div classNameName="contact-form">
                                                    <h2>Get In Touch</h2>
                                                    <ContactForm />
                                                </div>
                                            </div>
                                            <div classNameName="col col-lg-6 col-md-12 col-sm-12 col-12">

                                                <div classNameName="contact-form">
                                                    <h2>Donation Details</h2>

                                                    <div className="col-md-12">
                                                        <form method="post" action="https://pay.ozow.com/" id="ipayForm">
                                                            <p class="ipay-name">
                                                                <input type="text" id="ipayFullName" name="Optional1" placeholder="Full Name" class="fields" required />
                                                            </p>
                                                            <p class="ipay-email">
                                                                <input type="email" name="Customer" placeholder="Email" class="fields" required />
                                                            </p>
                                                            <p class="ipay-contact">
                                                                <input type="text" name="Optional2" placeholder="Contact Number" class="fields" required />
                                                            </p>
                                                            <p class="ipay-amount">
                                                                <input type="text" id="ipayAmount" name="Amount" placeholder="Enter Custom Amount" class="fields" required />
                                                            </p>

                                                            <button id="ipayButton" type="submit"
                                                                style={{ width: "510px", padding: "10px 16px", fontSize: "20px", lineHeight: "1.33", borderRadius: " 6px", color: "rgb(68, 175, 133)", backgroundColor: "rgb(255, 255, 255)", borderColor: "rgb(68, 175, 133)", display: "inlineBlock", marginBottom: "20px", fontWeight: "800", textAlign: "center", whiteSpace: "nowrap", verticalAlign: "middle", cursor: " pointer", userSelect: "none", boxShadow: "rgb(136, 136, 136) 3px 3px 5px" }}
                                                                onmouseover="this.style.backgroundColor:'#EEE'"
                                                                onmouseout="this.style.backgroundColor:'#FFFFFF'"
                                                            >
                                                                <p style={{ fontSize: "12px" }}>
                                                                    Click Here To Donate Now
                                                                </p><br />
                                                                <img src="https://cdn.i-station.co.za/img/ozow-payment-logo-c.png" style={{ margin: "5px 0 -5px 20px" }} />
                                                            </button>
                                                            <input type="hidden" name="SiteCode" value="FUN-FUN-015" />
                                                            <input type="hidden" name="CountryCode" value="ZA" />
                                                            <input type="hidden" name="CurrencyCode" value="ZAR" />
                                                            <input type="hidden" id="ipayTransactionRef" name="TransactionReference" value="TRef" />
                                                            <input type="hidden" id="ipayBankRef" name="BankReference" value="BRef" />
                                                            <input type="hidden" name="Optional5" value="Buy Now" />
                                                            <input type="hidden" name="CancelUrl" value="https://ozow.com/demo-cancelled/" />
                                                            <input type="hidden" name="ErrorUrl" value="https://ozow.com/demo-cancelled/" />
                                                            <input type="hidden" name="SuccessUrl" value="https://fundifund12for12.co.za" />
                                                            <input type="hidden" name="IsTest" value="false" />
                                                            <input type="hidden" id="ipayHash" name="HashCheck" value="351374861de486dca592f0d5d31c212733a180812e49bc58eba7fd100c16411e3370c0e061205f4f6fbea896c84ed96cec81eb2319eba04b5b5b729745d83624" />
                                                        </form>


                                                        {/* fun-fun-015zazartrefbrefbuy nowhttps://ozow.com/demo-cancelled/https://ozow.com/demo-cancelled/https://fundifund12for12.co.zafalsec0n8gserczbxsjahvd5ikk1wmi5gqs7y */}

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

    )
}
export default DonateCopy;