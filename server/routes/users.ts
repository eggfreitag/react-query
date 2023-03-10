import express from "express";

import mock from "../mock_large.json";

const router = express.Router();

router.get("/", function (req, res, next) {
  res.send(mock);
});

export default router;
