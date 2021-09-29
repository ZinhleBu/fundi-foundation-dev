
const Donate = (props) => {


    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <> <div className="wpo-donation-page-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">

                        <div className="wpo-donate-header">
                            <h2>Make a Donation</h2>
                        </div>
                        <form name="PayFastPayNowForm" action="https://www.payfast.co.za/eng/process" method="post">
                            <input required type="hidden" name="cmd" value="_paynow" />
                            <input required type="hidden" name="receiver" pattern="[0-9]" value="16564521" />
                            <input type="hidden" name="return_url" value="https://fundi-foundation-dev-chi.vercel.app/DonatePage" />
                            <input type="hidden" name="cancel_url" value="https://fundi-foundation-dev-chi.vercel.app/DonatePage" />
                            <input type="hidden" name="notify_url" value="https://fundi-foundation-dev-chi.vercel.app/DonatePage" />
                            <table>
                                <tr>
                                    <td><label id="PayFastAmountLabel" for="PayFastAmount">Amount: </label></td>
                                    <td><input required id="PayFastAmount" type="number" step=".01" name="amount" min="12.00" placeholder="12.00" valueAsNumber="" /></td>
                                </tr>
                            </table>

                            <input required type="hidden" name="item_name" maxlength="255" value="FundiFoundation"/>
                                <table>
                                    <tr>
                                        <td colspan="2" align="center">
                                        <input type="image" src="https://www.payfast.co.za/images/buttons/DonateNow/Red-Large-Square-DonateNow.png" alt="Donate Now" title="Donate Now with PayFast"/>
                                        </td>
                                    </tr>
                                </table>
                        </form>



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
