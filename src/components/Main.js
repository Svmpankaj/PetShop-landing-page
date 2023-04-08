import React from 'react'
import './styles/SearchStyle.css'
import Searchbar from './Searchbar'

function Main() {
    return (
        <>
            <div className="title">
                <h1 style={{
                    textAlign: "center",
                    color: "#125973",
                    marginTop: '20px',
                    fontFamily: "sans-serif",
                    fontSize: "33px"
                }}>
                    Pets Complete Your Family!!
                </h1>
            </div >
            <Searchbar />
        </>
    )
}

export default Main
