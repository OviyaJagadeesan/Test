import React from "react";
import "../AllSparrows/AllSparrows.css";
import { useNavigate } from "react-router-dom";

const all_sparrows = [
  {
    id: 1,
    priority: require("../../Images/High.png"),
    title: "Postpone production release to June 5th",
    outcome: "Decision Required",
    // fromto: require("../../Images/home.png"),
    duedate: "Today",
    status: "Unopened",
  },
  {
    id: 2,
    priority: require("../../Images/High.png"),
    title: "Action plan for customer communication post release",
    outcome: "Deliverable",
    // fromto: require("../../Images/home.png"),
    duedate: "In 2 Days",
    status: "Yet to start",
  },
  {
    id: 3,
    priority: require("../../Images/High.png"),
    title: "Reach out to churned customers in Q1",
    outcome: "Action Item",
    // fromto: require("../../Images/home.png"),
    duedate: "Today",
    status: "In progress",
  },
  {
    id: 4,
    priority: require("../../Images/High.png"),
    title: "Finance policy for travel has been updated",
    outcome: "FYI",
    // fromto: require("../../Images/home.png"),
    duedate: "In a Day",
    status: "Unopened",
  },
  {
    id: 5,
    priority: require("../../Images/High.png"),
    title: "Monthly Business Review Deck",
    outcome: "Status Update",
    // fromto: require("../../Images/home.png"),
    duedate: "4/25/2022",
    status: "Blocked",
  },
  {
    id: 6,
    priority: require("../../Images/High.png"),
    title: "25% discount for customer Apex",
    outcome: "Approval Required",
    // fromto: require("../../Images/home.png"),
    duedate: "4/25/2022",
    status: "In Progress",
  },
];

function AllSparrows() {
  const navigate = useNavigate();

  const onClick = (spr) => {
    navigate("/dec");
  };
  return (
    <div>
      <div className="row top-header">
        <div className="col-lg-1 priorityHead">PRIORITY</div>
        <div className="col-lg-3 titleHead">TITLE</div>
        <div className="col-lg-2 outcomeHead">OUTCOME</div>
        <div className="col-lg-2 fromToHead">FROM/TO</div>
        <div className="col-lg-2 dueDateHead">DUE DATE</div>
        <div className="col-lg-1 statusHead">STATUS</div>
        <div className="col-lg-1 notify"></div>
      </div>
      <div className="row sparrowCard">
        {all_sparrows.map((spr) => (
          <div
            className="content-all-spr"
            onClick={() => {
              onClick(spr);
            }}
          >
            <img className="col-md-2 col-lg-1 priorityImage" src={spr.priority}></img>
            <div className="col-md-10 col-lg-3 titleText">{spr.title}</div>
            <div className="col-md-6 col-lg-2 outcomeText">{spr.outcome}</div>
            <img className="col-md-6 col-lg-2 fromtoImage" src={spr.fromto}></img>
            <div className="col-md-5 col-lg-2 duedateText">{spr.duedate}</div>
            <div className="col-md-5 col-lg-1 statusText">{spr.status}</div>
            <div className="col-md-2 col-lg-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllSparrows;
