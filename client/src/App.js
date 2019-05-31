import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import NavBar from '../component/NavBar'
import ArticleBoard from '../component/ArticleForm'
import Footer from '../component/Footer'
import PostForm from '../component/PostForm'

import store from './store'

export default class App extends Component {

    index() {
        return (
            <div>
                <NavBar />
                <PostForm />
                <ArticleBoard />
                <Footer />
            </div>
        )
    }

    features() {
        return (
            <div>
                <NavBar />
                <PostForm />
                <ArticleBoard />
                <Footer />
            </div>
        )
    }

    pricing() {
        return (
            <div>
                <NavBar />
                <PostForm />
                <ArticleBoard />
                <Footer />
            </div>
        )
    }

    about() {
        return (
            <div>
                <NavBar />
                <PostForm />
                <ArticleBoard />
                <Footer />
            </div>
        )
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Route path="/" component={this.index.bind(this)} />
                    <Route path="/about" component={this.about.bind(this)} />
                    <Route path="/features" component={this.features.bind(this)} />
                    <Route path="/pricing" component={this.pricing.bind(this)} />
                </BrowserRouter>
            </Provider>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'))