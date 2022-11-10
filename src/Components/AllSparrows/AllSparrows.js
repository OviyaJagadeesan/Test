import React, { useEffect, useState } from "react";
import "../AllSparrows/AllSparrows.css";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function AllSparrows(props) {
  const navigate = useNavigate();

  const [sprDetails, setSprDetails] = useState();

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  useEffect(() => {
    console.log("kaviya");
    axios
      .get("http://localhost:3002/sparrowdata")
      .then((res) => {
        setSprDetails(res.data);
      })
      .catch((err) => {
        console.log("e", err);
      });
  }, []);

  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <div className="row contentAllSprr">
        <div className="col-2 col-md-1 col-lg-1 col-xl-1 alignCss headerTitle">
          PRIORITY
        </div>
        <div className="col-10 col-md-3 col-lg-3 col-xl-3 alignCss headerTitle">
          TITLE
        </div>
        <div className="col-6 col-md-2 col-lg-2 col-xl-2 alignCss headerTitle">
          OUTCOME
        </div>
        <div className="col-6 col-md-2 col-lg-2 col-xl-2 alignCss headerTitle">
          FROM/TO
        </div>
        <div className="col-5 col-md-1 col-lg-1 col-xl-1 alignCss headerTitle">
          DUE DATE
        </div>
        <div className="col-5 col-md-2 col-lg-2 col-xl-2 alignCss headerTitle">
          STATUS
        </div>
        <div className="col-2 col-md-1 col-lg-1 col-xl-1 alignCss headerTitle"></div>
      </div>
      <div className="row sparrowCard">
        {!props.clicked
          ? sprDetails &&
            sprDetails.map((spr) => (
              <div>
                <div
                  className="contentAllSpr"
                  onClick={() => setModalShow(true)}
                >
                  <img
                    className="col-2 col-md-1 col-lg-1 col-xl-1 priorityImage"
                    src={spr.priority}
                  ></img>
                  <div className="col-10 col-md-3 col-lg-3 col-xl-3 alignCss">
                    {spr.title}
                  </div>
                  <div className="col-6 col-md-2 col-lg-2 col-xl-2 alignCss">
                    {spr.outcome}
                  </div>
                  <img
                    className="col-6 col-md-2 col-lg-2 col-xl-2 alignCss"
                    src={spr.fromto}
                  ></img>
                  <div className="col-5 col-md-1 col-lg-1 col-xl-1 alignCss">
                    {spr.duedate}
                  </div>
                  <div className="col-5 col-md-2 col-lg-2 col-xl-2 alignCss">
                    {spr.status}
                  </div>
                  <div className="col-2 col-md-1 col-lg-1 col-xl-1 alignCss"></div>
                </div>
              </div>
            ))
          : sprDetails &&
            sprDetails
              .filter((user) => {
                console.log(user.priorityname);
                return props.pName && user.priorityname.startsWith(props.pName);
              })
              .map((spr) => (
                <div className="contentAllSpr">
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
              ))}
      </div>
      <Modal
        size="xl"
        show={modalShow}
        backdrop="static"
        keyboard={false}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modalView">
            <div className="leftSideModal">
              <div className="leftSideHeader">
                <div className="leftHeader">
                  <label className="dateText">Due Date</label>
                  <div className="dateTextField">{date}</div>
                </div>
                <div className="rightHeader">
                  <button type="button" className="declineButton">
                    Decline
                  </button>
                  <button type="button" className="acceptButton">
                    Accept
                  </button>
                </div>
              </div>
              <hr
                style={{
                  background: "#6F38C5",
                  height: "2px",
                  border: "none",
                }}
              />
              <div className="leftSideTopBody">
                <div className="titleDiv">
                  Postpone Production Release to Jun 5th
                </div>
                <div className="contentDiv">
                  Team has identified high severity vulnerabilities in the
                  latest release package scheduled for release this week. After
                  reviewing the additional work required and resource
                  availability for the team to to perform regression and
                  production release, I am advising to schedule the GA for
                  version 3.12 to June 5th.
                </div>
              </div>
              <div className="leftSideBottomBody">
                <div className="commentsHeader">Comments</div>
                <div className="createCommentDiv"></div>
              </div>
              <div className="leftSideBottom">
                <div className="imageDiv">
                  <div className="slackLogo"></div>
                </div>
                <div className="imageDiv">
                  <div className="outlookLogo"></div>
                </div>
                <div className="imageDiv">
                  <div className="teamsLogo"></div>
                </div>
                <div className="imageDiv">
                  <div className="mailLogo"></div>
                </div>
                <div className="imageDiv">
                  <div className="jiraLogo"></div>
                </div>
              </div>
            </div>
            <div className="vline"></div>
            <div className="rightSideModal">
              <div className="rightSideHeader">
                <div>Details</div>
              </div>
              <div className="rightSideHeaderDetails">
                <div className="Details1">
                  <p className="textDetails">Priority</p>
                  <div className="imageTextDetails">
                    <div type="image" className="imagePriority"></div>
                    <p className="textPadding">High</p>
                  </div>
                </div>
                <div className="Details1">
                  <p className="textDetails">Outcome</p>
                  <div className="imageTextDetails">
                    <div type="image" className="imageOutcome"></div>
                    <p className="textPadding">DecisionRequired</p>
                  </div>
                </div>
                <div className="Details1">
                  <p className="textDetails">Status</p>
                  <div className="imageTextDetails">
                    <p className="statusDiv">Yet to start</p>
                  </div>
                </div>
                <div className="Details1">
                  <p className="textDetails">DueDate</p>
                  <div className="imageTextDetails">
                    <div className="dateDiv">
                      <div type="image" className="imageCalendar"></div>
                      <p>{date}</p>
                    </div>
                  </div>
                </div>
                <div className="Details1">
                  <p className="textDetails">Your Role</p>
                  <div className="imageTextDetails">
                    <div type="image" className="imageCalendar"></div>
                    <p>Watching</p>
                  </div>
                </div>
                <div className="Details1">
                  <p className="textDetails">Requestor</p>
                  <div className="imageTextDetails">
                    <div type="image" className="imageRequestor"></div>
                    <p>Johnathan Doe</p>
                  </div>
                </div>
                <div className="Details1">
                  <p className="textDetails">Received On</p>
                  <div className="imageTextDetails">
                    <div type="image" className="imageCalendar"></div>
                    <p>12:10 4/10/2020</p>
                  </div>
                </div>
              </div>
              <div className="rightSideBody">
                <p>Attachments (2)</p>
                <div>
                  https://t.sharepoint.com/:f:/r/sites/IT-SupplyChainAnalytics/Shared%20Documents/KPI%20Dashboard
                </div>
                <div>
                  https://t.sharepoint.com/:f:/r/sites/IT-SupplyChainAnalytics/Shared%20Documents/KPI%20DashboardDesign
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AllSparrows;
