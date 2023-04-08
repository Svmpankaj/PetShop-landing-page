import React from 'react'

function PhotoCard() {
    return (
        <>
            <div className="container my-3" style={{ display: "flex", justifyContent: "center", marginTop: '50px' }}  >
                <div className="card-group mx-2">
                    <div className="card mx-2 ">
                        <img src="./images/pic3.jpg" className="card-img-top" alt="..." style={{ width: '100%' }} />
                        <div className="card-body mx-5">
                            <h6 className="card-title">Pet Healt</h6>
                        </div>
                    </div>
                    <div className="card mx-2">
                        <img src="./images/pic3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body mx-5">
                            <h6 className="card-title">Pet Kids</h6>
                        </div>
                    </div>
                    <div className="card mx-2">
                        <img src="./images/pic3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body mx-5">
                            <h6 className="card-title">Pet Breeds</h6>
                        </div>
                    </div>
                </div>

                <div className="card-group mx-2">
                    <div className="card mx-2 ">
                        <img src="./images/pic3.jpg" className="card-img-top" alt="..." style={{}} />
                        <div className="card-body mx-5">
                            <h6 className="card-title">Pet Healt</h6>
                        </div>
                    </div>
                    <div className="card mx-2">
                        <img src="./images/pic3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body mx-5">
                            <h6 className="card-title">Pet Kids</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhotoCard
