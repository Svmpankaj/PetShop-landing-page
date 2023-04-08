import React from 'react'

function LogoCard() {
    return (
        <>
            <div className="container my-3" style={{ display: "flex", justifyContent: "center", marginTop: '50px', width: '45%' }}  >
                <div className="card-group mx-2">
                    <div className="card mx-2 ">
                        <img src="./images/health pet.jpeg" className="card-img-top" alt="..." style={{ width: '80%', marginLeft: '20px', marginTop: '10px' }} />
                        <div className="card-body mx-5">
                            <h6 className="card-title my-2">Pet Healt</h6>
                        </div>
                    </div>
                    <div className="card mx-2">
                        <img src="./images/dog vaccination.jpeg" className="card-img-top" alt="..." style={{ marginTop: '5px' }} />
                        <div className="card-body mx-5">
                            <h6 className="card-title" style={{ marginTop: '20px' }}>Pet Kids</h6>
                        </div>
                    </div>
                    <div className="card mx-2">
                        <img src="./images/injection.jpg" className="card-img-top" alt="..." style={{ margin: '5px', width: "95%" }} />
                        <div className="card-body" style={{ marginLeft: '30px' }}>
                            <h6 className="card-title" style={{ marginTop: '20px', width: '100%' }}>Pet Breeds</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-3" style={{ display: "flex", justifyContent: "center", marginTop: '50px', width: '45%' }}  >
                <div className="card-group mx-2">
                    <div className="card mx-2 " style={{ height: '80%' }}>
                        <img src="./images/education.jpg" className="card-img-top" alt="..." style={{ width: '80%', marginLeft: '20px' }} />
                        <div className="card-body mx-5">
                            <h6 className="card-title my-2">Pet Healt</h6>
                        </div>
                    </div>
                    <div className="card mx-2" style={{ height: '80%' }}>
                        <img src="./images/drop.jpg" className="card-img-top" alt="..." style={{ marginTop: '5px', width: '70%' }} />
                        <div className="card-body mx-5">
                            <h6 className="card-title" style={{ marginTop: '20px' }}>Pet Kids</h6>
                        </div>
                    </div>
                    <div className="card mx-2" style={{ height: '80%' }}>
                        <img src="./images/headphone.jpeg" className="card-img-top" alt="..." style={{ margin: '5px', width: "95%", height: '70%' }} />
                        <div className="card-body" style={{ marginLeft: '30px', height: '10%' }}>
                            <h6 className="card-title" style={{ marginTop: '5px', width: '100%' }}>Pet Breeds</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogoCard
