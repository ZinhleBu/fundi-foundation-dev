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
                    </div>
                    <div className="row">
                        <div className="col-12">

                            <p>
                                •	You must know, understand and comply with these Terms.
                            </p>
                        </div>
                    </div>
                    <h1>2. Definitions</h1>
                    <br />

                    <div className="row">
                        <div className="col-12">

                            <h2>
                                <span>Word</span>       /                         <span>Meaning</span>

                            </h2>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>
                                <h5>Applicable Laws</h5>
                                All national, provincial, local and municipal legislation, regulations, statutes, by-laws, consents and/or other laws of any relevant governmental authority and any other instrument having the force of law as may be issued and in force from time to time relating to or connected with the activities contemplated under these Terms.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <h5>Contact Centre</h5>

                            <p>
                                Our Contact Centre, which you can reach at telephone number: (insert number) or email (insert fundi foundation email).
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>
                                <h5>Device</h5>
                                The computer, tablet, smartphone or other device you use to access the Fundi Foundation platform.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>
                                <h5>Educational Institution</h5>
                                The South African institution where you are enrolled.                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>
                                <h5>Fees</h5>
                                Your Educational Institution fees for the current year, fees outstanding for the previous year and residence, printing and extracurricular fees as set out in a fees statement from your Educational Institution. Fees does not include:
                                <br></br>
                                •	the charges by your Educational Institution for non- academic expenses, such as parking fines and library late return fees; or
                                <br></br>

                                •	charges by parties other than your Educational Institution, such as for textbooks or rental.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>
                                <h5>Intellectual Property</h5>
                                All: inventions, specifications, patents, designs, trademarks, service marks, trade names and all goodwill associated with these; copyright, including copyright in logos, devices, designs, multimedia works and computer software programs (in source and object code form), as well as programmers’ or developers’ notes, flow charts and design documents; rights protecting goodwill and reputation; proprietary material, know-how, ideas, concepts, trade secrets, methods, techniques, graphics; schematics; marketing; sales and user data; domain names and URLs; databases and rights in databases; confidential information; other intellectual property rights and similar kinds of protection that are registered or can be registered anywhere in the world; and applications for, and rights to apply for, the protection of any of the items on this list.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>
                                <h5>Intellectual Property Rights</h5>
                                All rights in and to Intellectual Property.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>
                                <h5>ISP</h5>
                                An internet service provider, which is an entity that provides access to the internet.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>
                                <h5>Loss</h5>
                                Any direct or indirect loss or damages.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>
                                <h5>Password</h5>
                                Any of the secret characters (letters, symbols and numbers) you use to access the Platform or any other website, such as Facebook or Google, from which you can access the Platform.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>
                                <h5>Personal Information</h5>
                                Information about an identifiable, natural person and where applicable, a juristic person, including, but not limited to information about: race; gender; sex; pregnancy; marital status; nationality; ethnic or social origin; colour; sexual orientation; age; physical or mental health; well-being; disability; religion; conscience; belief; culture; language; birth; education; medical, financial, criminal or employment history; any identifying number, symbol, e-mail, postal or physical address, telephone number; location; any online identifier; any other particular assignment of the person; biometric information; personal opinions, views or preferences of the person or the views or opinions of another individual about the person; correspondence sent by the person that is implicitly or explicitly of a private or confidential nature or further correspondence that would reveal the contents of the original correspondence; and the name of the person if it appears with other personal information relating to the person or if the disclosure of the name itself would reveal information about the person and will include any details relating to your studies at your Educational Institution, including your Fees and registration.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>
                                <h5>Platform</h5>
                                The Fundi Foundation, at www.FundiFoundation.co.za  that enables students to create Profiles and potential funders to fund these students’ educational needs.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>
                                <h5>Process</h5>
                                Any operation or activity, automated or not, concerning Personal Information, including: alteration, blocking, collation, collection, consultation, degradation, destruction, dissemination by means of transmission, distribution or making available in any other form, erasure, linking, merging, organisation, receipt, recording, retrieval, storage, updating, modification, or the use of information. Processing and Processed will have a similar meaning.                                                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>
                                <h5>Profile</h5>
                                The profile you create when you sign up for the Platform.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>
                                <h5>We, us or our</h5>
                                The Fundi Foundation, with Foundation NPO number (Fundi Foundation NPO registration number here), its successors and assigns.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>
                                <h5>you or your</h5>
                                The person who signs up for and uses the Fundi Foundation online platform.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h1>3.	The Platform</h1>
                            <p>

                                •	We are a public benefit NPO organisation that collaborates with other key stakeholders to facilitate funding for students. SARS’ Tax Exemption Unit has granted us approval as a public benefit organisation as well as approval in terms of section 18A of the Income Tax Act, 1962.
                            </p>

                        </div>
                        <div className="col-12">
                            <p>

                                •	You can use the Fundi Foundation platform to create a Profile, view Students’ profiles, and if you choose to do so, to fund the whole or a portion of a Student’s Fees. You can also contribute towards Pool Funding, which is explained below.
                            </p>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h1>4.	Signing Up and creating a profile</h1>
                            <p>

                                •	You can sign up for the Fundi Foundation by using your email address and creating a Password. Once you have done this, if you meet the criteria set out below, you can create a Profile.
                            </p>

                        </div>
                        <div className="col-12">
                            <p>

                                •	In order to create a Profile, you must: be (i) a South African citizen or (ii) a refugee or asylum seeker residing in South Africa; be enrolled at an Educational Institution; have obtained a minimum “pass” grade in your previous year of study; be eligible for registration at your Educational Institution for the current year or, if you completed a qualification in the previous year, have obtained a minimum “pass” grade for that qualification; qualify with our eligibility criteria relating to your financial status from time to time.
                            </p>

                        </div>
                        <div className="col-12">
                            <p>

                                •	You must also provide us with all the information and documentation that we request, including your name, identity number, details of your Educational Institution enrolment (including the name of your Educational Institution, your student number and your course details for the current year), Fees, financial circumstances, race and gender.
                            </p>

                        </div>
                        <div className="col-12">
                            <p>

                                •	You must update your Profile every year with your course details and Fees. You must update your Profile as soon as any of the information you have provided in your Profile has changed.
                            </p>

                        </div>
                        <div className="col-12">
                            <h1>5.	Funding</h1>
                            <p>

                                <p> •	You must provide us with all the information and documents that we request in order to qualify for funding.

                                </p>
                                <p>•	We may, from time to time, and in our sole discretion, pay the whole or a portion of your Fees from the Pool Funding. We will inform you if we have allocated you any Pool Funding and whether your funding goal as set out on your Profile has been met. We will inform you again, once the Educational Institution has been paid.

                                </p>
                                <p>
                                    •	If we award you any Fundi Foundation Funding, we will pay this directly to the Educational Institution where you are enrolled, provided that you comply with these Terms. The balance directly to the Educational Institution where you are enrolled.

                                </p>
                                <p>
                                    •	You will not receive any Individual Funding or Pool Funding in excess of the amount of your Fees, as confirmed by your Educational Institution.
                                </p>
                                <p>
                                    •	The timing of the payments we make to Educational Institutions (whether in respect of Pool Funding or Individual Funding) will be in our discretion.
                                </p>
                                <p>
                                    •	We will not be liable (responsible) for any penalties or interest on your Fees that your Educational Institution may charge you on outstanding Fees. If we inform you that you have been allocated Pool Funding or Individual Funding, it is your responsibility to inform your Educational Institution that you have been allocated funding and request that the Educational Institution does not charge you any penalties or interest on outstanding Fees.
                                </p>
                                <p>
                                    •	We will not be liable (responsible) for any penalties or interest on your Fees that your Educational Institution may charge you on outstanding Fees. If we inform you that you have been allocated Pool Funding or Individual Funding, it is your responsibility to inform your Educational Institution that you have been allocated funding and request that the Educational Institution does not charge you any penalties or interest on outstanding Fees.
                                </p>
                            </p>

                        </div>
                    </div>
                    <div className="titleCertificate col-12">
                        <h1
                            style={{
                                justifyContent: "center",
                                textAlign: "center",
                                marginTop: "10px",
                                marginBottom: "20px"
                            }}>
                            18A Certificate and Registration Documents:
                        </h1>
                    </div>
                    <div className=" buttonDownload-wrap col col-12 col-lg-12">
                        <Example />
                    </div>

                    <div className="row">

                    </div>
                </motion.div>
            </div >
            <style jsx>{`

            buttonDownload-wrap: {
                    justifyContent = "center",
               }
                `
            }</style>
        </div >

    )
}

export default PrivacySection;