import React, { useState } from "react";
import styles from "./Settings.module.css";
import { Switch } from "antd";
import { useQuery } from "@apollo/client";
import { getUserDetails } from "../../queries";
import { useAuth } from "../../context/AuthContext";
import { Spin } from "antd";

const Settings = () => {
  const [inputs, setInputs] = useState({});
  const [active, setActive] = useState(true);
  const { currentUserId } = useAuth();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  const { data, loading, error } = useQuery(getUserDetails, {
    variables: {
      uid: currentUserId,
    },
  });
  if (loading)
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin size="large">
          <div className="content" />
        </Spin>
      </div>
    );
  if (error) return;

  console.log(data.users_by_pk);
  return (
    <div>
      <div className={styles["settings_container"]}>
        <div className={styles["settings_card"]}>
          <div className={styles["card__text_header"]}>Personal Details</div>
          <form className={styles["card__text"]} onSubmit={handleSubmit}>
            <div className={styles["inner_card"]}>
              <label>Name:</label>
              <input
                type="text"
                name="username"
                value={data.users_by_pk.name}
                onChange={handleChange}
                disabled={true}
              ></input>
            </div>
            <div className={styles["inner_card"]}>
              <label>Email Address:</label>
              <input
                type="text"
                name="email"
                value={data.users_by_pk.email}
                onChange={handleChange}
                disabled={true}
              />
            </div>
          </form>
        </div>
        <div className={styles["settings_card"]}>
          <div>
            <h1 className={styles["card__text_header"]}>Education Details</h1>
          </div>
          <form className={styles["card__text"]} onSubmit={handleSubmit}>
            <div className={styles["inner_card"]}>
              <label>College Name:</label>
              <input
                type="text"
                name="collegeName"
                value={data.users_by_pk.university_name || "Not Provided"}
                onChange={handleChange}
                disabled={true}
              ></input>
            </div>
            <div className={styles["inner_card"]}>
              <div className={styles["input-with-label"]}>
                <label htmlFor="passingyear">Year of Passing: </label>
                <input
                  type="text"
                  name="passingyear"
                  value={data.users_by_pk.graduating_year || "Not Provided"}
                  onChange={handleChange}
                  disabled={true}
                ></input>
                {/* <select id="passingyear" form="signupform" defaultValue="none">
                  <option value="none" disabled hidden>
                    Select Passing Year
                  </option>
                  {Array(10)
                    .fill()
                    .map((element, index) => index + 2023)
                    .map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                </select> */}
              </div>
            </div>
            <div className={styles["inner_card"]}>
              <label>App Theme:</label>
              <Switch
                checkedChildren="Default"
                unCheckedChildren="Dark"
                defaultChecked
                onClick={() => setActive(!active)}
                checked={active}
                style={{
                  backgroundColor: active ? "#0D8BFF" : "#2b1f71",
                  margin: "0 2rem 0 2rem",
                }}
              />
            </div>
            <input type="submit" className={styles["btn"]}></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
