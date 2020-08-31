import React, { Component } from "react";
import NavBar from "./NavBar";
import { Drawer, Button } from "antd";
import SearchBox from "../SearchBox/SearchBox"

class Navigation extends Component {
  state = {
    current: "mail",
    visible: false,
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <nav className="menuBar">
     
        <div className="menuCon">
          <div className="NavBar">
            <NavBar />
          </div>
          <div className="rightMenu">
          </div>
          {/* <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <span className="barsBtn"></span>
          </Button> */}
          <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <NavBar />
          </Drawer>
        </div>
      </nav>
    );
  }
}
export default Navigation;
