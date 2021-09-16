
const Success = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className="wpo-donation-page-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-donate-header">
                            <h2>Your Donation was successful!</h2>
                        </div>
                      

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success;