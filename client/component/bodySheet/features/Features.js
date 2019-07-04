import React, { Component } from 'react'
import NavBar from '../../navBar/NavBar'
import Footer from '../../footer/Footer'
import { CSSTransition } from 'react-transition-group'
import '../../../styles/Transition.css'

export default class Features extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    componentDidMount() {
        document.title = 'Features';
        this.setState({ isOpen: this.props.isOpen})
    }

    render() {
        return (
            <div>
                <NavBar />
                <CSSTransition
                    in={this.state.isOpen}
                    timeout={450}
                    classNames="fade"
                >
                    <div>
                        <h1> Hello visitor! </h1>
                        <p>This is our Features page on the application!.</p>
                        <p>This page using redux and MongoDB based web application. If you fill the word on the index page then add the item, and click the delete button the has gone the item on the list.</p>
                        <p>That process is running on the REST API that linked in MongoDB</p>
                    </div>
                </CSSTransition>
                <Footer />
            </div>
        )
    }
}
