import React, { useState } from "react";
import styles from "./Settings.module.css";
import { Button, Radio, Space, Divider } from "antd";
import { DownloadOutlined } from '@ant-design/icons';

const Settings = () => {
  const [inputs, setInputs] = useState({});
  const year = new Date().getFullYear();
  const years1 = Array.from(new Array(20), (val, index) => index + year);
  const years2 = Array.from(
    new Array(10),
    (val, index) => year - index
  ).reverse();
  const years = years2.concat(years1);

  const [favorite, setFavorite] = React.useState("default");

  const darkTheme = () => {
    setFavorite("dark");
  };

  const defaultTheme = () => {
    setFavorite("default");
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };
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
                value={inputs.username || "Glen Dsouza"}
                onChange={handleChange}
                disabled={true}
              ></input>
            </div>
            <div className={styles["inner_card"]}>
              <label>Email Address:</label>
              <input
                type="text"
                name="email"
                value={inputs.email || "glen.d@email.com"}
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
                value={inputs.collegeName || ""}
                onChange={handleChange}
              ></input>
            </div>
            <div className={styles["inner_card"]}>
              <div className={styles["input-with-label"]}>
                <label htmlFor="passingyear">Year of Passing: </label>

                <select id="passingyear" form="signupform" defaultValue="none">
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
                </select>
              </div>
            </div>
            <div className={styles["inner_card"]}>
              <RadioButton
                label="Dark Theme"
                value={favorite === "dark"}
                onChange={darkTheme}
              />
              <RadioButton
                label="Default"
                value={favorite === "default"}
                onChange={defaultTheme}
              />
            </div>
            <input type="submit" className={styles["btn"]}></input>
            <Button
              type="primary"
              shape="round"
              icon={<DownloadOutlined />}
              danger
            >
              Log Out
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

const RadioButton = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="radio" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

export default Settings;
