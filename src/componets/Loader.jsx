import React from 'react'
import './styles/Loader.css'

function Loader(){
    return (
        <React.Fragment>    
            <div className="loader-container">
                <span className="dot-span-1">.</span>
                <span className="dot-span-2">.</span>
                <span className="dot-span-3">.</span>
            </div>
        </React.Fragment>
    )
}

export default Loader