const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./Sparrow.json");

app.use(cors());

const sparrowdata = data.all_sparrows;
const receivedata = data.received_sparrows;
const sentdata = data.sent_sparrows;

//For Getting all data's from all sparrows
app.get("/sparrowdata", (req, res) => {
  res.send(sparrowdata);
});

//For Getting all data's from received sparrows
app.get("/receivedata", (req, res) => {
  res.send(receivedata);
});

//For Getting all data's from sent sparrows
app.get("/sentdata", (req, res) => {
  res.send(sentdata);
});

//For getting allsparrow data's based on id
app.get("/sparrowdata/:id", (req, res) => {
  const sparrowIdData = sparrowdata.find(
    (d) => d.id === parseInt(req.params.id)
  );
  if (!sparrowIdData) res.status(404).send("Not Found");
  res.send(sparrowIdData);
});

//For getting received data's based on id
app.get("/receivedata/:id", (req, res) => {
  const receiveIdData = receivedata.find(
    (d) => d.id === parseInt(req.params.id)
  );
  if (!receiveIdData) res.status(404).send("Not Found");
  res.send(receiveIdData);
});

//For getting sent data's based on id
app.get("/sentdata/:id", (req, res) => {
  const sentIdData = sentdata.find((d) => d.id === parseInt(req.params.id));
  if (!sentIdData) res.status(404).send("Not Found");
  res.send(sentIdData);
});

//For getting allsparrow data's based on priorityname
app.get("/sparrowdata/priority/:priorityname", (req, res) => {
  let sparrowPrior = sparrowdata.filter(
    (e) => e.priorityname === req.params.priorityname
  );
  if (!sparrowPrior) res.status(404).send("Not Found");
  res.send(sparrowPrior);
});

//For getting receive data's based on priorityname
app.get("/receivedata/priority/:priorityname", (req, res) => {
  let receivePrior = receivedata.filter(
    (e) => e.priorityname === req.params.priorityname
  );
  if (!receivePrior) res.status(404).send("Not Found");
  res.send(receivePrior);
});

//For getting sent data's based on priorityname
app.get("/sentdata/priority/:priorityname", (req, res) => {
  let sentPrior = sentdata.filter(
    (e) => e.priorityname === req.params.priorityname
  );
  if (!sentPrior) res.status(404).send("Not Found");
  res.send(sentPrior);
});

//For getting allsprrow data's based on status
app.get("/sparrowdata/status/:status", (req, res) => {
  const sparrowStatus = sparrowdata.filter(
    (s) => s.status === req.params.status
  );
  if (!sparrowStatus) res.status(404).send("Not Found");
  res.send(sparrowStatus);
});

//For getting receive data's based on status
app.get("/receivedata/status/:status", (req, res) => {
  const receiveStatus = receivedata.filter(
    (s) => s.status === req.params.status
  );
  if (!receiveStatus) res.status(404).send("Not Found");
  res.send(receiveStatus);
});

//For getting sent data's based on status
app.get("/sentdata/status/:status", (req, res) => {
    const sentStatus = sentdata.filter(
      (s) => s.status === req.params.status
    );
    if (!sentStatus) res.status(404).send("Not Found");
    res.send(sentStatus);
  });
  
// app.get('/sparrowdata/:')
const PORT = 3002;
app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});
