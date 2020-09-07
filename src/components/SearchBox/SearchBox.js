import React from "react";
import { 
  Input, 
  Row,
  Col,
} from 'antd';
import 'antd/dist/antd.css';
import { useAuth0 } from "@auth0/auth0-react";



export default function SearchBox ({searchHandler}) {
  const { isAuthenticated } = useAuth0();
  const searchStyle = {
    width:  isAuthenticated ? "30em" : "40em"
  }
  const { Search } = Input;
  const resetSearch = () => searchHandler("")
  return (
    <Row>
      <Col span={24}>
        <Search 
          autoFocus
          placeholder="enter movie"
          enterButton
          onSearch={value => {
                    resetSearch();
                    searchHandler(value)
                  }}
          style={searchStyle}
        />
      </Col>
    </Row>
  )
}