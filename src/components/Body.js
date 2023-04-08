import React from 'react'
import Card from './pages/Card'

function Body() {
    return (
        <div style={{ marginTop: '100px' }}>
            <h1 style={{ textAlign: "center", marginTop: "20px" }}>Available Pets</h1>
            <p style={{ textAlign: "center", margin: "10px" }}>Explore and choose your perfect pet.</p>
            <Card />
        </div>
    )
}

export default Body
