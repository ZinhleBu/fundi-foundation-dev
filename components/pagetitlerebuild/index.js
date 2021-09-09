import Link from 'next/link'

const PageTitleRebuild = (props) => {
    return(
        <div className="wpo-breadcumb-area-rebuild">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{props.pageTitleRebuild}</h2>
                            <ul>
                                <li><Link href="/"><a>Home</a></Link></li>
                                <li><span>{props.pagesub}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitleRebuild;