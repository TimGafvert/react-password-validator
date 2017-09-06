import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props) {
    let result = "Valid"
    super(props)
    this.state = {email: "", password1: '', password2: '', result: ''}
     this.passwordChanged = this.passwordChanged.bind(this)
     this.password2Changed = this.password2Changed.bind(this)
     this.checkPassOnSubmit = this.checkPassOnSubmit.bind(this)
  }



  passwordChanged (e) {
    console.log(e.target.value)
    this.setState({password1: e.target.value})

  }
  password2Changed (e) {
    console.log(e.target.value)
    this.setState({password2: e.target.value})

  }

  checkPassOnSubmit (e) {
    console.log(e.target.value)
    e.preventDefault()
    if (this.state.password1 === this.state.password2) {
    this.result = "Valid!"
  } else {
    this.result = "Invalid!"
  }

  }



  render() {

    return (
      <form>
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" onChange={this.passwordChanged}/>
        <input type="password" placeholder="confirm password" onChange={this.password2Changed} />
        <input type="submit" value="Submit" onClick={this.checkPassOnSubmit}/>
        <p>{this.result}</p>
      </form>
    );
  }
}

export default Validator;
