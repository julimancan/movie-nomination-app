import React from "react";
import { Row, Col, Card, Button } from "antd";
import "antd/dist/antd.css";

// const API_KEY = process.env.API_KEY;
const API_KEY = "a98b42a1";


const buttonStyle = {
  borderColor: "#BBBD71",
  color: "#BBBD71",
};
const cardStyle = {
  width: 200,
  background: "rgba(89,91,24,1)",
  boxShadow: "rgba(0, 0, 0, 0.75) 10px 10px 5px -8px",
};
const nameDetails = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "1em 0 0 0",
};
const titleStyle = {
  color: "#BBBD71",
  fontFamily: "Teko, sans-serif",
  fontSize: "large",
};

const ColCardBox = ({
  Title,
  imdbID,
  Poster,
  setShowDetail,
  DetailRequest,
  ActivateModal,
}) => {
  const clickHandler = () => {
    ActivateModal(true);
    DetailRequest(true);

    fetch(`https://www.omdbapi.com/?i=${imdbID}&type=movie&apikey=a98b42a1`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        DetailRequest(false);
        setShowDetail(response);
      })
      .catch(({ message }) => {
        DetailRequest(false);
      });
  };

  return (
    <Col style={{ margin: "20px 2em" }} className="gutter-row" span={4}>
      <div className="gutter-box">
        <Card
          style={cardStyle}
          cover={
            <img
              alt={Title}
              src={
                Poster === "N/A"
                  ? "https://placehold.it/198X264&text=Image+Not+Found"
                  : Poster
              }
              onClick={() => clickHandler()}
            />
          }
        >
          <Col style={nameDetails}>
            <h3 style={titleStyle}> {Title}</h3>
            <Row style={{ marginTop: "10px" }} className="gutter-row">
              <Button ghost style={buttonStyle} onClick={() => clickHandler()}>
                Details and Nominate
              </Button>
            </Row>
          </Col>
        </Card>
      </div>
    </Col>
  );
};

export default ColCardBox;
