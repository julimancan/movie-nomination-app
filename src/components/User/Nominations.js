import React from "react";
import { Table } from "antd";

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

const Nominations = () => {
  return (
    <div>
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
    </div>
  );
};

export default Nominations;
