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



export default function MovieDetail ({movie, userNominations, setUserNominations}) {
  const TextTitle = Typography.Title;
  const { isAuthenticated } = useAuth0();
  const clickHandler = () => {
    
    console.log("userNominations in movieDetails", userNominations)
  };
  return (
    
    <Row>
      <Col span={11}>
        <img 
          src={movie.Poster === "N/A" ? "https://placehold.it/198x264&text=Image+Not+Found" : movie.Poster}
          alt={movie.Title}
        />
      </Col>
      <Col span={13}>
        
      
          {isAuthenticated &&   <Row><button onClick={clickHandler}>Click here to nominate</button> </Row>} 
       
        <Row>
          <Col span={21}>
            <TextTitle level={4}>
              {movie.Title}
            </TextTitle>
          </Col>
          <Col span={3} style={{textAlign: 'right'}}>
            <TextTitle level={4}><span style={{color: "purple"}}>{movie.imdbRating}</span></TextTitle>
          </Col>
        </Row>
        <Row style={{marginBottom: "20px"}}>
          <Col>
            <Tag>{movie.Rated}</Tag>
            <Tag>{movie.Runtime}</Tag>
            <Tag>{movie.Genre}</Tag>
            <Tag>{movie.Year}</Tag>
            <Tag>{movie.Type}</Tag>
          </Col>
        </Row>
        <Row>
          <Col>{movie.Plot}</Col>
        </Row>
      </Col>
    </Row>
  )
}