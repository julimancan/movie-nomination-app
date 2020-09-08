import React, { useContext, useState } from "react";
import { Table, Drawer, Button } from "antd";
import { GlobalContext } from "../../context/GlobalState";

const buttonStyle = {
  borderColor: "#BBBD71",
  color: "#BBBD71",
  backgroundColor: "black",
  margin: ".3em",
  border: "solid 0.1em",
  fontFamily: "Teko, sans-serif",
  fontSize: "medium"
};

const Nominations = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { nominatedMovies, deleteMovieFromNominated } = useContext(
    GlobalContext
  );

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const DrawerButton = () => {
    return (
      <Button text style={buttonStyle} onClick={() => setDrawerOpen(true)}>
        Nominees
      </Button>
    );
  };

  const onClose = () => setDrawerOpen(false);

  const columns = [
    { title: "Title", dataIndex: "Title", key: "Title" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (movie) => (
        <Button onClick={() => deleteMovieFromNominated(movie.imdbID)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div>
      <DrawerButton style={buttonStyle} onClick={toggleDrawer} />
      <Drawer
        visible={drawerOpen}
        destroyOnClose
        title="Your nominees are:"
        onClose={onClose}
        width={"50em"}
      >
        <Table
          columns={columns}
          dataSource={nominatedMovies}
          pagination={false}
        />
        ,
      </Drawer>
    </div>
  );
};

export default Nominations;
