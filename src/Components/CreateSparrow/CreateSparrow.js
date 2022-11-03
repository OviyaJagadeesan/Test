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

// import AllSparrows from "../AllSparrows/AllSparrows";
// import SentSparrows from "../SentSparrows/SentSparrows";

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

  return (
    <div className="whole-div">
      <div className="divider">
        <div className="header-div">
          <div type={Button} className="logo-button">
            LOGO
          </div>
          <div type={Image} className="help-img"></div>
        </div>
        <div className="tab-body">
          <div className="tab-left">
            <div className="tab-content-div">
              <div type="image" className="home-img"></div>
              <div type="text" className="home-text">
                Home
              </div>
            </div>
            <div className="tab-content-div">
              <div type="image" className="all-spr-img"></div>
              <div type="text" className="all-spr-text">
                All Sparrows
              </div>
            </div>
            <div className="new-spr" onClick={() => setLgShow(true)}>
              <div className="new-spr-img"></div>
              <div className="new-spr-text">New Sparrow</div>
            </div>
            <div className="tab-content-div">
              <div type="image" className="drop-down-img2"></div>
              <div type="text" className="left-content-text">
                Received
              </div>
            </div>
            <div className="tab-content-div">
              <div type="image" className="drop-down-img2"></div>
              <div type="text" className="left-content-text">
                Draft
              </div>
            </div>
            <div className="tab-content-div">
              <div type="image" className="drop-down-img2"></div>
              <div type="text" className="left-content-text">
                Send
              </div>
            </div>
            <div className="tab-content-div">
              <div type="image" className="drop-down-img2"></div>
              <div type="text" className="left-content-text">
                Closed
              </div>
            </div>
          </div>
          <div className="tab-right">
            <div className="tab-right-header">
              <div type="text">All Sparrows</div>
            </div>
            <div className="tab-right-body">
              <div className="search-bar">
                <div type="image" className="search-img"></div>
                <MDBCol md="6">
                  <div className="active-pink-3 active-pink-4 mb-4">
                    <input
                      className="form-control search-input"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </MDBCol>
              </div>
              <div className="drop-down-div">
                <div type="text" className="drop-down-text">
                  By Priority
                </div>
                <div type="image" className="drop-down-img"></div>
              </div>
              <div className="drop-down-div">
                <div className="drop-down-text">By Due Date</div>
                <div className="drop-down-img"></div>
              </div>
              <div className="drop-down-div">
                <div className="drop-down-text">By Status</div>
                <div className="drop-down-img"></div>
              </div>
              <div className="clr-filter" type="text">
                Clear Filters
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
              <AllSparrows/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ReceivedSparrows/>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <SentSparrows/>
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