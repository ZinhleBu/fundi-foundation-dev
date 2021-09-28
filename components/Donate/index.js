
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
                        <form action="https://sandbox.payfast.co.za​/eng/process" method="post">
                            <input type="hidden" name="merchant_id" value="10000100" />
                            <input type="hidden" name="merchant_key" value="46f0cd694581a" />
                            <input type="hidden" name="amount" value="100.00" />
                            <input type="hidden" name="item_name" value="Test Product" />
                            <input type="submit" value="Donate" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Donate;
