import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import HomePage from '../component/bodySheet/index/HomePage'
import About from '../component/bodySheet/about/About'
import Features from '../component/bodySheet/features/Features'
import Pricing from '../component/bodySheet/pricing/Pricing'
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
        const PricingComponent = () => (
            <div>
                <Pricing />
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
                    <Route 
                        path="/" 
                        exact
                        component={ IndexComponent } 
                    />
                    <Route 
                        path="/about" 
                        component={ AboutComponent } 
                    />
                    <Route 
                        path="/features" 
                        component={ FeaturesComponent } 
                    />
                    <Route 
                        path="/pricing" 
                        component={ PricingComponent } 
                    />
                    <Route 
                        path="*"
                        component = { NotFoundComponent }
                    />
                </BrowserRouter>
            </Provider>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'))