import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../component/NavBar'
import ArticleBoard from '../component/ArticleForm'
import Footer from '../component/Footer'

export default class App extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <ArticleBoard />
                <Footer />
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'))