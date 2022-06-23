const express = require("express")
const router = express.Router()

const whoAmIcont = require("../controllers/whoamiCon")


router.get("/", whoAmIcont)

  module.exports = router