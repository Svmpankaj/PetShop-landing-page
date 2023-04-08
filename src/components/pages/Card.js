import React from 'react'

function Card() {
    return (
        <div className="nav justify-content-center" style={{ width: "18rem", display: "flex", flexDirection: "column" }}>
            {/* <img src="./images/pic2.jpg" className="card-img-top" alt="..." /> */}
            {/* <div className="card-body" style={{ color: "grey" }}>
                <p className="card-text" >Dog Pic</p>
            </div> */}
            <div className="text-center">
                <img src="./images/pic2.jpg" className="rounded" alt="..." style={{ width: "200px", justifyContent: "center" }} />
                <div className="card-body" >
                    <p className="card-text" >Dog Pic</p>
                </div>
            </div>
            <div className="text-center">
                <img src="./images/pic2.jpg" className="rounded" alt="..." style={{ width: "200px", justifyContent: "center" }} />
                <div className="card-body" >
                    <p className="card-text" >Dog Pic</p>
                </div>
            </div>
        </div>
    )
}

export default Card
