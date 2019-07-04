import React, { Component } from 'react'
import NavBar from '../../navBar/NavBar'
import Footer from '../../footer/Footer'
import { CSSTransition } from 'react-transition-group'
import '../../../styles/Transition.css'

export default class About extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    componentDidMount() {
        document.title = 'About';
        this.setState({ isOpen: this.props.isOpen })
    }

    render() {
        return (
            <div>
                <NavBar />
                <CSSTransition
                    in={this.state.isOpen}
                    classNames="fade"
                    timeout={450}
                >
                    <div>
                        <h1> Hello Visitor! </h1>
                        <h2>What is it?</h2>
                        <p>This is our About page on the application!. This page is shown the product add and delete for the backend side to DBMS</p>
                        <p>I made myself check some technical materials.</p>
                        <p>Made by Song Janggeun</p>
                    </div>
                </CSSTransition> {/* 현 단계에서 적용 안됨 페이지 전체가 변화하여 의미가 없는 결과로 나타난것으로 생각됨. */}
                <Footer />
            </div>
        )
    }
}
