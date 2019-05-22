import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../component/NavBar'

export default class App extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <h1>Hello from react.js</h1>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'))