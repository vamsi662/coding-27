import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorText: '',
    errorClassName: '',
    showErrorMessage: false,
  }

  onChangeUser = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    if (username === '' && password !== '') {
      this.setState({
        errorClassName: 'errormessage',
        errorText: 'Username is not provided',
        showErrorMessage: true,
      })
    } else if (password === '' && username !== '') {
      this.setState({
        errorClassName: 'errormessage',
        errorText: 'Enter Password',
        showErrorMessage: true,
      })
    } else if (password === '' && username === '') {
      this.setState({
        errorClassName: 'errormessage',
        errorText: 'Username & Password is not provided',
        showErrorMessage: true,
      })
    } else {
      const userDetails = {username, password}
      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
      }
      const response = await fetch('https://apis.ccbp.in/login', options)
      if (response.ok === true) {
        const {history} = this.props
        history.replace('/')
      } else {
        const data = response.json()
        if (data.username !== username) {
          this.setState({
            errorClassName: 'errormessage',
            errorText: 'Username is not found',
          })
        } else if (data.password !== password) {
          this.setState({
            errorClassName: 'errormessage',
            errorText: 'Password is not found',
          })
        } else {
          this.setState({
            errorClassName: 'errormessage',
            errorText: 'Password and Username is not found',
          })
        }
      }
    }
  }

  render() {
    const {username, password, errorText, errorClassName, showErrorMessage} =
      this.state
    return (
      <div className="main-con">
        <div className="login-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="mobile-image-logo"
            alt="website logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="login-image"
            alt="website login"
          />
          <form className="login-form-con" onSubmit={this.onLogin}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="desktop-image-logo"
              alt="website logo"
            />
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <br />
            <input
              id="username"
              type="text"
              className="input-username"
              onChange={this.onChangeUser}
              value={username}
              placeholder="Username"
            />
            <br />
            <br />
            <label htmlFor="password" className="label">
              PASSWORD
            </label>
            <br />
            <input
              id="password"
              type="password"
              className="input-username"
              onChange={this.onChangePassword}
              value={password}
              placeholder="Password"
            />
            <br />
            <button type="submit" className="login-btn">
              Login
            </button>
            {showErrorMessage && (
              <p className={`${errorClassName}`}>{errorText}</p>
            )}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
