import React, { useState } from 'react'
import Searchdown from './pages/Searchdown'
import './styles/SearchStyle.css'

function Searchbar() {
    const [selected, setSelected] = useState()
    return (
        <div className="search">
            <Searchdown selected={selected} setSelected={setSelected} />
            <button style={{ width: "80px", height: "35px", marginTop: "35px", borderRadius: "50px" }}>Search</button>
        </div>
    )
}

export default Searchbar
