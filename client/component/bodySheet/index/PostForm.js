import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../../../src/actions/postAction'

export class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Title: '',
            display: 'none'
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.setModal = this.setModal.bind(this)
    }
    
    onSubmit(e) {
        e.preventDefault()

        const post = {
            Title: this.state.Title
        }
        // Call action
        this.props.createPost(post)

        this.setState({ Title: '' })
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    setModal() {
        if(this.state.display === 'none') {
            this.setState({ display: 'block' })
        }
        else {
            this.setState({ display: 'none' })
        }
    }

    render() {
        const modalStyle = {
            display: this.state.display
        }
        return (
            <div>
                <h1>Add Item</h1>
                <form onSubmit={this.onSubmit}>
                    <button type="button" className="btn btn-success" onClick={this.setModal}>Create</button>
                    <div style={modalStyle}>
                        <label>Title</label>
                        <input type="text" className="form-control" name="Title" onChange={this.onChange} value={this.state.Title} placeholder="Enter Item Title"/>
                        <br/>
                        <button type="submit" className="btn btn-danger">SUBMIT</button>
                    </div>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm)