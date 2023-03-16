// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    submitFailure: false,
    // eslint-disable-next-line react/no-unused-state
    errorMessage: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitInvalid = errorMessage => {
    this.setState({submitFailure: true, errorMessage})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitInvalid(data.error_msg)
    }
  }

  onChangedUsernameInput = event => {
    this.setState({username: event.target.value})
  }

  onChangedPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="label-text" htmlFor="password">
          PASSWORD
        </label>
        <input
          className="input-style"
          type="password"
          id="password"
          placeholder="Password"
          onChange={this.onChangedPasswordInput}
          value={password}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="label-text" htmlFor="username">
          USERNAME
        </label>
        <input
          className="input-style"
          type="text"
          id="username"
          placeholder="Username"
          onChange={this.onChangedUsernameInput}
          value={username}
        />
      </>
    )
  }

  render() {
    const {submitFailure, errorMessage} = this.state

    return (
      <div className="login-container">
        <img
          className="login-website-logo-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website login"
        />
        <img
          className="login-in-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            className="login-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />

          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button className="btn-style" type="submit">
            Login
          </button>
          {submitFailure && <p className="error-msg">*{errorMessage}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
