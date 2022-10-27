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
      setErrorReq("Enter from address");
    } else if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(req)) {
      setErrorReq("Enter the proper email id");
    } else if (!title) {
      setErrorTitle("Enter Title");
    } else {
      navigate("/spr-list");
    }
  };

  const reqHandler = (t) => {
    setReq(t);
  };
  const titleHandler = (t) => {
    setTitle(t);
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
              <div className="out-Text">Outcome</div>
              <input type="text" className="out-TextField" />
              <div className="due-Text">Due Date</div>
              <div className="due-TextField">{date}</div>
              <div className="priority-Text">Priority</div>
              <div>
                <div className="high-Img"></div>
                <div className="high-Text">High</div>
              </div>
              <div>
                <div className="medium-Img"></div>
                <div className="medium-Text">Medium</div>
              </div>
              <div>
                <div className="low-Img"></div>
                <div className="low-Text">Low</div>
              </div>
            </div>
            <div>
              <div className="input-group mb-3">
                <span className="input-group-text align">Request to</span>
                <input
                  type="text"
                  className="form-control align"
                  onChangeText={(t) => reqHandler(t)}
                />
                <div>
                {ErrorReq != "" ? (
                  <div>{ErrorReq}</div>
                ) : null}
              </div>
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Add Title"
                onChangeText={(t) => titleHandler(t)}
                className="form-control postponebox"
              ></input>
              <div>
                {ErrorTitle != "" ? (
                  <div>{ErrorTitle}</div>
                ) : null}
              </div>
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
          </Modal.Body>
          <div className="modal-head-foot-bg-color">
            <div class="modal-footer foot-align">
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
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default DecisionRequired;
