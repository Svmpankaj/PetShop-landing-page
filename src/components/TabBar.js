import React from 'react'

function TabBar() {
    return (
        <div style={{ marginTop: "200px" }}>
            <ul className="nav justify-content-center mt-10 " >
                <li className="nav-item mx-2">
                    <a className="nav-link active" aria-current="page" href="/" color='#000'>Breed Information</a>
                </li>
                <li className="nav-item mx-2">
                    <a className="nav-link" href="/">Compare Breed</a>
                </li>
                <li className="nav-item mx-2">
                    <a className="nav-link" href="/">Blog</a>
                </li>
                <li className="nav-item mx-2">
                    <a className="nav-link" href="/">Pet Transportation</a>
                </li>
                <li className="nav-item mx-2">
                    <a className="nav-link" href="/">Pet Adoption</a>
                </li>
                <li className="nav-item mx-2">
                    <a className="nav-link" href="/">Mating Services</a>
                </li>

            </ul>
        </div>
    )
}

export default TabBar
