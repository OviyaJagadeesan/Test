import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {useNavigate} from 'react-router-dom';
import "../CreateSparrow/CreateSparrow.css";

function CreateSparrow() {
  const navigate=useNavigate();
  const [lgShow, setLgShow] = useState(false);

  const onClick=(user)=>{
    navigate('/dec');
  }
  
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
    { id: 6, 
      text: "FYI", 
      image: require("../../Images/fyi.png") 
    },
    {
      id: 7,
      text: "Approval Requested",
      image: require("../../Images/approval_requested.png"),
    },
    { id: 8, 
      text: "Other", 
      image: require("../../Images/other.png") 
    },
  ];

  return (
    <>
      <div>
        <Button className="new-sparrow" onClick={() => setLgShow(true)}>
          <div className="logo"></div>
          <div className="text">New Sparrow</div>
        </Button>
      </div>
      <Modal
        size="lg"
        show={lgShow}
        backdrop="static"
        keyboard={false}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className="modal-head-foot-bg-color">
          <Modal.Title id="example-modal-sizes-title-lg">
            Select Outcome
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="grid">
            {data.map((user) => (
              <div className="card demo" onClick={()=>{onClick(user)}}>
                <div className="outcomeText">{user.text}</div>
                <img src={user.image} />
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateSparrow;
