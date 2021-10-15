import React from 'react'
import Link from 'next/link'
import HeaderTopbar from '../HeaderTopbar'
import MobileMenu from '../../components/MobileMenu'
import { motion } from 'framer-motion'
const Header = () => {
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className="middle-header header-style-3">
            {/* <HeaderTopbar/> */}
            <div className="container">
                <div className="header-content">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .5 }}
                                exit={{ opacity: 0 }}
                                className="logo">
                                <Link href="/HomePage3" title="">
                                    <a><img src='images/fundifoundation-logo-blue.png' alt="" /></a>
                                </Link>
                            </motion.div>
                        </div>
                        <div className="col-lg-8 d-lg-block d-none">
                            <nav>
                                <ul>
                                    <motion.li
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ delay: .2 }}
                                    ><Link className="active" href="/HomePage3" title="">Home</Link>
                                      
                                    </motion.li>
                                    <motion.li
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ delay: .3 }}
                                    ><Link href="/AboutPage" title="">About</Link></motion.li>
                                    <motion.li
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ delay: .4 }}
                                    ><Link href="/CasePage" title="">Causes</Link>
                                        <ul>
                                            <li><Link href="/CaseSinglePageR10" title="">R10 Goes a Long way</Link></li>
                                            <li><Link href="/CaseSinglePageFund" title="">FundiFund 12412</Link></li>
                                            <li><Link href="/CaseSinglePageRebuild" title="">Unite4Schools</Link></li>
                                            <li><Link href="/CaseSinglePageLeaders" title="">Leaders4Learners</Link></li>
                                            <li><Link href="/CaseSinglePageFundiCsi" title="">Fundi CSI</Link></li>
                                            <li><Link href="/PrivacyPage" title="">Privacy Policy</Link></li>

                                        </ul>
                                    </motion.li>
                                    <motion.li
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ delay: .5 }}
                                    ><Link href="/EventPage" title="">Press</Link>
                                      
                                    </motion.li>
                                    {/* <motion.li
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ delay: .5 }}
                                    ><li><Link href="/PrivacyPage" title="">Privacy Policy</Link></li>
                                    </motion.li> */}
                                    
                                    <motion.li
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ delay: .6 }}
                                    ><Link href="/ContactPage" title="">Contact</Link></motion.li>
                                </ul>
                            </nav>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: .7 }}
                            className="col-lg-1 col-md-6 col-sm-6 col-6">
                            <div className="contact">
                                <div className="cart-search-contact">
                                
                                </div>
                            </div>
                        </motion.div>
                        <div className="col-md-2 col-sm-2 col-2">
                            <MobileMenu />
                        </div>
                    </div>

                    <div className="clearfix"></div>
                </div>

            </div>
        </div>
    )
}

export default Header;