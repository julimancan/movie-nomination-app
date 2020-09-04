import React, { useEffect, useState } from "react";
import { Table, Drawer, Button } from "antd";


const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>,
  },
];

const data = [
  {
    key: 1,
    name: "Batman",
  },
  {
    key: 2,
    name: "Superman",
  },
  {
    key: 3,
    name: "Fartman",
  },
  {
    key: 4,
    name: "Anttman",
  },
  {
    key: 5,
    name: "Atoman",
  },
];

const Nominations = (props) => {

  const [drawerOpen, setDrawerOpen] = useState(false);

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
        dataSource={data}
      />
      ,
      </Drawer>
    </div>
  );
};

export default Nominations;
