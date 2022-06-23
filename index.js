
require('dotenv').config();
var express = require('express');
var app = express();
const ip = require("ip")

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));


app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/whoami", (req,res)=>{
  let ipValue = ip.address();
  let jezyk = req.headers['accept-language'];
  let soft = req.headers['user-agent']
  console.log(ipValue, jezyk, soft)
  res.json({"ipaddress": ipValue, "language": jezyk, "software": soft})
})


var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


// const parseIp = (req) =>
// req.headers['x-forwarded-for']?.split(',').shift()
// || req.socket?.remoteAddress

// console.log(parseIp(req))