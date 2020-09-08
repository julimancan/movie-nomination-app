import React, { useContext } from "react";
import { Row, Col, Tag, Typography, Button, Alert } from "antd";
import "antd/dist/antd.css";
import { useAuth0 } from "@auth0/auth0-react";
import { GlobalContext } from "../../context/GlobalState";

const MovieDetail = ({ movie }) => {
  const TextTitle = Typography.Title;
  const { isAuthenticated } = useAuth0();
  const { addMovieToNominated, nominatedMovies } = useContext(GlobalContext);

  let storedMovie = nominatedMovies.find((o) => o.imdbID === movie.imdbID);

  console.log("storedMovie", storedMovie);

  const nominatedButtonDisabled = (storedMovie = storedMovie ? true : false);

  return (
    <Row>
      <Col span={11}>
        <img
          src={
            movie.Poster === "N/A"
              ? "https://placehold.it/198x264&text=Image+Not+Found"
              : movie.Poster
          }
          alt={movie.Title}
        />
      </Col>
      <Col span={13}>
        {isAuthenticated && nominatedMovies.length >= 5 ? (
          <Alert
            message="There are already 5 nominees! Thank you for participating."
            type="warning"
          />
        ) : (
          isAuthenticated && (
            <Row>
              <Button
                disabled={nominatedButtonDisabled}
                onClick={() => addMovieToNominated(movie)}
              >
                Click here to nominate
              </Button>{" "}
            </Row>
          )
        )}

        <Row>
          <Col span={21}>
            <TextTitle level={4}>{movie.Title}</TextTitle>
          </Col>
          <Col span={3} style={{ textAlign: "right" }}>
            <TextTitle level={4}>
              <span style={{ color: "purple" }}>{movie.imdbRating}</span>
            </TextTitle>
          </Col>
        </Row>
        <Row style={{ marginBottom: "20px" }}>
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
  );
};

export default MovieDetail;
