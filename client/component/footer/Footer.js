import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        let cardstyle = {
            margin: '2rem',
            maxWidth: '20rem'
        };
        return (
            <div>
                <div className="card text-white bg-secondary mb-3" style={cardstyle}>
                    <div className="card-header">Header</div>
                        <div className="card-body">
                            <h4 className="card-title">Credits</h4>
                            <p className="card-text">This is card layout test pages with bootstrap.</p>
                    </div>
                </div>
                    
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
