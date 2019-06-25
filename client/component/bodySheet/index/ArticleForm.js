import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts, deletePost } from '../../../src/actions/postAction'
import Moment from 'react-moment'

export class ArticleForm extends Component {
    
    constructor(props) {
        super(props)
    }
    
    componentWillMount() {
        this.props.fetchPosts()
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newArticle) {
            this.props.articles.unshift(nextProps.newArticle)
        }
        else {
            this.props.fetchPosts()
        }
    }
    
    deleteItem(_id) {
        console.log("ongoing")
        
        // Call action
        this.props.deletePost(_id)
    }

    render() {
        const items = this.props.articles.map(
            ({ _id, Title, date }) => (
                <tbody key={_id}>
                    <tr key={_id} className="table-primary">
                        <th scope="row">{_id}</th>
                        <td>{Title}</td>
                        <td><Moment format="LL LT">{date}</Moment></td>
                        <td><button type="button" className="btn btn-warning" onClick={this.deleteItem.bind(this, _id)}>Delete</button></td>
                    </tr>
                </tbody>
            )
        );
        return (
            <div>
                
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Date</th>
                            <th scope="col">N/A</th>
                        </tr>
                    </thead>
                    { items }
                </table>
            </div>
        )
    }
}

ArticleForm.propTypes = {
    fetchPosts: propTypes.func.isRequired,
    deletePost: propTypes.func.isRequired,
    articles: propTypes.array.isRequired,
    newArticle: propTypes.object
}

const mapStateToProps = state => ({
    articles: state.posts.items,
    newArticle: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts, deletePost })(ArticleForm)