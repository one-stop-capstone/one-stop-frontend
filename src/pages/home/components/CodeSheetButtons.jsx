import React from "react";
import { useAuth } from "../../../context/AuthContext";
import { useQuery, useMutation } from "@apollo/client";
import { getMyCodesheets } from "../../../queries";
import { Button, Spin } from "antd";
import { addQuestionCodesheet } from "../../../mutations";

const CodeSheetButtons = ({ currentQuestionId, handleCancel }) => {
  const { currentUserId } = useAuth();
  const getMyCodesheetsQuery = useQuery(getMyCodesheets, {
    variables: {
      uid: currentUserId,
    },
  });
  const [insert_codesheet_questions, addQuestionCodesheetMutation] =
    useMutation(addQuestionCodesheet);

  const handleAddToCodesheet = (codesheetId) => {
    console.log(codesheetId);
    if (!addQuestionCodesheetMutation.loading) {
      insert_codesheet_questions({
        variables: {
          codesheet_id: codesheetId,
          question_id: currentQuestionId,
        },
      })
        .then(() => {
          handleCancel();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  if (getMyCodesheetsQuery.loading)
    return (
      <p>
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
      </p>
    );
  if (getMyCodesheetsQuery.error) return <p>Try Again...</p>;
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {getMyCodesheetsQuery.data.codesheets.map((codesheet) => {
        return (
          <Button
            style={{
              backgroundColor: "#0d8bff",
              color: "white",
              width: "11rem",
              margin: "0.5rem",
            }}
            onClick={() => handleAddToCodesheet(codesheet.id)}
          >
            {codesheet.title}
          </Button>
        );
      })}
    </div>
  );
};

export default CodeSheetButtons;
