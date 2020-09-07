import React, { useContext, useState } from "react";
import { Table, Drawer, Button } from "antd";
import { GlobalContext } from "../../context/GlobalState";


const columns = [
  { title: "Title", dataIndex: "Title", key: "Title" },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>,
  },
];


const Nominations = (props) => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const { nominatedMovies } = useContext(GlobalContext);

  const {} = props;

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const DrawerButton = () => {
    return (
      <Button onClick={() => setDrawerOpen(true)}>Your Nominees</Button>
    )
  }

  const onClose = () => setDrawerOpen(false);

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
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={nominatedMovies}
      />
      ,
      </Drawer>
    </div>
  );
};

export default Nominations;
