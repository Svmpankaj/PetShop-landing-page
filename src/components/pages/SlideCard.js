import React from 'react'

function SlideCard() {
    return (
        <>
            <div className="row mx-5 my-3" >
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade mx-5">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./images/pic2.jpg" className="d-block w-100" alt="First" />
                            </div>
                            <div className="carousel-item">
                                <img src="./images/pic3.jpg" className="d-block w-100" alt="Second" />
                            </div>
                            <div className="carousel-item">
                                <img src="./images/dog vaccination.jpeg" className="d-block w-100" alt="Third" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 testimonial_section">
                    <h4>Megha Singh Buy a pug with KCI Registered by Mr. Jain</h4>
                    <p> We believe finding a puppy shouldn't be filled with mystery or compromise, so we work extra hard to take care of the details so you can focus on what really matters: the joy of your new furry family member! We'll continue to be here if you need us.
                    </p>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 p-0 float-left">
                        <a className="web_i_name web-clk-a" name="View All Pets Bottom Testimonial" href="dogs-for-sale">View All Pets </a>
                    </div>

                </div>
            </div>
        </>

    )
}
// style = {{ displat: 'flex', flexWrap: 'wrap', marginLeft: '-15px', marginRight: '-15px' }}

export default SlideCard
