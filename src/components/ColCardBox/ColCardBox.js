import React from "react";
import { 
  Layout, 
  Row,
  Col,
  Card,
  Tag,
  Typography,
  Button
} from 'antd';
import 'antd/dist/antd.css';

const API_KEY = "a98b42a1";
const { Meta } = Card;

const buttonStyle = {
  borderColor: "black",
  color: "black"
}

export default function ColCardBox ({Title, imdbID, Poster, Type, setShowDetail, DetailRequest, ActivateModal}) {
  const clickHandler = () => {
    ActivateModal(true);
    DetailRequest(true);

    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)
    .then(resp => resp)
    .then(resp => resp.json())
    .then(response => {
      DetailRequest(false);
      setShowDetail(response);
    })
    .catch(({message}) => {
      DetailRequest(false);
    })
  }

  return (
    <Col style={{margin: "20px 0"}} className="gutter-row" span={4}>
      <div className="gutter-box">
        <Card
          style={{ width: 200 }}
          cover={
            <img
              alt={Title}
              src={Poster === "N/A" ? "https://placehold.it/198X264&text=Image+Not+Found" : Poster}
            />
          }
          // onClick={() => clickHandler()}
        >
          <Meta
            title={Title}
            description={false}
          />
          <Row style={{marginTop: "10px"}} className="gutter-row">
            <Col>
              <Button ghost style={buttonStyle} onClick={() => clickHandler()} >Nominate</Button>
            </Col>
          </Row>
        </Card>
      </div>
    </Col>
  )
}