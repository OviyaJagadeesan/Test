import React, {useEffect,useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function ReceivedSparrows() {
  const navigate = useNavigate();

  const [recDetails, setRecDetails] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3002/receivedata")
      .then((res) => {
        setRecDetails(res.data);
      })
      .catch((err) => {
        console.log("e", err);
      });
  }, []);

  const onClick = (spr) => {
  };
  return (
    <div>
      <div className="row topHeader">
        <div className="col-2 col-md-2 col-lg-2 col-xl-1 headerTitle">PRIORITY</div>
        <div className="col-10 col-md-10 col-lg-6 col-xl-3 headerTitle">TITLE</div>
        <div className="col-6 col-md-6 col-lg-4 col-xl-2">OUTCOME</div>
        <div className="col-6 col-md-6 col-lg-2 col-xl-2">FROM/TO</div>
        <div className="col-5 col-md-5 col-lg-3 col-xl-1 headerTitle">DUE DATE</div>
        <div className="col-5 col-md-5 col-lg-4 col-xl-2 headerTitle">STATUS</div>
        <div className="col-2 col-md-2 col-lg-3 col-xl-1 headerTitle">NOTIFY</div>
      </div>
      <div className="row sparrowCard">
        {recDetails&&recDetails.map((spr) => (
          <div
            className="contentAllSpr"
            onClick={() => {
              onClick(spr);
            }}
          >
            <img className="col-2 col-md-2 col-lg-1 col-xl-1 priorityImage" src={spr.priority}></img>
            <div className="col-10 col-md-10 col-lg-3 titleText">{spr.title}</div>
            <div className="col-6 col-md-6 col-lg-2 col-xl-2 outcomeText">{spr.outcome}</div>
            <img className="col-6 col-md-6 col-lg-2 col-xl-1 fromtoImage" src={spr.fromto}></img>
            <div className="col-5 col-md-5 col-lg-1 col-xl-2 dateAndStatusText">{spr.duedate}</div>
            <div className="col-5 col-md-4 col-lg-2 col-xl-2 dateAndStatusText">{spr.status}</div>
            <div className="col-2 col-md-3 col-lg-1 col-xl-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default ReceivedSparrows;
