import Link from 'next/link'


const SidebarWrap = () => {

    const SubmitHandler = (e) =>{
       e.preventDefault()
    }

    return(
        <div className="col col-lg-4 col-12">
            <div className="wpo-blog-sidebar">
                {/* <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.."/>
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div> */}
                <div className="widget recent-post-widget">
                    <h3>Recent posts</h3>
                    <div className="posts">
                    <div className="post">
                            <div className="img-holder">
                                <img src='images/recent-posts/R10.jpg' alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link href="/R10EventBlogPost">#R10RandGoesALong Way ignites new possibility...</Link></h4>
                                <span className="date">18 Nov 2021</span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src='images/recent-posts/event-details2-ayanda.jpg' alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link href="/AyandamantombazaneBlogPost">Ayandamantombazane Mhlongo writes:</Link></h4>
                                <span className="date">22 Jan 2021</span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src='images/recent-posts/img-1-sakhile.jpg' alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link href="/SakhileBlogPost">Struggling Sakhile’s academic dreams come true.</Link></h4>
                                <span className="date">25 Jun 2021</span>
                                <span className="date"> ,Erica Abrahams </span>

                            </div>
                        </div>
                      
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link href="/">Donations</Link></li>
                        <li><Link href="/">Charity</Link></li>
                        <li><Link href="/">School</Link></li>
                        <li><Link href="/">Fundi</Link></li>
                        <li><Link href="/">Helping Hand</Link></li>
                        <li><Link href="/">Cheque</Link></li>
                    </ul>
                </div>
            </div>
        </div>
     )
        
}

export default SidebarWrap;
