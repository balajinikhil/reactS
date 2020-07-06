import React from "react";

const ApprovalCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui bassic green button">Approve</div>
        <div className="ui bassic red button">Reject</div>
      </div>
    </div>
  );
};

export default ApprovalCard;
