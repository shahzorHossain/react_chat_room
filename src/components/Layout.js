import React, { Component } from "react";
import io from "socket.io-client";
import LoginForm from "./LoginForm";
import { USER_CONNECTED, LOGOUT } from "../Events";
const socketURL = "http://192.168.0.21:3231";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      user: null
    };
  }

  componentWillMount() {
    this.initSocket();
  }
  initSocket = () => {
    const socket = io(socketURL);
    socket.on("connect", () => {
      console.log("connected");
    });
    this.setState({ socket });
  };

  // sets the user property in state

  setUser = user => {
    const { socket } = this.state;
    socket.emit(USER_CONNECTED);
    this.setState({ user });
  };

  // sets the user property to null after logout

  logout = () => {
    const { socket } = this.state;
    socket.emit(LOGOUT);
    this.setState({ user: null });
  };

  render() {
    const { title } = this.props;
    const { socket } = this.state;
    return (
      <div className="container">
        <LoginForm socket={socket} setUser={this.setUser} />
      </div>
    );
  }
}
export default Layout;
