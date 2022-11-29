import React, { useState } from "react";
import Icon, { EnvironmentOutlined, EditOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import styles from "./CodeSheetTabBar.module.css";
import { Button, Modal, Form, Input, Switch } from "antd";

const CodeSheetTabBar = () => {
  const [visibilty, setVisibilty] = useState(false);

  const visiblityHandler = () => {
    setVisibilty(!visibilty);
  };
  const tabs = {
    publiccodesheets: {
      title: "Public Codesheets",
      icon: EditOutlined,
      component: "",
    },
    mycodesheets: {
      title: "My Codesheets",
      icon: EnvironmentOutlined,
      component: "",
    },
  };
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const items = Object.keys(tabs).map((key) => {
    const props = tabs[key];
    return {
      label: (
        <div className={styles["label"]}>
          <Icon className={styles["icon"]} component={props.icon} />
          <div>{props.title}</div>
        </div>
      ),
      key: props.title.replace(" ", "").toLowerCase(),
      children: props.component,
    };
  });
  const operations = (
    <Button className={styles["button"]} onClick={showModal}>
      Create CodeSheet
    </Button>
  );
  return (
    <>
      <Tabs
        tabBarExtraContent={operations}
        className={styles["tab"]}
        defaultActiveKey="publiccodesheets"
        items={items}
      />
      <Modal
        className={styles["modal"]}
        open={open}
        title={<div className={styles["modal_title"]}>Create Codesheet</div>}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            form="codesheetForm"
            htmlType="submit"
            className={styles["button"]}
            onClick={handleCancel}
          >
            Create
          </Button>,
        ]}
      >
        <Form
          id="codesheetForm"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item
            required
            className={styles["item"]}
            label={<div className={styles["item_label"]}>CodeSheet Name</div>}
          >
            <Input className={styles["input"]} />
          </Form.Item>
          <Form.Item
            label={<div className={styles["item_label"]}>Visibilty</div>}
          >
            <Switch
              onChange={visiblityHandler}
              defaultChecked
              size="small"
              style={
                visibilty
                  ? { backgroundColor: "#4b7cf3" }
                  : { backgroundColor: "#000000" }
              }
              className={styles["item_switch"]}
              checkedChildren="Public"
              unCheckedChildren="Private"
            ></Switch>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CodeSheetTabBar;
