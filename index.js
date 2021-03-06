require('dotenv').config();
var express = require('express');
var app = express();
const whoamiRouter = require("./routes/whoami")

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));


app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.use("/api/whoami", whoamiRouter)


var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
