import React, { useState } from "react";
import Icon, { EnvironmentOutlined, EditOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import styles from "./CodeSheetTabBar.module.css";
import { Button, Modal, Form, Input, Switch } from "antd";
import { useMutation } from "@apollo/client";
import { addNewCodesheet } from "../../../mutations";
import { useAuth } from "../../../context/AuthContext";
import PublicCodeSheets from "./PublicCodeSheets";
import MyCodeSheets from "./MyCodeSheets";
const { TextArea } = Input;

const CodeSheetTabBar = () => {
  const [visibilty, setVisibilty] = useState(true);
  const [currentTab, setCurrentTab] = useState("publiccodesheets");
  const { currentUserId } = useAuth();
  const [insert_codesheets, { data, loading, error }] =
    useMutation(addNewCodesheet);

  const createCodesheetHandler = (values) => {
    insert_codesheets({
      variables: {
        title: values.title,
        description: values.description ? values.description : null,
        is_public: visibilty,
        user_id: currentUserId,
      },
    })
      .then((adata) => {
        handleCancel();
      })
      .catch(async (err) => {
        console.log(err);
      });
  };

  const visiblityHandler = () => {
    setVisibilty(!visibilty);
  };
  const tabs = {
    publiccodesheets: {
      title: "Public Codesheets",
      icon: EditOutlined,
      component: <PublicCodeSheets data={data} tab={currentTab} />,
    },
    mycodesheets: {
      title: "My Codesheets",
      icon: EnvironmentOutlined,
      component: <MyCodeSheets data={data} tab={currentTab} />,
    },
  };
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
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
        onChange={(key) => setCurrentTab(key)}
        tabBarExtraContent={operations}
        className={styles["tab"]}
        defaultActiveKey="publiccodesheets"
        items={items}
      />
      <Modal
        className={styles["modal"]}
        open={open}
        title={<div className={styles["modal_title"]}>Create Codesheet</div>}
        onCancel={handleCancel}
        footer={[
          <Button
            loading={loading}
            form="codesheetForm"
            htmlType="submit"
            className={styles["button"]}
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
          onFinish={createCodesheetHandler}
        >
          <Form.Item
            required
            className={styles["item"]}
            name="title"
            label={<div className={styles["item_label"]}>CodeSheet Name</div>}
          >
            <Input className={styles["input"]} />
          </Form.Item>
          <Form.Item
            name="description"
            label={<div className={styles["item_label"]}>Description</div>}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name="visibilty"
            label={<div className={styles["item_label"]}>Visibilty</div>}
          >
            <Switch
              onChange={visiblityHandler}
              defaultChecked={true}
              size="medium"
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
          {error && (
            <div className={styles["error"]}>
              Check your internet connection and try again
            </div>
          )}
        </Form>
      </Modal>
    </>
  );
};

export default CodeSheetTabBar;
