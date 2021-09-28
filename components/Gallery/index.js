



const Gallery = (props) => {


    return (
        <><div className="container">
            <div className="row">
                <div className="col-lg-12 ">
                    <h1>Gallery</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 custom grid">
                    <div className="wpo-img-gallery">
                        <img src="images/R10Images/matome.jpg" alt="" />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 custom grid">
                    <div className="wpo-img-gallery">
                        <img src="images/R10Images/matome2.jpg" alt="" />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 custom grid">
                    <div className="wpo-img-gallery">
                        <img src="images/R10Images/sivu.jpg" alt="" />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 custom grid">
                    <div className="wpo-img-gallery">
                        <img src="images/R10Images/school.jpg" alt="" />
                    </div>
                </div>
                
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 custom grid">
                    <div className="wpo-img-gallery">
                        <img src="images/R10Images/mandisa2.jpg" alt="" />
                    </div>
                </div>
                
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 custom grid">
                    <div className="wpo-img-gallery">
                        <img src="images/R10Images/akani.jpg" alt="" />
                    </div>
                </div>
                
            </div>
                    
                       
                       
        </div>

            <style jsx>{`

                .seeMore {

                left: "500px",


                }
                        `}
            </style></>
    )
}

export default Gallery;