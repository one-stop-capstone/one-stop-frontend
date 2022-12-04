import React, { useState } from "react";
import styles from "./Contests.module.css";
import upcomingImg from "./img/1.png";
import finishedImg from "./img/2.png";
import currentImg from "./img/3.png";
import { Card, Modal, Button, Table } from "antd";
import { data_future, data_past, data_present } from "./data";

const { Meta } = Card;
const { Column} = Table;

const Contests = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);

  const handle1Cancel = () => {
    setModal1Open(false);
  };
  const handle2Cancel = () => {
    setModal2Open(false);
  };
  const handle3Cancel = () => {
    setModal3Open(false);
  };

  return (
    <div>
      <div className={styles["settings_container"]}>
        <div
          onClick={() => setModal1Open(true)}
          className={styles["site-card-wrapper"]}
        >
          <Card
            className={styles["card-antd"]}
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={upcomingImg} />}
          >
            <Meta title="Current Contests" description="Codechef" />
          </Card>
        </div>
        <div
          onClick={() => setModal2Open(true)}
          className={styles["site-card-wrapper"]}
        >
          <Card
            className={styles["card-antd"]}
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={currentImg} />}
          >
            <Meta title="Past Contests" description="Codechef" />
          </Card>
        </div>
        <div
          onClick={() => setModal3Open(true)}
          className={styles["site-card-wrapper"]}
        >
          <Card
            className={styles["card-antd"]}
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={finishedImg} />}
          >
            <Meta title="Upcoming Contests" description="Codechef" />
          </Card>
        </div>
      </div>
      <Modal
        title="Current Contests"
        style={{
          top: 20,
        }}
        open={modal1Open}
        onCancel={() => setModal1Open(false)}
        width={1000}
        footer={[
          <Button className="button-antd" key="back" onClick={handle1Cancel}>
            Return
          </Button>,
        ]}
      >
        <Table dataSource={data_present}>
          <Column
            title="Contest Name"
            dataIndex="name"
            key="name"
            render={(_, text) => (
              <a href={"https://www.codechef.com/" + text.code}>{text.name}</a>
            )}
          />
          <Column title="Start Date" dataIndex="s_date" key="s_date" />
          <Column title="Start Time" dataIndex="s_time" key="s_time" />
          <Column title="End Date" dataIndex="e_date" key="e_date" />
          <Column title="End Time" dataIndex="e_time" key="e_time" />
        </Table>
        ;
      </Modal>
      <Modal
        title="Past Contests"
        style={{
          top: 20,
        }}
        open={modal2Open}
        onCancel={() => setModal2Open(false)}
        width={1000}
        footer={[
          <Button className="button-antd" key="back" onClick={handle2Cancel}>
            Return
          </Button>,
        ]}
      >
        <Table dataSource={data_past} pagination={{ pageSize: 5 }}>
          <Column
            title="Contest Name"
            dataIndex="name"
            key="name"
            render={(_, text) => (
              <a href={"https://www.codechef.com/" + text.code}>{text.name}</a>
            )}
          />
          <Column title="Start Date" dataIndex="s_date" key="s_date" />
          <Column title="Start Time" dataIndex="s_time" key="s_time" />
          <Column title="End Date" dataIndex="e_date" key="e_date" />
          <Column title="End Time" dataIndex="e_time" key="e_time" />
        </Table>
        ;
      </Modal>
      <Modal
        title="Upcoming Contests"
        style={{
          top: 20,
        }}
        open={modal3Open}
        onCancel={() => setModal3Open(false)}
        width={1000}
        footer={[
          <Button className="button-antd" key="back" onClick={handle3Cancel}>
            Return
          </Button>,
        ]}
      >
        <Table dataSource={data_future}>
          <Column
            title="Contest Name"
            dataIndex="name"
            key="name"
            render={(_, text) => (
              <a href={"https://www.codechef.com/" + text.code}>{text.name}</a>
            )}
          />
          <Column title="Start Date" dataIndex="s_date" key="s_date" />
          <Column title="Start Time" dataIndex="s_time" key="s_time" />
          <Column title="End Date" dataIndex="e_date" key="e_date" />
          <Column title="End Time" dataIndex="e_time" key="e_time" />
        </Table>
        ;
      </Modal>
    </div>
  );
};

export default Contests;