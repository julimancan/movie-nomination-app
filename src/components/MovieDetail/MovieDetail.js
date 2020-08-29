import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { 
  Row,
  Col,
  Tag,
  Typography
} from 'antd';
import 'antd/dist/antd.css';


export default function MovieDetail ({Title, Poster, imdbRating, Rated, Runtime, Genre, Plot}) {
  const TextTitle = Typography.Title;

  return (
    <Row>
      <Col span={11}>
        <img 
          src={Poster === "N/A" ? "https://placehold.it/198x264&text=Image+Not+Found" : Poster}
          alt={Title}
        />
      </Col>
      <Col span={13}>
        <Row>
          <Col span={21}>
            <TextTitle level={4}>
              {Title}
            </TextTitle>
          </Col>
          <Col span={3} style={{textAlign: 'right'}}>
            <TextTitle level={4}><span style={{color: "purple"}}>{imdbRating}</span></TextTitle>
          </Col>
        </Row>
        <Row style={{marginBottom: "20px"}}>
          <Col>
            <Tag>{Rated}</Tag>
            <Tag>{Runtime}</Tag>
            <Tag>{Genre}</Tag>
          </Col>
        </Row>
        <Row>
          <Col>{Plot}</Col>
        </Row>
      </Col>
    </Row>
  )
}