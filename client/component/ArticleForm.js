import React, { Component } from 'react'

export default class ArticleForm extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         articles: []
    //     }
    // }

    // componentDidMount() {
    //     fetch("http://localhost:5500/api/articles")
    //         .then(response => response.json())
    //         .then(200, items => this.setState({
    //             articles: items
    //         }))
    //         .catch(err => console.log(err))
    // }

    render() {
        // let items = this.state.articles;
        return (
            <div>
                {/* {items.map(
                    item => (
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-active">
                                    <th scope="row">{item.id}</th>
                                    <td>{item.Title}</td>
                                    <td>{item.date}</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                )} */}
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-info">
                            <th scope="row">1</th>
                            <td>cake</td>
                            <td>2015:03:01</td>
                        </tr>
                    </tbody>
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
