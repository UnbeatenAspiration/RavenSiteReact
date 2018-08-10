import React from 'react'
import logo from '../images/raven-logo.png';
import Raven from '../images/raven.png';
import Word from '../images/name.png';

function Header(){
    return(
        <header className="App-header">
            <div >
                <img src={logo} className="App-logo" />
                <span className="easy-pulse" />
                <img src={Raven} className="Raven" />
            </div>
            <img src={Word} className="center-block" />
        </header>
    )
}
export default Header;
