// 参考：https://zenn.dev/forcia_tech/articles/20201220_advent_calendar
import express from "express";
import next from "next";
var dev = process.env.NODE_ENV !== "production";
var app = next({ dev: dev });
var handle = app.getRequestHandler();
var port = process.env.PORT || 3000;
app.prepare().then(function () {
    var server = express();
    server.all("*", function (req, res) {
        return handle(req, res);
    });
    server.listen(port, function (err) {
        if (err)
            throw err;
        console.log("> Ready on localhost:".concat(port, " - env ").concat(process.env.NODE_ENV));
    });
});
