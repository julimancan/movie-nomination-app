import React, { useEffect, useState } from "react";
import { Layout, Row, Alert, Modal, Typography } from "antd";
import "antd/dist/antd.css";
import SearchBox from "./components/SearchBox/SearchBox";
import ColCardBox from "./components/ColCardBox/ColCardBox";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import { GlobalProvider } from "./context/GlobalState";
import Navbar from "./components/Navigation/Navbar";
import Nominations from "./components/Nominations/Nominations";

const { Header, Content } = Layout;
const TextTitle = Typography.Title;

const contentStyle = {
  pagging: 26,
};
const headerStyle = {
  backgroundColor: "white",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};
const userSearch = {
  display: "flex",
  justify: "space-around",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  margin: "2em",
};
const titleTextStyle = {
  color: "rgba(89,91,24,1)",
  fontFamily: "Teko, sans-serif",
  textAlign: "center",
};
const pageStyle = {
  backgroundColor: "white",
  minHeight: "97vh",
};
const instructionStyle = {
  textAlign: "center",
  margin: "-2em",
  color: "rgba(89,91,24,1)",
  fontFamily: "Teko, sans-serif",
  fontSize: "large",
};
const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [q, setQuery] = useState(null);
  const [activateModal, setActivateModal] = useState(false);
  const [detail, setShowDetail] = useState(false);
  const [detailRequest, setDetailRequest] = useState(false);

  useEffect(() => {
    setError(null);
    setData(null);

    fetch(`https://www.omdbapi.com/?s=${q}&type=movie&apikey=a98b42a1`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.Response === "False") {
          setError(response.Error);
        } else {
          setData(response.Search);
        }
      })
      .catch(({ message }) => setError(message));
  }, [q]);
  
  return (
    <GlobalProvider>
      <Layout style={pageStyle} className="layout">
        <Navbar />
        <br />
        <Header style={headerStyle}>
          <div>
            <TextTitle style={titleTextStyle} level={3}>
              APP made with OMDB API + React
            </TextTitle>
         
              <p style={instructionStyle}>Select your nominees</p>

          </div>
              <Nominations />
        </Header>
        <br />
        <Content>
          <div style={contentStyle}>
            <Layout style={userSearch}>
              <div>
                <SearchBox searchHandler={setQuery} />
                {q === null && (
                  <Alert
                    message="Enter your movie search above!"
                    type="warning"
                  />
                )}
              </div>
            </Layout>
            <Row gutter={16} type="flex" justify="center">
              {error !== null && (
                <div style={{ margin: "20px 0" }}>
                  <Alert message={error} type="error" />
                </div>
              )}
              {q !== null &&
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
                ))}
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
            {detailRequest === false && (
              <MovieDetail movie={detail} />
            )}
          </Modal>
        </Content>
      </Layout>
    </GlobalProvider>
  );
};

export default App;
