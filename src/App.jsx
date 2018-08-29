import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AllHeroes from './components/heroPage/All'
import ComicsList from './components/main-page/ComicsList';
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import {CreateBrowserHistory as CBH} from 'history/createBrowserHistory'
import './css/App.css';
import './css/fonts.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
class App extends Component {
  render() {
    return (
        <div>
            <div className="falling-leaves">
                <Header />
            </div>
            <main>
                <BrowserRouter history = {CBH}>
                    <Switch>
                        <Route exact path="/" component={ComicsList} ></Route>
                        <Route  path="/characters" component={AllHeroes} ></Route>
                    </Switch>
                </BrowserRouter>
            </main>
            <Footer />
        </div>
    )
  }
}
export default App;
