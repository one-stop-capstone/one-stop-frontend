import React from "react";
import "./HeartButton.css";

const HeartButton = () => {
  const [isLiked, setIsLiked] = React.useState(false);
  const likeHandler = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div
      class={`heart-like-button ${isLiked ? "liked" : ""}`}
      onClick={likeHandler}
    ></div>
  );
};

export default HeartButton;
