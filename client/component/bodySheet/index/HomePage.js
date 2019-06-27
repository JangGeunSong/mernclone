import React, { Component } from 'react'
import NavBar from '../../navBar/NavBar'
import Footer from '../../footer/Footer'
import ArticleForm from './ArticleForm'
import PostForm from './PostForm'

export default class HomePage extends Component {
    
    componentDidMount() {
        document.title = 'HomePage';
    }

    render() {
        return (
            <div onClick={this.sendModalState}>
                <NavBar />
                <PostForm />
                <ArticleForm />
                <Footer />
            </div>
        )
    }
}
