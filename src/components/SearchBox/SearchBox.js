import React from "react";
import { 
  Input, 
  Row,
  Col,
} from 'antd';
import 'antd/dist/antd.css';


export default function SearchBox ({searchHandler}) {
  const { Search } = Input;
  
  return (
    <Row>
      <Col span={12} offset={6}>
        <Search 
          autoFocus
          placeholder="enter movie"
          enterButton="Search"
          size="large"
          onSearch={value => searchHandler(value)}
        />
      </Col>
    </Row>
  )
}