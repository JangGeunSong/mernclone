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
                <Footer />
            </div>
        )
    }
}
