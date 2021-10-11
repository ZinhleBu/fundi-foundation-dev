import Link from 'next/link'

const WorldSection = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className={`wpo-world-area ${props.worldclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-world-section">
                            <h2>Register for 2022 registration fees funding</h2>
                            <Link onClick={ClickHandler} href="/RegistrationPage"><a><img src='images/team/1.png' alt=""/> Register </a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorldSection;