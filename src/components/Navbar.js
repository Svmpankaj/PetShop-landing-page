import React, { useState } from 'react'
import './styles/Navbar.css'
import Dropdown from './pages/Dropdown'
import Dropdown2 from './pages/Dropdown2'
import Dropdown3 from './pages/Dropdown3'
import Dropdown4 from './pages/Dropdown3'
import Dropdown5 from './pages/Dropdown5'
import Logindown from './pages/Logindown'
import Searchbar from './Searchbar'


function Navbar() {
    const [selected, setSelected] = useState()

    return (

        <>
            <nav>
                <div className="container">
                    <div>
                        <a href="/" style={{ width: "0%" }}><img className='imgage' src="./images/fur mama logo.png" alt="logo" /></a>
                    </div>
                    <div >
                        <Dropdown selected={selected} setSelected={setSelected} />
                    </div>
                    <div >
                        <Dropdown2 selected={selected} setSelected={setSelected} />
                    </div>
                    <div >
                        <Dropdown3 selected={selected} setSelected={setSelected} />
                    </div>
                    <div >
                        <Dropdown4 selected={selected} setSelected={setSelected} />
                    </div>
                    <div >
                        <Dropdown5 selected={selected} setSelected={setSelected} />
                    </div>
                    <div  >
                        <Logindown selected={selected} setSelected={setSelected} />
                    </div>
                </div>
                <div className="title">
                    <h1>Pets Complete Your Family!!</h1>
                </div>
                <Searchbar />
            </nav>
        </>
    )
}

export default Navbar
