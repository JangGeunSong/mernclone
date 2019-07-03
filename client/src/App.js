import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

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
                    <Route render={({ location }) => (
                        <TransitionGroup>
                            <CSSTransition
                                key={location.pathname.split('/')[1]}
                                classNames="fade"
                                timeout={450}
                                mountOnEnter={true}
                                unmountOnExit={true}
                            >
                                <div className="WRAPPER">
                                    <Switch location={location}>
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
                                </div>
                            </CSSTransition> {/* 현 단계에서 적용 안됨 페이지 전체가 변화하여 의미가 없는 결과로 나타난것으로 생각됨. */}
                        </TransitionGroup>
                    )} />
                </BrowserRouter>
            </Provider>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'))