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
import LoginButton from "./components/LoginButton/LoginButton";



// const {
//   user,
//   isAuthenticated
// } = useAuth0();


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
        setData(response.Search);
      }
      setLoading(false)
    })
    .catch(({message}) => {
      setError(message);
      setLoading(false);
    })
  }, [q]);

  return (
    // <Router>
      <div className="App">

        <Layout className="layout">
          <Header>
            <div style={{ textAlign: "center" }}>
            <LoginButton />
              <TextTitle style={{ color: "#ffffff", marginTop: "14px" }} level={3}>OMDB API + React</TextTitle>
            </div>
          </Header>
          <Content style ={{ padding: "0 50px" }}>
            <div styl={{ background: "#fff", pagging: 24, minHeight: 280}}>
              <SearchBox searchHandler={setQuery} />
              <br />
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
