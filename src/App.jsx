import React, { PureComponent } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import {CreateBrowserHistory as CBH} from 'history/createBrowserHistory'
import './css/App.css';
import './css/fonts.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

class App extends PureComponent {
  render() {
    return (
        <div>
            <div className="falling-leaves">
                <Header />
            </div>
            <main>
                <BrowserRouter history={CBH}>
                    <Switch>
                        <Route exact path="/" component={MainPage} ></Route>
                        <Route  path="/characters" component={MainPage} ></Route>
                    </Switch>
                </BrowserRouter>
            </main>
            <Footer />
        </div>
    )
  }
}
export default App;
