import React from 'react'
import logo from '../raven-logo.png';
import Raven from '../raven.png';
import Word from '../name.png';

function Header(){
    return(
        <header className="App-header">
            <div>
                <img src={logo} className="App-logo" />
                <span className="easy-pulse" />
                <img src={Raven} className="Raven" />
            </div>
            <img src={Word} className="center-block" />
        </header>
    )
}
export default Header;
