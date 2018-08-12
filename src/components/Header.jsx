import React from 'react'
import logo from '../images/raven-logo.png';
import Raven from '../images/raven.png';
import Word from '../images/name.png';

function Header(){
    return(
        <header className="App-header">
            <div>
                <img src={logo} className="App-logo" alt="Raven" />
                <span className="easy-pulse" />
                <img src={Raven} className="Raven" alt="Raven"/>
            </div>
            <img src={Word} className="center-block" alt="Raven"/>
        </header>
    )
}
export default Header;
