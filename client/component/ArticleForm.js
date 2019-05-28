import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../src/actions/postAction'

export class ArticleForm extends Component {
    
    constructor(props) {
        super(props)
    }
    
    componentWillMount() {
        this.props.fetchPosts();
    }    
    
    render() {
        const items = this.props.articles.map(
            item => (
                <tbody key={item._id}>
                    <tr key={item._id} className="table-primary">
                        <th scope="row">{item._id}</th>
                        <td>{item.Title}</td>
                        <td>{item.date}</td>
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
                        </tr>
                    </thead>
                    { items }
                </table>

                <span className="badge badge-success">This</span>
                <span className="badge badge-danger">Is</span>
                <span className="badge badge-warning">First</span>
                <span className="badge badge-info">Bootstrap</span>
                <span className="badge badge-light">Using</span>
                <span className="badge badge-dark">Theme</span>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    articles: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(ArticleForm)