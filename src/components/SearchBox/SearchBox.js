import React from "react";
import { Input, Row, Col } from "antd";
import "antd/dist/antd.css";

const SearchBox = ({ searchHandler }) => {
  const searchStyle = {
    width: "40em",
    margin: ".5em",
  };
  const { Search } = Input;
  const resetSearch = () => searchHandler("");
  return (
    <Row>
      <Col span={24}>
        <Search
          autoFocus
          placeholder="enter movie"
          enterButton
          onSearch={(value) => {
            resetSearch();
            searchHandler(value);
          }}
          style={searchStyle}
        />
      </Col>
    </Row>
  );
};

export default SearchBox;
