import React, { Component } from 'react';
import Header from './components/Header';
import ComicsList from './components/ComicsList';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

class App extends Component {
  render() {
    return (
        <div className="falling-leaves">
            <Header />
            <main>
                <ComicsList />
            </main>
        </div>
    )
  }
}

export default App;
