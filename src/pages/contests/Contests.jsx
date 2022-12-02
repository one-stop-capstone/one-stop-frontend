import React, { useState, useEffect } from "react";
import styles from "./Contests.module.css";
import upcomingImg from "./img/1.png";
import finishedImg from "./img/2.png";
import currentImg from "./img/3.png";
import { Card, Modal, Button, Table  } from "antd";

const { Meta } = Card;

const Contests = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);

  const [data1, setData1] = useState();

  useEffect(() => {
    fetch('https://www.codechef.com/api/list/contests/all?sort_by=START&sorting_order=asc&offset=0&mode=premium')
    .then(res=>{
      return res.json();
    }).then( data => {
      console.log(data);
      setData1(data);
    })}, []);

  const handle1Cancel = () => {
    setModal1Open(false);
  };
  const handle2Cancel = () => {
    setModal2Open(false);
  };
  const handle3Cancel = () => {
    setModal3Open(false);
  };

  const columns = [
    {
      title: 'Contest Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Start Date',
      dataIndex: 's_date',
      key: 's_date',
    },
    {
      title: 'Start Time',
      dataIndex: 's_time',
      key: 's_time',
    },
    {
      title: 'End Date',
      dataIndex: 'e_time',
      key: 'e_time',
    },
    {
      title: 'End Time',
      dataIndex: 'e_time',
      key: 'e_time',
    },
    
  ];
  const data = [
    {
      key: '1',
      name: '1v1 Games by CodeChef',
      s_date: '10 Oct 2022',
      s_time: '12:00:00',
      e_date: "NA",
      e_time: "NA",
    },
    {
      key: '2',
      name: '1v1 Games by CodeChef',
      s_date: '10 Oct 2022',
      s_time: '12:00:00',
      e_date: "NA",
      e_time: "NA",
    },
    {
      key: '3',
      name: '1v1 Games by CodeChef',
      s_date: '10 Oct 2022',
      s_time: '12:00:00',
      e_date: "NA",
      e_time: "NA",
    },
  ];

  return (
    <div>
      <div className={styles["settings_container"]}>
        <div onClick={() => setModal1Open(true)} className={styles["site-card-wrapper"]}>
            <Card
              className={styles["card-antd"]}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={upcomingImg} />}
            >
              <Meta title="Current Contests" description="Codechef" />
            </Card>
        </div>
        <div onClick={() => setModal2Open(true)} className={styles["site-card-wrapper"]}>
          <Card
            className={styles["card-antd"]}
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={currentImg} />}
          >
            <Meta title="Current Going Contests" description="Codechef" />
          </Card>
        </div>
        <div onClick={() => setModal3Open(true)} className={styles["site-card-wrapper"]}>
          <Card
            className={styles["card-antd"]}
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={finishedImg} />}
          >
            <Meta title="Past Contests" description="Codechef" />
          </Card>
        </div>
      </div>
      <Modal
            title="20px to Top"
            style={{
              top: 20,
            }}
            open={modal1Open}
            onCancel={() => setModal1Open(false)}
            width={1000}
            footer={[
              <Button className="button-antd" key="back" onClick={handle1Cancel}>
                Return
              </Button>
            ]}
          >
            <Table columns={columns} dataSource={data} />;
          </Modal>
          <Modal
            title="20px to Top"
            style={{
              top: 20,
            }}
            open={modal2Open}
            onCancel={() => setModal2Open(false)}
            width={1000}
            footer={[
              <Button className="button-antd" key="back" onClick={handle2Cancel}>
                Return
              </Button>
            ]}
          >
            <Table columns={columns} dataSource={data} />;
          </Modal>
          <Modal
            title="20px to Top"
            style={{
              top: 20,
            }}
            open={modal3Open}
            onCancel={() => setModal3Open(false)}
            width={1000}
            footer={[
              <Button className="button-antd" key="back" onClick={handle3Cancel}>
                Return
              </Button>
            ]}
          >
            <Table columns={columns} dataSource={data} />;
          </Modal>
    </div>
  );
};

export default Contests;
