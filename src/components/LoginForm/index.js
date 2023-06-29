import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
    }
  }

  submitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    return (
      <div className="login-container-bg">
        <img
          className="login-form-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form className="login-form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="form-container-website-logo"
          />
          <div className="input-field-container">
            <label className="label-text" htmlFor="userName">
              USERNAME
            </label>
            <input
              type="text"
              className="user-input-value"
              id="userName"
              placeholder="Username"
              onChange={this.onChangeUserName}
            />
          </div>
          <div className="input-field-container">
            <label className="label-text" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="user-input-value"
              id="password"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
          </div>
          <div className="input-field-container">
            <button className="login-btn" type="submit">
              Login
            </button>
          </div>
          <p className="error-message">username and password did not match</p>
        </form>
      </div>
    )
  }
}
export default LoginForm
