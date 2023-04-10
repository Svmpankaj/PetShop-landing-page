import React from 'react'

function SlideCard() {
    return (
        <div className='container' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./images/pic2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./images/pic3.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./images/dog vaccination.jpeg" className="d-block w-100" alt="..." />
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
            <div className="container">
                <h3>MEGHA SINGH BUY A PUG WITH KCI REGISTERED BY MR.JAIN</h3>
                <p>We believe finding a puppy shouldn't be filled with mystery or compromise. so we work extra hard to take care of the details so you can focus on what really matters: the joy of your new furry family member! We'll continue to be here if you need us.</p>
                <h6>View All Pets</h6>
            </div>
        </div>
    )
}

export default SlideCard
