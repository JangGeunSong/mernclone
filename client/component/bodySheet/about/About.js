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
                <h1> Hello Visitor! </h1>
                <h2>What is it?</h2>
                <p>This is our About page on the application!. This page is shown the product add and delete for the backend side to DBMS</p><br/>
                <p>I made myself check some technical materials.</p>
                <p>Made by Song Janggeun</p>
                <Footer />
            </div>
        )
    }
}
