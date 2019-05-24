import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import NavBar from '../component/NavBar'
import ArticleBoard from '../component/ArticleForm'
import Footer from '../component/Footer'
import PostForm from '../component/PostForm'

import store from './store'

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div>
                    <NavBar />
                    <PostForm />
                    <ArticleBoard />
                    <Footer />
                </div>
            </Provider>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'))