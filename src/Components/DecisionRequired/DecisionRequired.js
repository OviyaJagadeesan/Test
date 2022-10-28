import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../DecisionRequired/DecisionRequired.css";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";

function DecisionRequired() {
  const navigate = useNavigate();
  const [lgShow, setLgShow] = useState(true);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const [inputText, setInputText] = useState("");
  const [characterLimit] = useState(400);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const [req, setReq] = useState("");
  const [ErrorReq, setErrorReq] = useState("");
  const [title, setTitle] = useState("");
  const [ErrorTitle, setErrorTitle] = useState("");

  const SendButton = () => {
    setErrorReq("");
    setErrorTitle("");

    if (!req) {
      setErrorReq("Enter email address");
    } else if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(req)) {
      setErrorReq("Enter the proper email id");
    } else if (!title) {
      setErrorTitle("Enter Title");
    } else {
      navigate("/spr-list");
    }
  };

  return (
    <>
      <div style={{ justifyContent: "center" }}>
        <Modal
          size="lg"
          show={lgShow}
          backdrop="static"
          keyboard={false}
          onHide={() => setLgShow(false)}
          className="wi-modal"
        >
          <Modal.Header closeButton className="modal-head-foot-bg-color">
            <Modal.Title id="example-modal-sizes-title-lg">
              Create New Sparrow
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="content">
              <label className="out-Text">Outcome</label>
              <input type="text" className="out-TextField" />
              <label className="due-Text">Due Date</label>
              <div className="due-TextField">{date}</div>
              <label className="priority-Text">Priority</label>
              <div>
                <div className="high-Img"></div>
                <label className="high-Text">High</label>
              </div>
              <div>
                <div className="medium-Img"></div>
                <label className="medium-Text">Medium</label>
              </div>
              <div>
                <div className="low-Img"></div>
                <label className="low-Text">Low</label>
              </div>
            </div>
            <div>
              <div className="input-group mb-3">
                <span className="input-group-text align">Request to</span>
                <input
                  type="text"
                  className="form-control align"
                  onChange={(e) => {
                    setReq(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Add Title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="form-control postponebox"
              ></input>
            </div>
            <div>
              <textarea
                className="form-control contentbox"
                placeholder="Detail the ask"
                rows={3}
                value={inputText}
                onChange={handleChange}
                isInvalid={inputText.length > characterLimit}
              />
              <Badge
                className="mt-3"
                bg={`${
                  inputText.length > characterLimit ? "danger" : "primary"
                }`}
              >
                {inputText.length}/{characterLimit}
              </Badge>
            </div>
            <div className="input-group">
              <span className="input-group-text">
                <div className="link-img"></div>
              </span>
              <input
                type="text"
                placeholder="Add links"
                className="form-control link-text"
              ></input>
            </div>
            <div className="errorView">
              {ErrorReq !== "" ? <p>{ErrorReq}</p> : null}
              {ErrorTitle !== "" ? <p>{ErrorTitle}</p> : null}
            </div>
          </Modal.Body>
          <Modal.Footer className="modal-foot-bg-color">
            <div className="delete-img"></div>
            <div className="modal-foot-buttons">
            <button type="button" className="btn-save" disabled="modal">Save</button>
            <button type="button" className="btn-send" onClick={SendButton}>Send</button>
            </div>
            {/* <div className="modal-head-foot-bg-color">
                <div className="modal-foot-align-left">
                  <div className="delete-img"></div>
                </div>
                <div className="modal-foot-align-right">
                  <button type="button" class="btn-save" data-dismiss="modal">
                    Save
                  </button>
                  <button type="button" class="btn-send" onClick={SendButton}>
                    Send
                  </button>
                </div>
            </div> */}
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default DecisionRequired;
