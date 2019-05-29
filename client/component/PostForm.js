import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../src/actions/postAction'

export class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Title: '',
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onSubmit(e) {
        e.preventDefault()

        const post = {
            Title: this.state.Title
        }
        // Call action
        this.props.createPost(post)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Add Item</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
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