import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'

import HomePage from '../component/bodySheet/index/HomePage'
import About from '../component/bodySheet/about/About'
import Features from '../component/bodySheet/features/Features'
import NotFound from '../component/bodySheet/notFound/NotFound'

import store from './store'

export default class App extends Component {

    render() {
        const IndexComponent = () => (
            <div>
                <HomePage />
            </div>
        )
        const AboutComponent = () => (
            <div>
                <About />
            </div>
        )
        const FeaturesComponent = () => (
            <div>
                <Features />
            </div>
        )
        const NotFoundComponent = () => (
            <div>
                <NotFound />
            </div>
        )
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact component={IndexComponent} />
                        <Route path='/about' component={AboutComponent} />
                        <Route path='/features' component={FeaturesComponent} />
                        <Route component={NotFoundComponent} />
                    </Switch>
                    {
                        /*
                            That Router add 404 Not Found componenet must need the switch componenet.
                        */
                    }
                </BrowserRouter>
            </Provider>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'))