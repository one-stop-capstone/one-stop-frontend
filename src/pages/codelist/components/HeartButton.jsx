import React from "react";
import "./HeartButton.css";
import { useMutation } from "@apollo/client";
import { deleteUserRating, addUserRating } from "../../../mutations";
import { useAuth } from "../../../context/AuthContext";

const HeartButton = (props) => {
  const [isLiked, setIsLiked] = React.useState(props.liked);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [likesCount, setLikesCount] = React.useState(props.likesCount);
  const [errorMessage, setErrorMessage] = React.useState("");
  const { currentUserId } = useAuth();
  const [delete_codesheet_ratings] = useMutation(deleteUserRating);
  const [insert_codesheet_ratings_one] = useMutation(addUserRating);
  const likeHandler = () => {
    if (!loading) {
      setLoading(true);
      setError(false);
      if (isLiked) {
        delete_codesheet_ratings({
          variables: {
            codesheet_id: props.codeSheetId,
            user_id: props.userId,
          },
        })
          .then(() => {
            setIsLiked(false);
            setLoading(false);
            setLikesCount((prev) => prev - 1);
          })
          .catch((err) => {
            setError(true);
            setErrorMessage(err.message);
            setLoading(false);
          });
      } else {
        insert_codesheet_ratings_one({
          variables: {
            codesheet_id: props.codeSheetId,
            user_id: currentUserId,
          },
        })
          .then(() => {
            setIsLiked(true);
            setLoading(false);
            setLikesCount((prev) => prev + 1);
          })
          .catch((err) => {
            setError(true);
            setErrorMessage(err.message);
            setLoading(false);
          });
      }
    }
  };
  return (
    <>
      <p style={{ marginRight: "0.5rem" }}>{likesCount} likes</p>
      <div
        className={`heart-like-button ${isLiked ? "liked" : ""}`}
        onClick={likeHandler}
      ></div>
      {error && <p style={{ color: "red" }}>{errorMessage}</p>}
    </>
  );
};

export default HeartButton;
