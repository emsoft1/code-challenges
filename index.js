const express = require("express");
const app = express();
const compression = require("compression");
const ticker = require("./ticker");
const cookiesession = require("cookie-session");

const csurf = require("csurf");

app.use(compression());

app.use(express.json());
app.use(express.static("public"));

app.use(
    cookiesession({
        secret: "code for react",
        maxAge: 1000 * 60 * 60 * 24 * 14,
    })
);
app.use(csurf());
app.use(function (req, res, next) {
    res.cookie("mytoken", req.csrfToken());

    next();
});
if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/",
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}
//
app.get("/ticker/:lim.json", async function (req, res) {
    const data = await ticker.read(req.params.lim);

    res.json(data);
});

app.get("*", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function () {
    console.log("I'm listening.");
});
