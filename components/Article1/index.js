import React from 'react';
import SidebarWrap from '../SidebarWrap'

const Article1 = (props) => {

    return (
        <div className="wpo-event-details-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8">
                        <div className="wpo-event-item">
                            <div className="wpo-event-img">
                                <img src='images/event-details2-ayanda.jpg' alt="" />
                                <div className="thumb-text">
                                    <span>25</span>
                                    <span>NOV</span>
                                </div>
                            </div>
                            <div className="wpo-event-details-text">
                                <h2>Ayandamantombazane Mhlongo writes:</h2>
                                <p>The job market is extremely competitive and skilled employees are high in demand. Degrees are required for a wide range of careers such as Medicine, Education, Engineering, Accounting and Law.</p>
                                <p>A university education will help the youth succeed in today's workforce and establish an enjoyable career of their choice.</p>
                                <p>This past week, students took to the streets to protest over a number of issues, including the financial exclusion of some 6,000 students due to historical debt.  In Solidarity with students across the country The R10 Goes A Long Way Initiative strives to assist with the current plight of students in South Africa who are currently unable to attend University due to their financial difficulties. This initiative is set to assist 50 students to be able to register for University & finally get a chance to participate in today’s economy.  </p>
                                <p>The impact of the R10 Goes A Long Way initiative will allow 50 students who were financially excluded in the year of 2021 to register to study further at University.</p>
                            </div>
                        </div>
                    </div>
                    <SidebarWrap />

                </div>
            </div>
        </div>

    );
}

export default Article1;




