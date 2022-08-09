const express = require("express");
const { basedir } = global;
const { ctrlWrap } = require(`${basedir}/helpers`);

const ctrl = require(`${basedir}/controllers/contacts`);

const router = express.Router();

router.get("/", ctrlWrap(ctrl.getAll));

router.get("/:contactId", ctrlWrap(ctrl.getById));

router.post("/", ctrlWrap(ctrl.add));

router.delete("/:contactId", ctrlWrap(ctrl.deleteById));

router.put("/:contactId", ctrlWrap(ctrl.update));

router.patch("/:contactId/favorite", ctrlWrap(ctrl.updateStatusContact));

module.exports = router;
