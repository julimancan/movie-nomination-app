import React, { Component, useEffect, useState } from "react";
import { Menu, Icon, Typography } from "antd";
import SearchBox from "../SearchBox/SearchBox";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const headerStyle = {
  background: "rgb(28,26,26)",
  background: "linear-gradient(90deg, rgba(28,26,26,1) 0%, rgba(55,56,22,1) 3%, rgba(89,91,24,1) 7%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(89,91,24,1) 93%, rgba(55,56,22,1) 97%, rgba(10,0,17,1) 100%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

};

const titleStyle = {
  color: "#BBBD71",
  fontFamily: 'Teko, sans-serif',
};

const TextTitle = Typography.Title;

const Navbar = () => {
  const [q, setQuery] = useState("batman");

  return (
    <div>
      <Menu mode="horizontal" style={headerStyle} selectable="false">
        <Menu.Item key="mail">
          <TextTitle className="logo">
            <a style={titleStyle} href="">
              The Julian Awards
            </a>
          </TextTitle>
        </Menu.Item>
        <Menu.Item>
          <LoginButton style={{ align: "right" }} />
          <LogoutButton />
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
