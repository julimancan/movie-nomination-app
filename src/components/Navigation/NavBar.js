import React, { Component, useEffect, useState } from "react";
import { Menu, Icon, Typography } from "antd";
import SearchBox from "../SearchBox/SearchBox";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const headerStyle = {
  backgroundColor: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const titleStyle = {
  color: "grey"
}


const TextTitle = Typography.Title;

const NavBar = () => {
  const [q, setQuery] = useState("batman");

  return (
    <div>
    <Menu mode="horizontal" style={headerStyle}>
      <Menu.Item key="mail">
        <TextTitle className="logo">
          <a style={titleStyle} href="">The Julian Awards</a>
        </TextTitle>
      </Menu.Item>
      <Menu.Item>
        <LoginButton style={{align: "right"}}/>
        <LogoutButton />
      </Menu.Item>
    </Menu>
    </div>
  );
};

export default NavBar;
