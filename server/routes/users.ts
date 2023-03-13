import express from "express";

import mock from "../mock_large.json";

const router = express.Router();

router.get("/", function (req, res, next) {
  setTimeout(() => {
    return res.send(mock);
    // return res.status(404).send("Error has occurred");
  }, 1000);
});

export default router;
