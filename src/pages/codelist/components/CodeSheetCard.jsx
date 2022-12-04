import * as React from "react";
import styles from "./CodeSheetCard.module.css";
import HeartButton from "./HeartButton";
import { useAuth } from "../../../context/AuthContext";
import { Switch } from "antd";
import { toggleVisibility } from "../../../mutations";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

const CodeSheetCard = (props) => {
  const { currentUserId } = useAuth();
  const [visibilty, setVisibilty] = React.useState(props.data.is_public);
  const [loading, setLoading] = React.useState(false);
  const [update_codesheets] = useMutation(toggleVisibility);
  const visiblityHandler = () => {
    if (!loading) {
      setLoading(true);
      update_codesheets({
        variables: {
          id: props.data.id,
          is_public: !visibilty,
        },
      })
        .then((data) => {
          setVisibilty(!visibilty);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };
  const title = props.data.title;
  const creator = props.data.user ? props.data.user.name : "";
  const questionsCount =
    props.data.codesheet_questions_aggregate.aggregate.count;
  const likesCount = props.data.codesheet_ratings_aggregate.aggregate.count;
  const liked = props.data.codesheet_ratings.length > 0 ? true : false;
  const ratingsId = props.data.codesheet_ratings[0]?.id;
  const codeSheetId = props.data.id;
  return (
    <div className={styles["codesheetcard__line"]}>
      <div className={styles["codesheetcard_contaner"]}>
        <div className={styles["codesheetcard__details"]}>
          <Link to={codeSheetId}>
            <div className={styles["codesheetcard__details__title"]}>
              {title}
            </div>
          </Link>
          <div className={styles["codesheetcard__details__creator"]}>
            {props.type === "my" && (
              <Switch
                onChange={visiblityHandler}
                checked={visibilty}
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
            )}
            {props.type === "public" && (
              <>
                <span>By -</span>
                <p>{creator}</p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={styles["codesheetcard__questionsno"]}>
        <p>{questionsCount} Questions</p>
      </div>
      <div className={styles["codesheetcard__likebutton"]}>
        <HeartButton
          likesCount={likesCount}
          liked={liked}
          ratingsId={ratingsId}
          codeSheetId={codeSheetId}
          userId={currentUserId}
        />
      </div>
    </div>
  );
};

export default CodeSheetCard;
