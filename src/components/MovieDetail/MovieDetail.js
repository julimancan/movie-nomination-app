import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { 
  Row,
  Col,
  Tag,
  Typography
} from 'antd';
import 'antd/dist/antd.css';
import { useAuth0 } from "@auth0/auth0-react";



export default function MovieDetail (props) {
  const TextTitle = Typography.Title;
  const { isAuthenticated } = useAuth0();
  return (
    
    <Row>
      <Col span={11}>
        <img 
          src={props.movie.Poster === "N/A" ? "https://placehold.it/198x264&text=Image+Not+Found" : props.movie.Poster}
          alt={props.movie.Title}
        />
      </Col>
      <Col span={13}>
        
      
          {isAuthenticated &&   <Row><button>Click here to nominate</button> </Row>} 
       
        <Row>
          <Col span={21}>
            <TextTitle level={4}>
              {props.movie.Title}
            </TextTitle>
          </Col>
          <Col span={3} style={{textAlign: 'right'}}>
            <TextTitle level={4}><span style={{color: "purple"}}>{props.movie.imdbRating}</span></TextTitle>
          </Col>
        </Row>
        <Row style={{marginBottom: "20px"}}>
          <Col>
            <Tag>{props.movie.Rated}</Tag>
            <Tag>{props.movie.Runtime}</Tag>
            <Tag>{props.movie.Genre}</Tag>
          </Col>
        </Row>
        <Row>
          <Col>{props.movie.Plot}</Col>
        </Row>
      </Col>
    </Row>
  )
}