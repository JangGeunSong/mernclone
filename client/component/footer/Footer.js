import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        let divstyle = {
            width: '37%'
        };
        let cardstyle = {
            maxWidth: '20rem'
        };
        return (
            <div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="38" aria-valuemin="0" aria-valuemax="100" style={divstyle}></div>
                </div>

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
