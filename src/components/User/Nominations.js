import React, { useContext, useState } from "react";
import { Table, Drawer, Button } from "antd";
import { GlobalContext } from "../../context/GlobalState";

const buttonStyle = {
  // borderColor: "grey",
  // color: "grey"
};


const Nominations = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const { nominatedMovies, deleteMovieFromNominated } = useContext(GlobalContext);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const DrawerButton = () => {
    return (
      <Button text style={buttonStyle} onClick={() => setDrawerOpen(true)}>Your Nominees</Button>
    )
  }

  const onClose = () => setDrawerOpen(false);

  const columns = [
    { title: "Title", dataIndex: "Title", key: "Title" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (movie, record) => <Button 
                      onClick={() => deleteMovieFromNominated(movie.imdbID)} 
                      // onClick={(e) => { this.onDelete(record.key, e); }}
                    >Delete</Button>,
    },
  ];
  
  return (
    <div>
      <DrawerButton onClick={toggleDrawer}/>
      <Drawer 
        visible={drawerOpen}
        destroyOnClose
        title = "Your nominees are:"
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
