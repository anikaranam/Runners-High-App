import React from 'react';
import logo from './logo.svg';
import './App.css';
import './header.component.css'
import logo1 from './assets/images/logo.jpg'
import numberimage from './assets/images/phone.png'
import passwordimage from './assets/images/password.png'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="header-font">
          <p>WELCOME TO RUNNER'S HIGH APP</p>
        </header>
        <div className="logoStyling">
          <img src={logo1}></img>
        </div>
        <div className="signinlabel">
        Sign in with your Phone Number and Password
        </div>
        <div className="col-md-6 offset-md-3">
          <form name="form" novalidate>
            <div className="form-group number">
              <div className="input-group num">
                <div className="input-group-prepend">
                  <div className="input-group-text" id="logo1">
                    <img src={numberimage} id="phoneimage"></img>
                  </div>
                </div>
                <input id="number1" className="form-control mobile" name="mobileNumber" required type="text" placeHolder="Mobile Number" />
              </div>
            </div>
            <div className="form-group password">
              <div className="input-group pass">
                <div className="input-group-prepend">
                  <div className="input-group-text" id="logo3">
                    <img alt src={passwordimage} id="passwordimage"></img>
                  </div>
                </div>
                <input id="number2" className="form-control password" name="password" placeholder="********" required="" type="password" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="checkbox-remember">
                  <label>
                    <input  name="remember" type="checkbox" value="" />
                    <span className="remember-check">
                      <i className="cr-icon glyphicon glyphicon-ok"></i>
                    </span>
                    Remember me
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <a className="forgot-password" href="/signin">Forgot Password</a>
              </div>
            </div>
            <input className="btn-signin" type="submit" value="SIGN IN" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
