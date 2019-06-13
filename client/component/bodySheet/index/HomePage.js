import React, { Component } from 'react'
import NavBar from '../../navBar/NavBar'
import Footer from '../../footer/Footer'
import ArticleForm from './ArticleForm'
import PostForm from './PostForm'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <PostForm />
                <ArticleForm />
                <Footer />
            </div>
        )
    }
}
