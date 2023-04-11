import React from 'react'
import PhotoCard from './pages/PhotoCard'
import LogoCard from './pages/LogoCard'
import SlideCard from './pages/SlideCard'
import AddPet from './pages/AddPet'

function Body() {
    return (
        <>
            <div style={{ marginTop: '100px' }}>
                <AddPet />
                <h1 style={{ textAlign: "center", marginTop: "20px" }}>Available Pets</h1>
                <p style={{ textAlign: "center", margin: "10px" }}>Explore and choose your perfect pet.</p>
                <PhotoCard />
                <div className='bcontainer' style={{ display: 'flex', justifyContent: 'center' }}>
                    <button type="button" className="btn btn-primary btn-success my-5" style={{ width: '' }} >
                        View More Puppies
                    </button>
                </div>
                <h1 style={{ textAlign: "center", marginTop: "20px" }}>Why MMP?</h1>
                <p style={{ textAlign: "center", margin: "10px" }}>Looking for a furry companion? Know why MMP is the perfect options for you.</p>
                <LogoCard />
                <h1 style={{ textAlign: "center", marginTop: "20px" }}>Exciting Services For Your Pets</h1>
                <h1 style={{ textAlign: "center", marginTop: "20px" }}>Meet Our Happy Customers</h1>
                <SlideCard />
            </div>
        </>
    )
}

export default Body
