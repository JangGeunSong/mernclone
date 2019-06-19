import React, { Component } from 'react'
import NavBar from '../../navBar/NavBar'
import Footer from '../../footer/Footer'

export default class Features extends Component {

    componentDidMount() {
        document.title = 'Features';
    }

    render() {
        return (
            <div>
                <NavBar />
                <h1> Hello visitor! </h1>
                <p>This is our Features page on the application!.</p>
                <p>This page using redux and MongoDB based web application. If you fill the word on the index page then add the item, and click the delete button the has gone the item on the list.</p><br/>
                <p>That process is running on the REST API that linked in MongoDB</p>
                <Footer />
            </div>
        )
    }
}