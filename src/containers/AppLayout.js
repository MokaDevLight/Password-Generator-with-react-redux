import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import PasswordGenerator from "./PasswordGenerator";
import Header from "../components/Header/Header";

class AppLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <PasswordGenerator />
        <ToastContainer />
      </div>
    );
  }
}

export default AppLayout;
