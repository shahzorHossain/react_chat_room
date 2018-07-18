import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      nickname: ""
    };
  }
  render() {
    const { nickname, error } = this.state;
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit} className="login-form">
          <label htmlFor="nickname">
            <h2> Got a nickname? </h2>
          </label>
          <input
            ref={input => {
              this.textInput = input;
            }}
            type="text"
            id="nickname"
            value={nickname}
            onChange={this.handleChange}
            placeholder={"myCoolUsername"}
          />
          <div className="error"> {error ? error : null}</div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
