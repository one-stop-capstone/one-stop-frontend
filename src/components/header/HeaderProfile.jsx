import React from "react";
import { FaRegBell } from "react-icons/fa";
import { useQuery } from "@apollo/client";
import { getUser } from "../../queries";
import { useAuth } from "../../context/AuthContext";

import styles from "./HeaderProfile.module.css";

const HeaderProfile = () => {
  const { currentUserId } = useAuth();
  const { data, loading, error } = useQuery(getUser, {
    variables: {
      id: currentUserId,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return;

  return (
    <div className={styles["header-profile"]}>
      <FaRegBell
        color="#9A9AB0"
        size="1.5rem"
        className={styles["header-profile__notif"]}
      />
      <div className={styles["header-profile__img"]}></div>
      <div className={styles["header-profile__details"]}>
        <p className={styles["header-profile__details__name"]}>
          {data.users_by_pk.name}
        </p>
        <p className={styles["header-profile__details__email"]}>
          {data.users_by_pk.email}
        </p>
      </div>
    </div>
  );
};

export default HeaderProfile;
