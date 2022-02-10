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

                                <p>
                                    •	You must provide us with all the information and documents that we request in order to qualify for funding.

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
                                    •	We do not guarantee that you will receive any funding, through Fundi Foundation Platform.
                                </p>
                            </p>

                        </div>
                        <div className="col-12">
                            <h1>6.	Your Information</h1>
                            <p>
                                •	Other users of the Fundi Foundation Platform will be able to see, copy and use the information that you display on your Profile.

                            </p>
                            <p>•	We can remove any information or content that you post or share on the Platform if it goes against these Terms.</p>
                        </div>
                        <div className="col-12">
                            <h1>7.	Other parties’ information</h1>
                            <p>
                                -	You use any content or information belonging to or provided by third parties on the Fundi Foundation at your own risk.

                            </p>
                            <p>
                                -  We are not responsible for:
                                <br />
                                •	any content or information provided by third parties on the Platform or for any Loss that you may suffer because you relied on it; or
                                <br />
                                •	any content, information, goods or services on a third party’s website that was accessed through a link on the Platform.
                            </p>
                        </div>
                        <div className="col-12">
                            <h1>8.	Using Fundi Foundation site</h1>
                            <h5>	When you use the Platform you must:</h5>
                            <p>
                                •	comply with all Applicable Laws;
                            </p>
                            <p>
                                •	only provide accurate and correct information;
                            </p>
                            <p>•	use the Platform in a professional manner.</p>
                            <h5>	When you use the Platform you must not:</h5>
                            <p>
                                •	act dishonestly, unlawfully or unprofessionally;
                            </p>
                            <p>
                                •	use the Platform in an offensive way, including using offensive language;

                            </p>
                            <p>
                                •	create a false identity or misrepresent your identity or any information about you;

                            </p>
                            <p>
                                •	create a Profile for anyone other than yourself;
                            </p>
                            <p>•	use or attempt to use someone else’s profile;</p>
                            <p>•	copy the profiles or information of others through any means;</p>
                            <p>•	use or share information belonging to others unless they have allowed you to do so;</p>
                            <p>•	disclose any information that you do not have the right to disclose;</p>
                            <p>•	introduce any software or data onto the Platform that could negatively affect a computer system, such as viruses, trojans and other malicious (dangerous) software.</p>
                            <h5>	Standard data costs will be charged by your ISP every time you use the Fundi Foundation Platform.</h5>

                        </div>
                        <div className="col-12">
                            <h1>9.	Security for the Platform</h1>
                            <p>
                                •	You must keep your Password secret and safe. It is not safe to keep your Password on a Device.
                                <br /><br />
                                •	You waive any claim you may have against us for any Loss you may suffer if you have not kept your Password safe or if someone else uses your Password or your Device.
                                <br /><br />

                                •	If your Device is lost, stolen or not in your possession, you have lost your Password or you suspect that someone may have unauthorised access to your Password you must immediately use another Device to access the Platform and reset your Password.

                            </p>
                        </div>
                        <div className="col-12">
                            <h1>10.	Software and hardware</h1>
                            <p>
                                •	You must use a Device (hardware) and software (programs) suitable for the Platform. If you do not, the Platform may not work properly and this could increase your security risks.
                                <br /><br />
                                •	We do not guarantee or suggest that the Platform or any file, download or application, whether or not it is made available by a third party, on the Platform is safe to use on any computer. We cannot guarantee that the Platform or such file, download or application does not have software or data that can negatively affect a computer system, such as viruses, trojans and other malicious (dangerous) software (Malware). We will not be liable (responsible) for any Loss that you may suffer because of any Malware
                            </p>
                        </div>
                        <div className="col-12">
                            <h1>11.	Our Intellectual Property on the Platform.</h1>
                            <p>
                                •	We and/or our third-party licensors (as applicable) own and will continue to own the Intellectual Property Rights in and to the Platform.
                                <br /><br />

                                •	Even if any content on the Platform is not confidential or there are no Intellectual Property Rights in it, we and/or our third-party licensors (as applicable) own the content and you have no rights in it.
                                <br /><br />

                                •	We give you a revocable, non-assignable, non-sub-licensable, non-transferable, non-exclusive licence to use the Platform, which incorporates our and/or our third-party licensors’ (as applicable) Intellectual Property, and any updates and/or upgrades to it. You may use the Platform, which incorporates our and/or our third-party licensors (as applicable) Intellectual Property, for the purpose set out in these Terms only and for no other purpose.
                                <br /><br />

                                •	The licence to use the Platform and the Intellectual Property in it will start when you sign up for the Platform and will carry on until it is ended in line with these Terms.
                                <br /><br />

                                •	The Platform is licensed to you only. You may not grant any rights of use or any other rights in respect of the Platform, the Intellectual Property Rights in it, or any content on it (including content belonging to third parties) to any other person.
                                <br /><br />

                                •	You may not in any manner exploit the Platform and any Intellectual Property in it for commercial gain of any nature.
                                <br /><br />

                                •	You may not copy, adapt, modify, alter, de-compile, reverse engineer, attempt to derive the source code of, create derivative works of, or otherwise attempt to reproduce the Platform, the Intellectual Property in it, its content, its design, any updates to it, or any proprietary features in or to it, or any parts of it. This prohibition applies to any content belonging to third parties that is found on the Platform.
                                <br /><br />

                                •	When you use the Fundi Foundation platform you must not violate anyone else’s Intellectual Property Rights.
                                <br /><br />

                                •	You own all of the content, information and Personal Information that you provide us with, but you grant us a revocable, non-assignable, non-sub-licensable, transferable, non-exclusive licence to use it. This includes your name, identity number, details of your Educational Institution enrolment, Fees and personal stories that you provide.

                            </p>
                        </div>
                        <div className="col-12">
                            <h1>12.	Using and sharing your Personal Information</h1>
                            <p>
                                •	You consent to us collecting your Personal Information from you and/or directly from your Educational Institution and where lawful and reasonable, from public sources and third parties (including your Educational Institution) to verify any information you provide us, for compliance purposes, and for the purposes set out below.
                                <br /><br />
                                •	If you give us Personal Information about or on behalf of another person, you confirm that you are authorised to: (a) give us the Personal Information; (b) consent on their behalf to the Processing of their Personal Information, specifically where Personal Information is Processed by our service providers outside the country where the Platform is provided; and (c) receive any privacy notices on their behalf.
                                <br /><br />

                                •	You consent to us Processing your Personal Information:
                                <br /><br />

                                •	to provide the Platform to you in terms of these Terms;
                                <br /><br />

                                •	by requesting on your behalf that your Educational Institution provide us with your Personal Information such as your academic records and your financial obligations to your Educational Institution;
                                <br /><br />

                                •	to verify any information that you have provided to us, including Personal Information on or about another person, so that we can determine whether you qualify for funding;
                                <br /><br />

                                •	to carry out statistical and other analyses to identify trends and evaluate and improve the Platform (this includes improving existing and developing new products and services); and
                                <br /><br />

                                •	by sharing your Personal Information with potential funders, funders and our third-party service providers, locally and in countries outside the country where the Platform is provided. These countries may not have the same data protection laws as the country where the Platform is provided. Where we can, we will ask the receiving party to agree to our privacy policies.
                                <br /><br />

                                •	You consent to us publishing your name, personal stories and any other information that you have that you have uploaded onto your Profile on our website and in any of our marketing material or communications.
                                <br /><br />

                                •	You consent to us contacting you for research purposes relating to the Platform.

                            </p>
                        </div>
                        <div className="col-12">
                            <h1>13.	Your responsibility for our loss or damages</h1>
                            <p>
                                •	You are responsible for your use of the Platform and anything that happens on or through your Profile.
                                <br /><br />
                                •	You are liable (responsible) for any Loss that we may suffer because:
                                <br /><br />

                                •	you breach any of these Terms;
                                <br /><br />

                                •	of any claims against us relating to you using (i) the Platform; or (ii) any Intellectual Property Rights in the Platform; in an unauthorised way or for any illegal purpose.

                            </p>
                        </div>
                        <div className="col-12">
                            <h1>14.	Disclaimer and limitation of liability (limits our responsibility to you)</h1>
                            <p>
                                •	Information on the Platform is provided "as is" and we will not be responsible for any Loss that may follow if you rely on it.
                                <br /><br />
                                •	We are not responsible for any Loss related to your use of the Platform, for any reason, even if we were told that Loss was possible.
                                <br /><br />

                                •	We are not responsible for any Loss caused by: someone finding out your Password; any technical or other problems (interruption, malfunction, downtime or other failures) which affect the Platform or your access to the Platform; any Personal Information or other information being lost or damaged because of technical problems, power failures, unlawful acts (such as data theft), a harmful computer program or virus, or your own negligence (lack of care); any failure or problem affecting goods or services provided by any other party, for example, a telecommunication service provider (such as Telkom), mobile network operator, ISP, electricity supplier (such as Eskom), or a local or other authority; or any event that we have no control over.

                            </p>
                        </div>
                        <div className="col-12">
                            <h1>15.	Changes or updates to these Terms</h1>
                            <p>
                                We may change or update these Terms or to the Platform from time to time. The latest version of the Terms will apply to you each time you use the Platform.
                            </p>
                        </div>
                        <div className="col-12">
                            <h1>16.	Changing the Platform or Ending these terms</h1>
                            <p>
                                •	We may change or discontinue the Platform or any of the services offered by the Platform. If we do, we will not store or keep showing any information or content that you provided us with.
                                <br /><br />

                                •	We are not obliged to store, maintain or provide you with a copy of any content or information that you or a third party has provided us with.
                                <br /><br />

                                •	We may limit your use of the Fundi Foundation platform, stop you using the Platform or end our relationship with you at any time, and for any reason, including if we:
                                <br /><br />

                                •	believe or suspect you are using the Platform wrongly or unlawfully (illegally); or
                                <br /><br />

                                •	that you have breached these Terms; or
                                <br /><br />

                                •	must do this for legal reasons.
                                <br /><br />

                                •	Termination for any reason will result in the cancellation of your access to and your use of the Platform and the Intellectual Property in it, and you must immediately stop all use of the Platform and the Intellectual Property in it.
                            </p>
                        </div>
                        <div className="col-12">
                            <h1>17.	How disagreements or differences will be resolved</h1>
                            <p>
                                If you have a complaint about your use of the Platform or these Terms, please contact the Contact Centre. If you are not happy with the way the complaint is settled once you have done this you can approach any South African court of law that has jurisdiction (authority in this area).
                            </p>
                        </div>
                        <div className="col-12">
                            <h1>18.	Where legal documents and notices will be sent</h1>
                            <p>
                                We choose the following address for the service or delivery of any legal documents (our domicilium citandi et executandi):                            </p>
                            <h5>Address:</h5>
                            Hendrik Potgieter Rd & 14th Ave,
                            <br />
                            Weltevreden Park,
                            <br />
                            1751

                        </div>
                        <div className="col-12">
                            <h1>19.	Law governing our relationship</h1>
                            <p>
                            South African law will govern these Terms.
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

            buttonDownload-wrap {
                    justifyContent = "center",
               }
                `
            }</style>
        </div >

    )
}

export default PrivacySection;