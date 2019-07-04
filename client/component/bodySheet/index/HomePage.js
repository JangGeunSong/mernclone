import React, { Component } from 'react'
import NavBar from '../../navBar/NavBar'
import Footer from '../../footer/Footer'
import ArticleForm from './ArticleForm'
import PostForm from './PostForm'
import { CSSTransition } from 'react-transition-group'
import '../../../styles/Transition.css'

export default class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    
    componentDidMount() {
        document.title = 'HomePage';
        this.setState({ isOpen: this.props.isOpen})
    }

    render() {
        return (
            <div onClick={this.sendModalState}>
                <NavBar />
                <CSSTransition
                    in={this.state.isOpen}
                    timeout={450}
                    classNames="fade"
                >
                    <div>
                        <PostForm />
                        <ArticleForm />
                    </div>
                </CSSTransition>
                <Footer />
            </div>
        )
    }
}
