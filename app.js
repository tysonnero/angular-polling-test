var express = require("express");

var app = express();
app.use(express.logger());

// Configuration

app.configure(function () {
    app.set('views', __dirname + '/app');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/app'));
    app.use(app.router);
    app.engine('html', require('ejs').renderFile);
});

app.post('/api/poll1', function (req, res) {
    setTimeout((function () {
        res.send(200)
    }), 2000);
});

app.post('/api/poll2', function (req, res) {
    setTimeout((function () {
        res.send(200)
    }), 2000);
});

app.post('/api/save', function (req, res) {
    res.send(200)
});

app.get('/*', function (req, res) {
    res.render('index.html')
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Listening on " + port);
});
