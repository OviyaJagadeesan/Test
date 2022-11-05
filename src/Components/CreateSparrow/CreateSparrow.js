import { Button } from "bootstrap";
import React, { useState } from "react";
import "../CreateSparrow/CreateSparrow.css";
import { MDBCol } from "mdbreact";
import SentSparrows from "../SentSparrows/SentSparrows";
import ReceivedSparrows from "../ReceivedSparrows/ReceivedSparrows";
import AllSparrows from "../AllSparrows/AllSparrows";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Select from "react-select";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CreateSparrow() {
  const navigate = useNavigate();
  const [lgShow, setLgShow] = useState(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  const priorityoptions = [
    { value: "high", label: "High" },
    { value: "medium", label: "Medium" },
    { value: "low", label: "Low" },
  ];

  const duedateoptions = [
    { value: "today", label: "Today" },
    { value: "tomorrow", label: "Tomorrow" },
    { value: "thisweek", label: "This Week" },
    { value: "nextweek", label: "Next Week" },
    { value: "thismonth", label: "This Month" },
    { value: "nextmonth", label: "Next Month" },
  ];

  const statusoptions = [
    { value: "notstarted", label: "Not Started" },
    { value: "accepted", label: "Accepted" },
    { value: "declined", label: "Declined" },
    { value: "inprogress", label: "In Progress" },
    { value: "paused", label: "Paused" },
    { value: "blocked", label: "Blocked" },
    { value: "completed", label: "Completed" },
    { value: "draft", label: "Draft" },
  ];

  const [priorityName, setPriorityName] = useState();
  const priorityHandler = (e) => {
    setPriorityName(e.value);
  };

  return (
    <div className="wholeDiv">
      <div className="divider">
        <div className="headerDiv">
          <div type={Button} className="logoButton">
            LOGO
          </div>
          <div type={Image} className="helpImg"></div>
        </div>
        <div className="tabBody">
          <div className="tabLeft">
            <div className="tabContentDiv">
              <div type="image" className="homeImg"></div>
              <div type="text">Home</div>
            </div>
            <div className="tabContentDiv">
              <div type="image" className="allSprImg"></div>
              <div type="text">All Sparrows</div>
            </div>
            <div className="newSpr" onClick={() => setLgShow(true)}>
              <div className="newSprImg"></div>
              <div type="text">New Sparrow</div>
            </div>
            <div className="tabContentDiv">
              <div type="image" className="dropDownImg2"></div>
              <div type="text" className="leftContentText">
                Received
              </div>
            </div>
            <div className="tabContentDiv">
              <div type="image" className="dropDownImg2"></div>
              <div type="text" className="leftContentText">
                Draft
              </div>
            </div>
            <div className="tabContentDiv">
              <div type="image" className="dropDownImg2"></div>
              <div type="text" className="leftContentText">
                Send
              </div>
            </div>
            <div className="tabContentDiv">
              <div type="image" className="dropDownImg2"></div>
              <div type="text" className="leftContentText">
                Closed
              </div>
            </div>
          </div>
          <div className="tabRight">
            <div className="tabRightHeader">
              <div type="text">All Sparrows</div>
            </div>
            <div>
              <div className="card titleCard">
                <div className="searchBar">
                  <div className="searchImage"></div>
                  <input className="searchInput"></input>
                </div>
                <Select
                  options={priorityoptions}
                  placeholder="My Priority"
                  className="priorityBar"
                  onChange={priorityHandler}
                />
                <Select
                  options={duedateoptions}
                  placeholder="My Due Date"
                  className="dueDateBar"
                />
                <Select
                  options={statusoptions}
                  placeholder="My Status"
                  className="statusBar"
                />
                <div type="text" className="clearFilters">
                  Clear Filters
                </div>
              </div>
            </div>
            <Box className="sx">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="All" {...a11yProps(0)} />
                <Tab label="Received" {...a11yProps(1)} />
                <Tab label="Sent" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <AllSparrows />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ReceivedSparrows />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <SentSparrows />
            </TabPanel>
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
        <Modal.Header closeButton className="modalHeadFootBgColor">
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
