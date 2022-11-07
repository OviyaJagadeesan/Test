import React, { useState } from "react";
import "../AllSparrows/AllSparrows.css";
import { useNavigate } from "react-router-dom";
import DetailsView from "../DetailsView/DetailsView";

const all_sparrows = [
  {
    id: 1,
    priority: require("../../Images/Low.png"),
    priorityname: "low",
    title: "Postpone production release to June 5th",
    outcome: "Decision Required",
    duedate: "Today",
    status: "Unopened",
  },
  {
    id: 2,
    priority: require("../../Images/High.png"),
    priorityname: "high",
    title: "Action plan for customer communication post release",
    outcome: "Deliverable",
    duedate: "In 2 Days",
    status: "Yet to start",
  },
  {
    id: 3,
    priority: require("../../Images/Medium.png"),
    priorityname: "medium",
    title: "Reach out to churned customers in Q1",
    outcome: "Action Item",
    duedate: "Today",
    status: "In progress",
  },
  {
    id: 4,
    priority: require("../../Images/High.png"),
    priorityname: "high",
    title: "Finance policy for travel has been updated",
    outcome: "FYI",
    duedate: "In a Day",
    status: "Unopened",
  },
  {
    id: 5,
    priority: require("../../Images/Low.png"),
    priorityname: "low",
    title: "Monthly Business Review Deck",
    outcome: "Status Update",
    duedate: "4/25/2022",
    status: "Blocked",
  },
  {
    id: 6,
    priority: require("../../Images/Low.png"),
    priorityname: "low",
    title: "25% discount for customer Apex",
    outcome: "Approval Required",
    duedate: "4/25/2022",
    status: "In Progress",
  },
];

function AllSparrows(props) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="row topHeader">
        <div className="col-6 col-md-2 col-lg-1 col-xl-1 headerTitle">
          PRIORITY
        </div>
        <div className="col-6 col-md-10 col-lg-3 col-xl-3 headerTitle">
          TITLE
        </div>
        <div className="col-5 col-md-6 col-lg-2 col-xl-2 headerTitle">
          OUTCOME
        </div>
        <div className="col-7 col-md-6 col-lg-1 col-xl-1 headerTitle">
          FROM/TO
        </div>
        <div className="col-4 col-md-5 col-lg-2 col-xl-3 headerTitle">
          DUE DATE
        </div>
        <div className="col-4 col-md-5 col-lg-2 col-xl-1 headerTitle">
          STATUS
        </div>
        <div className="col-4 col-md-2 col-lg-1 col-cl-2 headerTitle"></div>
      </div>
      <div className="row sparrowCard"> 
      {!props.clicked?
        (all_sparrows
        .map((spr)=>(
          <div
              className="contentAllSpr" 
            >
              <img
                className="col-2 col-md-1 col-lg-1 col-xl-1 priorityImage"
                src={spr.priority}
              ></img>
              <div className="col-10 col-md-3 col-lg-3 col-xl-3 titleText">
                {spr.title}
              </div>
              <div className="col-6 col-md-2 col-lg-2 col-xl-2 outcomeText">
                {spr.outcome}
              </div>
              <img
                className="col-6 col-md-2 col-lg-2 col-xl-2 fromtoImage"
                src={spr.fromto}
              ></img>
              <div className="col-5 col-md-1 col-lg-1 col-xl-1 dateAndStatusText">
                {spr.duedate}
              </div>
              <div className="col-5 col-md-2 col-lg-2 col-xl-2 dateAndStatusText">
                {spr.status}
              </div>
              <div className="col-2 col-md-1 col-lg-1 col-xl-1"></div>
            </div>
        ))):
        (all_sparrows
          .filter((user) => {
            console.log(user.priorityname);
            return props.pName && user.priorityname.startsWith(props.pName);
          })
          .map((spr) => (
            <div
              className="contentAllSpr"
              
            >
              <img
                className="col-2 col-md-1 col-lg-1 col-xl-1 priorityImage"
                src={spr.priority}
              ></img>
              <div className="col-10 col-md-3 col-lg-3 col-xl-3 titleText">
                {spr.title}
              </div>
              <div className="col-6 col-md-2 col-lg-2 col-xl-2 outcomeText">
                {spr.outcome}
              </div>
              <img
                className="col-6 col-md-2 col-lg-2 col-xl-2 fromtoImage"
                src={spr.fromto}
              ></img>
              <div className="col-5 col-md-1 col-lg-1 col-xl-1 dateAndStatusText">
                {spr.duedate}
              </div>
              <div className="col-5 col-md-2 col-lg-2 col-xl-2 dateAndStatusText">
                {spr.status}
              </div>
              <div className="col-2 col-md-1 col-lg-1 col-xl-1"></div>
            </div>
          )))}
      </div>
    </div>
  );
}

export default AllSparrows;
