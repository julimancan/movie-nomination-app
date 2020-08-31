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
  Typography
} from 'antd';
import 'antd/dist/antd.css';
import { useAuth0 } from "@auth0/auth0-react";
import SearchBox from "./components/SearchBox/SearchBox";
import ColCardBox from "./components/ColCardBox/ColCardBox";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Loader from "./components/Loader/Loader";

import User from "./components/User/User";
import Navigation from "./components/Navigation/Navigation";






const API_KEY = "a98b42a1";
const { Header, Content, Footer } = Layout;
const TextTitle = Typography.Title;

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [q, setQuery] = useState("batman");
  const [activateModal, setActivateModal] = useState(false);
  const [detail, setShowDetail] = useState(false);
  const [detailRequest, setDetailRequest] = useState(false);
  const { isLoading } = useAuth0();

  useEffect(() => {

    setLoading(true);
    setError(null);
    setData(null);

    fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`)
    .then(resp => resp)
    .then(resp => resp.json())
    .then(response => {
      if (response.Response === 'False') {
        setError(response.Error);
      } else {
        const respArr = []
        response.Search.map(movie => {
          if (movie.Type === "movie") {
            respArr.push(movie)
          } 
        })
        console.log("respArr", respArr)
        setData(respArr);
        console.log("data", data)
      }
      setLoading(false)
    })
    .catch(({message}) => {
      setError(message);
      setLoading(false);
    })
  }, [q]);

  if (isLoading) return <div>Loading...</div>
  return (
    // <Router>
      <div className="App">

        <Layout className="layout">
          <Navigation/>
              <br />
          <Header>
            <div style={{ textAlign: "center" }}>
              <TextTitle style={{ color: "#ffffff", marginTop: "14px" }} level={3}>APP made with OMDB API + React</TextTitle>
            </div>
          </Header>
              <br />
          <Content style ={{ padding: "0 50px" }}>
            <div styl={{ background: "#fff", pagging: 24, minHeight: 280}}>
              <SearchBox searchHandler={setQuery} />
              <br />
            <User />
              <Row gutter={16} type="flex" justify="center">
                {/* { loading && 
                  <Loader />
                } */}

                { error !== null && 
                  <div style={{margin: "20px 0"}}>
                    <Alert message={error} type="error"/>

                  </div>
                }
                { data !== null && data.length > 0 && data.map((result, index) => (
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
              title="Detail"
              centered
              visible={activateModal}
              onCancel={() => setActivateModal(false)}
              footer={null}
              width={800}
            >
              { detailRequest === false ? 
              (<MovieDetail {...detail} />) :
              (<Loader />)
              }
            </Modal>
          </Content>
          <Footer style={{ textAlign: "center"}}>OMDB Movies 2019</Footer>
        </Layout>
      </div>
    // </Router>
  );
}

// export default App;
