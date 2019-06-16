import React, { Component } from 'react'
import NavBar from '../../navBar/NavBar'
import Footer from '../../footer/Footer'

export default class About extends Component {

    componentDidMount() {
        document.title = 'About';
    }

    render() {
        return (
            <div>
                <NavBar />
                <h1> Hello Customer! </h1>
                <p>This is our About page on the application!.</p>
                <p>Made by Song Janggeun</p>
                <Footer />
            </div>
        )
    }
}
