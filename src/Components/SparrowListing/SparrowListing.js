import React from "react";
import "../SparrowListing/SparrowListing.css";

function SparrowListing() {
  return (
    <div className="whole-div">
      <div className="spr-list-header">
        <div type="button" className="logo-btn">
          LOGO
        </div>
        <div type="image" className="help-img"></div>
      </div>
      <div className="spr-list-bottom">
        <div className="tab-left" type="button">
          <div className="home">
            <div type="image" className="home-img"></div>
            <div type="text" className="home-text">
              Home
            </div>
          </div>
          <div className="allsparrows">
            <div type="image" className="all-spr-img"></div>
            <div type="text" className="all-spr-text">
              All Sparrows
            </div>
          </div>
          <div className="new-spr">
            <div type="image" className="new-spr-img"></div>
            <div type="text" className="new-spr-text">
              New Sparrow
            </div>
          </div>
          <div className="received">
            <div type="image" className="received-img"></div>
            <div type="text" className="received-text">
              Received
            </div>
          </div>
          <div className="draft">
            <div type="image" className="draft-img"></div>
            <div type="text" className="draft-text">
              Draft
            </div>
          </div>
          <div className="sent">
            <div type="image" className="sent-img"></div>
            <div type="text" className="sent-text">
              Sent
            </div>
          </div>
          <div className="closed">
            <div type="image" className="closed-img"></div>
            <div type="text" className="closed-text">
              Closed
            </div>
          </div>
        </div>
        <div className="tab-right">
          <div className="all-spr-header-div">
            <div type="text" className="all-spr-header">
              All Sparrows
            </div>
          </div>
          <div>
            <div className="search-bar">
              <div type="image" className="search-bar-img"></div>
            </div>
            <div className="priority-drop-down-div">
              <div type="text" className="priority-drop-down-text">
                Draft
              </div>
              <div type="image" className="priority-drop-down-img"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SparrowListing;
