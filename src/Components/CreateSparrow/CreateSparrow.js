import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import "../CreateSparrow/CreateSparrow.css";

function CreateSparrow() {
  const navigate = useNavigate();
  const [lgShow, setLgShow] = useState(false);

  const onClick = (user) => {
    navigate("/dec");
  };

  const data = [
    {
      id: 1,
      text: "Decision Required",
      image: require("../../Images/decision_required.png"),
    },
    {
      id: 2,
      text: "Review Requested",
      image: require("../../Images/review_requested.png"),
    },
    {
      id: 3,
      text: "Action Item",
      image: require("../../Images/action_item.png"),
    },
    {
      id: 4,
      text: "Deliverable",
      image: require("../../Images/deliverable.png"),
    },
    {
      id: 5,
      text: "Status Update",
      image: require("../../Images/status_update.png"),
    },
    { id: 6, text: "FYI", image: require("../../Images/fyi.png") },
    {
      id: 7,
      text: "Approval Requested",
      image: require("../../Images/approval_requested.png"),
    },
    { id: 8, text: "Other", image: require("../../Images/other.png") },
  ];


  return (
    <div className="whole-div">
      <div className="spr-list-header">
        <div type="button" className="logo-btn">
          LOGO
        </div>
        <div type="image" className="help-img"></div>
      </div>
      <div className="spr-list-bottom">
        <div className="tab-left" type="button">
          <div className="home">
            <div type="image" className="home-img"></div>
            <div type="text" className="home-text">
              Home
            </div>
          </div>
          <div className="allsparrows">
            <div type="image" className="all-spr-img"></div>
            <div type="text" className="all-spr-text">
              All Sparrows
            </div>
          </div>
          <div className="new-spr" onClick={() => setLgShow(true)}>
            <div type="image" className="new-spr-img"></div>
            <div type="text" className="new-spr-text">
              New Sparrow
            </div>
          </div>
          <div className="received">
            <div type="image" className="received-img"></div>
            <div type="text" className="received-text">
              Received
            </div>
          </div>
          <div className="draft">
            <div type="image" className="draft-img"></div>
            <div type="text" className="draft-text">
              Draft
            </div>
          </div>
          <div className="sent">
            <div type="image" className="sent-img"></div>
            <div type="text" className="sent-text">
              Sent
            </div>
          </div>
          <div className="closed">
            <div type="image" className="closed-img"></div>
            <div type="text" className="closed-text">
              Closed
            </div>
          </div>
        </div>
        <div className="tab-right">
          <div className="all-spr-header-div">
            <div type="text" className="all-spr-header">
              All Sparrows
            </div>
          </div>
          <div className="header-top">
            <div className="search-bar">
              <div type="image" className="search-bar-img"></div>
            </div>
            <div className="priority-drop-down-div">
              <div type="text" className="priority-drop-down-text">
                By Priority
              </div>
              <div type="image" className="priority-drop-down-img"></div>
            </div>
            <div className="priority-drop-down-div">
              <div type="text" className="priority-drop-down-text">
                By Due Date
              </div>
              <div type="image" className="priority-drop-down-img"></div>
            </div>
            <div className="priority-drop-down-div">
              <div type="text" className="priority-drop-down-text">
                By Status
              </div>
              <div type="image" className="priority-drop-down-img"></div>
            </div>
            <div>
              <div className="clr-filter">Clear Filters</div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        size="lg"
        show={lgShow}
        backdrop="static"
        keyboard={false}
        onHide={() => setLgShow(false)}
      >
        <Modal.Header closeButton className="modal-head-foot-bg-color">
          <Modal.Title>Select Outcome</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="grid">
            {data.map((user) => (
              <div
                className="card demo"
                onClick={() => {
                  onClick(user);
                }}
              >
                <img className="outcomeImage" src={user.image} />
                <div className="outcomeText">{user.text}</div>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CreateSparrow;
