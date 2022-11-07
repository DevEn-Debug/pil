import React, { Component } from "react";
import { Alert, Input } from "rsuite";
import logo from "./img/logo.png";
import "./App.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      psw: "",
      show: false
    };
  }
  Email = (event) => {
    this.setState({ email: event });
  };
  Psw = (event) => {
    this.setState({ psw: event });
  };
  Login = (e) => {
    if (this.state.email !== "") {
      if (this.state.psw !== "") {
        axios
          .get(
            "https://kaizopoly-default-rtdb.firebaseio.com/firered/users/" +
              this.state.email +
              "|" +
              this.state.psw +
              ".json"
          )
          .then((response) => {
            if (response.data === null) {
              Alert.error("nome o password errata", 3000);
            } else {
              this.setState({ success: true });
            }
          });
      } else {
        Alert.error("Inserisci Password", 3000);
      }
    } else {
      Alert.error("Inserisci Nome", 3000);
    }
  };
  register = (e) => {
    this.setState({ register: true });
  };
  TriggerShow = (e) => {
    this.setState({ show: !this.state.show });
  };
  render() {
    if (this.state.success === true) {
      return (
        <Redirect
          to={{
            pathname: "pil/kaizo",
            state: { name: this.state.email, psw: this.state.psw }
          }}
        />
      );
    }
    if (this.state.register === true) {
      return <Redirect to="/register" />;
    }
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative"
        }}
      >
        <img
          style={{ width: "350px", marginBottom: "70px" }}
          src={logo}
          alt=""
        />
        <Input
          onChange={this.Email}
          style={{ width: 300, marginBottom: "20px" }}
          placeholder="Nome"
        />
        <div style={{ position: "relative", marginBottom: "70px" }}>
          <Input
            type={this.state.show ? "text" : "password"}
            onChange={this.Psw}
            style={{ width: 300 }}
            placeholder="Password"
          />
          {this.state.show ? (
            <i
              style={{
                position: "absolute",
                top: "9px",
                right: "9px",
                fontSize: "20px",
                cursor: "pointer"
              }}
              onClick={this.TriggerShow}
              className="fas fa-eye-slash"
            ></i>
          ) : (
            <i
              style={{
                position: "absolute",
                top: "9px",
                right: "9px",
                fontSize: "20px",
                cursor: "pointer"
              }}
              className="fas fa-eye"
              onClick={this.TriggerShow}
            ></i>
          )}
        </div>

        <button
          style={{
            width: "300px",
            fontFamily: "Gantari",
            fontSize: "17px",
            fontWeight: "bold",
            position: "relative",
            textAlign: "center",
            color: "white",
            background: "black",
            marginBottom: "10px"
          }}
          onClick={this.Login}
          className="button "
        >
          LOGIN
        </button>
        {/* <span
          style={{
            fontFamily: "Gantari",
            fontSize: "15px",
            fontWeight: "bold",
            position: "relative",
            textAlign: "center",
            color: "white",
            cursor: "pointer"
          }}
          onClick={this.register}
        >
          Oppure registrati >
        </span> */}
      </div>
    );
  }
}

export default Login;
