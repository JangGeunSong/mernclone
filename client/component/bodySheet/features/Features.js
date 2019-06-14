import React, { Component } from 'react'
import NavBar from '../../navBar/NavBar'
import Footer from '../../footer/Footer'

export default class Features extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <h1> Hello Customer! </h1>
                <p>This is our Features page on the application!.</p>
                <p>This page using redux and MongoDB based web application. If you fill the word on the index page then add the item, and click the delete button the has gone the item on the list.</p>
                <Footer />
            </div>
        )
    }
}
