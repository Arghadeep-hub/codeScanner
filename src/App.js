import React, { useState } from 'react';
import aboutImage from './images/about-img.png';
import './App.css';
import QrScanner from './QrScanner';


function App() {
    const [displayed, setDisplay] = useState()
    
    return (
        <div className="about section">
            <div className="column">
                <div className="image">
                    <img src={aboutImage} alt="mobile" />
                </div>
                <div className="content">
                    <h3>Socialise</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus repudiandae quisquam reiciendis ullam! At earum repellat amet eum facere architecto placeat quia inventore possimus explicabo nesciunt, sequi, voluptatem porro.</p>
                    <div className="static-sanner" style={displayed !== undefined ? { display: "none" } : { display: "flex" }}>
                        <div className="inner">
                            <h2>Scan Here</h2>
                            <div className="bar">
                            </div>
                        </div>
                    </div>
                    {displayed && <QrScanner />}
                    <div className="buttons">
                        <a href className="btn" outline onClick={() => { setDisplay(true) }}>Scan The QR Code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App

