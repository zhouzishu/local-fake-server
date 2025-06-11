const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/detail', (req, res) => {
  const { cid } = req.query;
  if (!courseDetail[cid]) {
    return res.status(404).json({ status: 404, message: "课程ID不存在" });
  }
  res.json({ status: 200, detail: courseDetail[cid][0],taskDetail: courseDetail[cid][1] });
});

app.get('/api01', (req, res) => {
  res.json({ status: 200, detail: finishDetail });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
