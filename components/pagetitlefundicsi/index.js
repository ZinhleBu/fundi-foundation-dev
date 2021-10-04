import Link from 'next/link'

const PageTitleFundiCsi = (props) => {
    return(
        <div className="wpo-breadcumb-area-fundicsi">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{props.pageTitleFundiCsi}</h2>
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

export default PageTitleFundiCsi;