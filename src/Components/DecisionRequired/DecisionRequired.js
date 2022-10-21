import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../DecisionRequired/DecisionRequired.css";

function DecisionRequired() {
  const [lgShow, setLgShow] = useState(true);

  return (
    <>
      <div style={{ justifyContent: "center" }}>
        <Modal
          size="lg"
          show={lgShow}
          backdrop="static"
          keyboard={false}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          className="wi-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Select Outcome
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="content">
              <div className="out-Text">Outcome</div>
              <input
                type="text"
                class="out-TextField"
                placeholder=""
                aria-describedby="basic-addon1"
              />
              {/* <div className="out-TextField">Decision Required</div> */}
              <div className="due-Text">Due Date</div>
              <input
                type="text"
                class="due-TextField"
                placeholder=""
                aria-describedby="basic-addon1"
              />
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
              <div class="input-group mb-3">
                <span class="input-group-text align" id="basic-addon1">
                  Request to
                </span>
                <input
                  type="text"
                  class="form-control align"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div>
              <input
                type="password"
                class="form-control postponebox"
                id="exampleInputPassword1"
                placeholder=""
              ></input>
            </div>
            <div>
              <input
                type="password"
                class="form-control contentbox"
                id="exampleInputPassword1"
                placeholder=""
              ></input>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text Link-img" id="basic-addon1"></span>
              <input
                type="text"
                class="form-control"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
            {/* <input
              type="password"
              class="form-control addlinkbox"
              id="exampleInputPassword1"
              placeholder=""
            ></input>
            <div className="add">
              <div className="link-img"></div>
            </div> */}
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default DecisionRequired;
