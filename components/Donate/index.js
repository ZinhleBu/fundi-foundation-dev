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

                                                    <form name="PayFastPayNowForm" action="https://www.payfast.co.za/eng/process" method="post">
                                                        <input required type="hidden" name="cmd" value="_paynow" />
                                                        <input required type="hidden" name="receiver" pattern="[0-9]" value="16564521" />
                                                        <input type="hidden" name="return_url" value="https://fundi-foundation-dev-chi.vercel.app/DonatePage" />
                                                        <input type="hidden" name="cancel_url" value="https://fundi-foundation-dev-chi.vercel.app/DonatePage" />
                                                        <input type="hidden" name="notify_url" value="https://fundi-foundation-dev-chi.vercel.app/DonatePage" />

                                                        <table>

                                                            <label id="PayFastAmountLabel" htmlFor="PayFastAmount">Amount: </label>
                                                            <input id="PayFastAmount" type="number" step=".01" name="amount" min="12.00" placeholder="12.00" valueAsNumber="" />

                                                        </table>

                                                        <input required type="hidden" name="item_name" maxLength="255" value="FundiFoundation" />

                                                        <table>

                                                            <td colspan="2" align="center" />
                                                            <input type="image" src="https://www.payfast.co.za/images/buttons/DonateNow/Red-Large-Square-DonateNow.png" alt="Donate Now" title="Donate Now with PayFast" />

                                                        </table>
                                                    </form>
                                                    {/* <form className="donate-form " name="PayFastPayNowForm" action="https://www.payfast.co.za/eng/process" method="post">

                                                        <input required type="hidden" name="cmd" value="_paynow" />
                                                        <input required type="hidden" name="receiver" pattern="[0-9]" value="16564521" />
                                                        <input type="hidden" name="item_name" maxLength="255" value="FundiFoundation" />
                                                        <input type="hidden" name="name_first" value="Zinhle" />
                                                        <input type="hidden" name="name_last" value="Buhlungu" />
                                                        <input type="hidden" name="email_address" value="" />
                                                        <input type="hidden" name="cell_number" value="" />

                                                        <label id="PayFastAmountLabel" for="PayFastAmount">Amount: </label>
                                                        <input required id="PayFastAmount" type="number" step=".01" name="amount" min="5.00" placeholder="5.00" valueAsNumber="" />



                                                        <h3 colspan="2"><span style={{ fontWeight: "bold" }}>Personal Details</span>

                                                        </h3>
                                                        <span style={{ color: "red" }}>*</span>&nbsp;Name
                                                        <input type="text" name="name_first" className="shipping" placeholder="First name" valueAsString="" />


                                                        <span style={{ color: "red" }}>*</span>&nbsp;Surname
                                                        <input type="text" name="name_last" className="shipping" valueAsString="" />


                                                        <span style={{ color: "red" }}>*</span>&nbsp;City
                                                        <input type="text" className="shipping" name="city" valueAsString="" />


                                                        <span style={{ color: "red" }}>*</span>&nbsp;Province
                                                        <input type="text" className="shipping" name="region" valueAsString="" />


                                                        <span style={{ color: "red" }}>*</span>&nbsp;Country

                                                        <select name="country" className="shipping">
                                                            <option value="" selected="selected">- Select -</option>
                                                            <option value="South Africa">South Africa</option>
                                                            <option value="">------------------------</option>
                                                            <option value="Botswana">Botswana</option>
                                                            <option value="Lesotho">Lesotho</option>
                                                            <option value="Mauritius">Mauritius</option>
                                                            <option value="Mozambique">Mozambique</option>
                                                            <option value="Swaziland">Swaziland</option>
                                                            <option value="Zimbabwe">Zimbabwe</option>
                                                        </select>



                                                        <span style={{ color: "red" }}>*</span>&nbsp;Postal Code
                                                        <input type="number" name="code" className="shipping" valueAsNumber="" />

                                                        <table>

                                                            <td colSpan="2" align="center">
                                                                <button type="submit" className="theme-btn">Donate</button>

                                                            </td>

                                                        </table>

                                                    </form> */}



                                                    <div className="col-md-12">
                                                        <button id="ipayButton" type="button"  
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
                                                            boxShadow: "rgb(136, 136, 136) 3px 3px 20px"
                                                        }}>
                                                            <div style={{ float: "left", paddingTop: "22px" }}>

                                                                Click Here
                                                                <br></br>
                                                                to pay with
                                                            </div>
                                                            <img src="https://cdn.i-station.co.za/img/ozow-payment-logo-c.png" />
                                                        </button>
                                                    </div>
                                                    <div id="ipayModal" className="modal" style={{ display: "none", position: "fixed", zIndex: "1", left: "0", top: "0", width: "100%", height: "100%", overflow: "auto", backgroundColor: "rgb(0,0,0)", backgroundColor: "rgba(0,0,0,0.4)" }}>
                                                        <div style={{ backgroundColor: "#fefefe", margin: "15% auto", padding: "20px", border: "1px solid #888", width: "80%", borderRadius: "9px" }}>
                                                            <span className="ipayClose" style={{ color: "#aaa", float: "right", fontSize: "28px", fontWeight: "bold", cursor: "pointer" }}>×</span>
                                                            <form method="post" action="https://pay.ozow.com/" id="ipayForm" novalidate="novalidate">
                                                                <p className="ipay-name">
                                                                    <input type="text" id="ipayFullName" name="Optional1" placeholder="Full Name" className="fields" required="" aria-required="true" />
                                                                </p>
                                                                <p className="ipay-email">
                                                                    <input type="email" name="Customer" placeholder="Email" className="fields" required="" aria-required="true" />
                                                                </p>
                                                                <p className="ipay-contact">
                                                                    <input type="text" name="Optional2" placeholder="Contact Number" className="fields" required="" aria-required="true" />
                                                                </p>
                                                                <p className="ipay-amount">
                                                                    <input type="text" id="ipayAmount" name="Amount" placeholder="Enter Custom Amount" className="fields" required="" aria-required="true" />
                                                                </p>

                                                                <button id="ipayButton" type="submit"  action=""style={{ width: "510px", padding: "10px 16px", fontSize: "20px", lineHeight: "1.33", borderRadius: "6px", color: "rgb(68, 175, 133)", backgroundColor: "rgb(255, 255, 255)", borderColor: "rgb(68, 175, 133)", display: "inlineBlock", marginBottom: "20px", fontWeight: "800", textAlign: "center", whiteSpace: "nowrap", verticalAlign: "middle", cursor: "pointer", userSelect: "none", boxShadow: "rgb(136, 136, 136) 3px 3px 5px" }}>
                                                                    <p style={{ fontSize: "12px" }}>
                                                                        Click Here To Donate Now
                                                                    </p>
                                                                    <br></br>
                                                                    <img src="https://cdn.i-station.co.za/img/ozow-payment-logo-c.png" style={{ margin: "5px 0 -5px 20px" }} />

                                                                </button>

                                                                <input type="hidden" name="SiteCode" value="FUN-FUN-010" />
                                                                <input type="hidden" name="CountryCode" value="ZA" />
                                                                <input type="hidden" name="CurrencyCode" value="ZAR" />
                                                                <input type="hidden" id="ipayTransactionRef" name="TransactionReference" value="" />
                                                                <input type="hidden" id="ipayBankRef" name="BankReference" value="" />
                                                                <input type="hidden" name="Optional5" value="Buy Now" />
                                                                <input type="hidden" name="CancelUrl" value="https://ozow.com/demo-cancelled/" />
                                                                <input type="hidden" name="ErrorUrl" value="https://ozow.com/demo-cancelled/" />
                                                                <input type="hidden" name="SuccessUrl" value="https://fundifund12for12.co.za" />
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
                        </section>



                        {/* <form action="https://sandbox.payfast.co.za​/eng/process" method="post">
                            <input type="hidden" name="merchant_id" value="10000100" />
                            <input type="hidden" name="merchant_key" value="46f0cd694581a" />
                            <input type="hidden" name="amount" value="100.00" />
                            <input type="hidden" name="item_name" value="Test Product" />
                            <input type="submit" value="Donate" />
                        </form> */}

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Donate;
