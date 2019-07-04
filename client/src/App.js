import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'

import HomePage from '../component/bodySheet/index/HomePage'
import About from '../component/bodySheet/about/About'
import Features from '../component/bodySheet/features/Features'
import NotFound from '../component/bodySheet/notFound/NotFound'


import store from './store'

export default class App extends Component {

    render() {
        const NotFoundComponent = () => (
            <div>
                <NotFound />
            </div>
        )
        return (
            <Provider store={store}>
                <Switch location={location}>
                    <Route 
                        path='/' 
                        exact
                        render={(routerProps) => (
                            <HomePage {...routerProps} isOpen={true} />
                        )}
                    />
                    <Route 
                        path='/about' 
                        render={(routerProps) => (
                            <About {...routerProps} isOpen={true} />
                        )}
                    />
                    <Route 
                        path='/features' 
                        render={(routerProps) => (
                            <Features {...routerProps} isOpen={true} />
                        )}
                    />
                    <Route component={NotFoundComponent} />
                </Switch>
                {
                    /*
                        That Router add 404 Not Found componenet must need the switch componenet.
                    */
                }
            </Provider>
        )
    }

}