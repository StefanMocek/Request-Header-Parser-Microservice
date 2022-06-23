const express = require("express")
const router = express.Router()
const ip = require("ip")


router.get("/", (req,res)=>{
    let ipValue = ip.address();
    let jezyk = req.headers['accept-language'];
    let soft = req.headers['user-agent']
    console.log(ipValue, jezyk, soft)
    res.json({"ipaddress": ipValue, "language": jezyk, "software": soft})
  })

  module.exports = router