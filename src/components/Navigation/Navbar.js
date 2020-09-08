import React from "react";
import { Menu, Typography } from "antd";

const headerStyle = {
  background: "rgb(28,26,26)linear-gradient(90deg, rgba(28,26,26,1) 0%, rgba(55,56,22,1) 3%, rgba(89,91,24,1) 7%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(89,91,24,1) 93%, rgba(55,56,22,1) 97%, rgba(10,0,17,1) 100%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const titleStyle = {
  color: "#BBBD71",
  fontFamily: "Teko, sans-serif",
};
const topStyle = {
  background: "rgb(28,26,26) linear-gradient(90deg, rgba(28,26,26,1) 0%, rgba(55,56,22,1) 3%, rgba(89,91,24,1) 7%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(89,91,24,1) 93%, rgba(55,56,22,1) 97%, rgba(10,0,17,1) 100%)",
  height: "1em",
};

const TextTitle = Typography.Title;

const Navbar = () => {
  return (
    <div>
      <div style={topStyle}></div>
      <Menu mode="horizontal" style={headerStyle} selectable="false">
        <Menu.Item key="mail">
          <TextTitle>
            <p style={titleStyle}>THE JULIAN AWARDS</p>
          </TextTitle>
        </Menu.Item>
        <Menu.Item>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
