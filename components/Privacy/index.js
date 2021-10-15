import { motion } from 'framer-motion'
import Example from '../pdf'


const PrivacySection = (props) => {
    return (
        <div className={`wpo-mission-area ${props.subclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, y: -10 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ delay: .2 }}
                            >FundiFoundation</motion.span>
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, y: -10 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ delay: .4 }}
                            >Privacy Policy</motion.h2>
                        </div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: -10 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: .6 }}
                    className="wpo-mission-wrap">
                    <div className="row">
                        <div className="col-12">
                            <h1>1.	Introduction</h1>
                            <p>

                                •	These Terms apply to you individually and to your use of the Fundi Foundation.
                            </p>

                        </div>
                        <div className="col-12">
                            <p>

                                •	Please read these Terms carefully as they impose legally binding obligations on you and contain exclusions and limitations of our liability that affect you. It is your responsibility to determine whether the Platform is suitable and adequate for your needs. You assume all risks associated with your use of the Platform.
                            </p>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>

                                •	Please pay special attention to the sections that are in bold and italics. These are important clauses which explain what may limit our responsibility or involve some risk for you.
                            </p>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">

                            <p>
                            •	By ‘accepting’ the Terms when you sign up for the Fundi Foundation platform and by continuing to use the Platform, you agree to these Terms and represent and warrant that (i) you are at least 18 years of age and capable of entering into a legally binding agreement; or (ii) you have your guardian’s consent and agreement to enter into these Terms.
                            
                            </p>
                        </div>
                        
                        <div className="titleCertificate col-12">
                            <h1 
                            style={{ 
                                justifyContent: "center", 
                                textAlign: "center",
                                marginTop:"10px",
                                marginBottom:"20px" }}>
                                18A Certificate and Registration Documents:
                            </h1>
                        </div>
                        <div className=" buttonDownload-wrap col col-12 col-lg-12">
                            <Example />
                        </div>
                    </div>
                    <div className="row">
                       
                    </div>
                </motion.div>
            </div>
            <style jsx>{`

            buttonDownload-wrap: {
                    justifyContent = "center",
               }
                `
            }</style>
        </div>

    )
}

export default  PrivacySection;