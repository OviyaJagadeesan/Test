import React from 'react'
import { useNavigate } from "react-router-dom";

const received_sparrows = [
  {
    id: 1,
    priority: require("../../Images/High.png"),
    title: "Postpone production release to June 5th",
    outcome: "Decision Required",
    duedate: "Today",
    status: "Unopened",
  },
  {
    id: 2,
    priority: require("../../Images/Low.png"),
    title: "Monthly Business Review Deck",
    outcome: "Status Update",
    duedate: "4/25/2022",
    status: "Blocked",
  },
  {
    id: 3,
    priority: require("../../Images/High.png"),
    title: "Reach out to churned customers in Q1",
    outcome: "Action Item",
    duedate: "Today",
    status: "In progress",
  },
];


function ReceivedSparrows() {
  const navigate = useNavigate();

  const onClick = (spr) => {
  };
  return (
    <div>
      <div className="row topHeader">
        <div className="col-lg-1 headerTitle">PRIORITY</div>
        <div className="col-lg-3 headerTitle">TITLE</div>
        <div className="col-lg-2 headerTitle">OUTCOME</div>
        <div className="col-lg-1 headerTitle">FROM/TO</div>
        <div className="col-lg-2 headerTitle">DUE DATE</div>
        <div className="col-lg-2 headerTitle">STATUS</div>
        <div className="col-lg-1 headerTitle"></div>
      </div>
      <div className="row sparrowCard">
        {received_sparrows.map((spr) => (
          <div
            className="contentAllSpr"
            onClick={() => {
              onClick(spr);
            }}
          >
            <img className="col-md-2 col-lg-1 priorityImage" src={spr.priority}></img>
            <div className="col-md-10 col-lg-3 titleText">{spr.title}</div>
            <div className="col-md-6 col-lg-2 outcomeText">{spr.outcome}</div>
            <img className="col-md-6 col-lg-1 fromtoImage" src={spr.fromto}></img>
            <div className="col-md-5 col-lg-2 dateAndStatusText">{spr.duedate}</div>
            <div className="col-md-5 col-lg-2 dateAndStatusText">{spr.status}</div>
            <div className="col-md-2 col-lg-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default ReceivedSparrows;
