import express from "express";

import mock from "../mock_large.json";

const router = express.Router();

router.get("/", function (req, res, next) {
  setTimeout(() => {
    return res.send(mock);
  }, 3000);
});

export default router;
