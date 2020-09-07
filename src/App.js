import React, { useEffect, useState } from "react";
import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Layout,
  Input,
  Row,
  Col,
  Card,
  Tag,
  Spin,
  Alert,
  Modal,
  Typography,
} from "antd";
import "antd/dist/antd.css";
import { useAuth0 } from "@auth0/auth0-react";
import SearchBox from "./components/SearchBox/SearchBox";
import ColCardBox from "./components/ColCardBox/ColCardBox";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Loader from "./components/Loader/Loader";

import User from "./components/User/User";
import Navigation from "./components/Navigation/Navigation";
import { GlobalContext, GlobalProvider } from "./context/GlobalState";

const API_KEY = "a98b42a1";
const { Header, Content, Footer } = Layout;
const TextTitle = Typography.Title;

const contentStyle = {
  background: "#fff",
  pagging: 26,
  minHeight: 280,
};
const userSearch = {
  display: "flex",
  border: "solid",
  justify: "space-around",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
};
const titleTextStyle = {
  color: "#ffffff",
  marginTop: "14px",
};

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [q, setQuery] = useState(null);
  const [activateModal, setActivateModal] = useState(false);
  const [detail, setShowDetail] = useState(false);
  const [detailRequest, setDetailRequest] = useState(false);
  const { isLoading } = useAuth0();

  useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);

    fetch(`http://www.omdbapi.com/?s=${q}&type=movie&apikey=${API_KEY}`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.Response === "False") {
          setError(response.Error);
        } else {
          setData(response.Search);
        }
        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });
  }, [q]);
  if (isLoading) return <div>Loading...</div>;

  return (
    <GlobalProvider>
      <Layout className="layout">
        <Navigation />
        <br />
        <Header>
          <div style={{ textAlign: "center" }}>
            <TextTitle style={titleTextStyle} level={3}>
              APP made with OMDB API + React
            </TextTitle>
          </div>
        </Header>
        <br />
        <Content>
          <div style={contentStyle}>
            <Layout style={userSearch}>
              <User />
              <SearchBox style={{ width: "100%" }} searchHandler={setQuery} />
            </Layout>
            <Row gutter={16} type="flex" justify="center">
              {error !== null && (
                <div style={{ margin: "20px 0" }}>
                  <Alert message={error} type="error" />
                </div>
              )}
              {q === null ? (
                <div>Enter your movie search above</div>
              ) : (
                data !== null &&
                data.length > 0 &&
                data.map((result, index) => (
                  <ColCardBox
                    setShowDetail={setShowDetail}
                    DetailRequest={setDetailRequest}
                    ActivateModal={setActivateModal}
                    key={index}
                    {...result}
                  />
                ))
              )}
            </Row>
          </div>
          <Modal
            title="Movie Detail"
            centered
            visible={activateModal}
            onCancel={() => setActivateModal(false)}
            footer={null}
            width={800}
          >
            {detailRequest === false ? (
              <MovieDetail movie={detail} />
            ) : (
              <Loader />
            )}
          </Modal>
        </Content>
        <Footer />
      </Layout>
    </GlobalProvider>
  );
}
