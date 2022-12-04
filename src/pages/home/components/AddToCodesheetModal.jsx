import React from "react";
import { Modal } from "antd";

import CodeSheetButtons from "./CodeSheetButtons";

const AddToCodesheetModal = ({
  handleCancel,
  isModalOpen,
  currentQuestionId,
}) => {
  return (
    <Modal
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      title="Add to Codesheet"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={[]}
    >
      <CodeSheetButtons
        currentQuestionId={currentQuestionId}
        handleCancel={handleCancel}
      />
    </Modal>
  );
};

export default AddToCodesheetModal;
