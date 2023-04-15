import React from 'react'

function Navbar2() {
    return (
        <div style={{ height: 'auto', position: 'relative', width: '100%' }}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                <img src="./images/background img.jpg" alt="background" style={{ width: '100%', display: 'block' }} />
                <div className="container-fluid " style={{ justifyContent: 'flex-end', position: 'absolute' }}>
                    <a className="navbar-brand" href="/"><img src="./images/fur mama logo.png" alt="fur mama logo" width="200px" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{ justifyContent: "center" }}>
                        <ul className="navbar-nav">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pets
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Dogs</a></li>
                                    <li><a className="dropdown-item" href="/">Cats</a></li>
                                    <li><a className="dropdown-item" href="/">Small Pets</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pet Services
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Pet Adoption</a></li>
                                    <li><a className="dropdown-item" href="/">Pet Hostel</a></li>
                                    <li><a className="dropdown-item" href="/">Pet Grooming</a></li>
                                    <li><a className="dropdown-item" href="/">Pet Walking</a></li>
                                    <li><a className="dropdown-item" href="/">Pet Transport</a></li>
                                    <li><a className="dropdown-item" href="/">Pet Training</a></li>
                                    <li><a className="dropdown-item" href="/">Pet Mating</a></li>
                                    <li><a className="dropdown-item" href="/">Consult A Vet</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Breeds
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Dog Breeds</a></li>
                                    <li><a className="dropdown-item" href="/">Cat Breeds</a></li>
                                    <li><a className="dropdown-item" href="/">Small Pet Breeds</a></li>
                                    <li><a className="dropdown-item" href="/">Compare Breeds</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Blog
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Dog Care</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Foods
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Pet Food</a></li>
                                    <li><a className="dropdown-item" href="/">Pet Accessories</a></li>
                                    <li><a className="dropdown-item" href="/">MMP Deals</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    List Your Pet
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">For Sale</a></li>
                                    <li><a className="dropdown-item" href="/">For Mating</a></li>
                                    <li><a className="dropdown-item" href="/">For Adoption</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Join Us
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">As a Breeder</a></li>
                                    <li><a className="dropdown-item" href="/">As a Sitter</a></li>
                                    <li><a className="dropdown-item" href="/">As a Dog Trainer</a></li>
                                    <li><a className="dropdown-item" href="/">As a Dog Walker</a></li>
                                    <li><a className="dropdown-item" href="/">As a Dog Groomer</a></li>
                                    <li><a className="dropdown-item" href="/">As a Dog Veterinarian</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
                                </a>
                                <ul className="dropdown-menu">
                                    <div className="btn-group mx-1" role="group" aria-label="Default button group">
                                        <button type="button" class="btn btn-outline-primary">Login</button>
                                        <button type="button" class="btn btn-outline-primary">Sign Up</button>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div >
            </nav >
        </div>
    )
}

export default Navbar2
