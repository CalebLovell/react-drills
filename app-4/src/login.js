import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
        }
    }

    handleUser = (typing) => {
        this.setState({
            username: typing
        })
    }

    handlePass = (typing) => {
        this.setState({
            password: typing
        })
    }

    loginAlert = () => {
        return alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return (
            <div>
                <input onChange={ (e) => this.handleUser(e.target.value) } />
                <input onChange={ (e) => this.handlePass(e.target.value) } />
                <button onClick={ () => this.loginAlert()}> Login </button>
            </div>
        )
    }
}

export default Login