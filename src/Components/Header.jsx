import React from 'react';
import './Header.css';  // Import CSS for styling

const Header = () => {
    return (
        <>
        <header className="header">
            <div className="container">
                <div className="header-left">
                    <a href="#home" className="header-link">
                    <h1>Aarchi Shah</h1>
                    <h2>Eat.Sleep.Code.Repeat</h2>
                    </a>
                 </div>

                <div className="header-right">
                    <nav>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skiils</a></li>
                            <li><a href="#Projects">Projects</a></li>
                            <li><a href="Contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header;
