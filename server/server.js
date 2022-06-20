const path = require("path");
const fs = require("fs");
const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { StaticRouter } = require("react-router-dom/server");

const App = require("../src/App").default;

const PORT = 8080;
const app = express();
const router = express.Router();
// const helmet = Helmet.renderStatic();

app.use("/build", express.static("build"));

console.log(StaticRouter);

app.get("*", (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  res.send(app);
  // const indexFile = path.resolve("./build/index.html");
  // fs.readFile(indexFile, "utf-8", (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     return res.status(500).send("oops!", "error!");
  //   }
  //   return res.send(
  //     data.replace(`<div id="root"></div>`, `<div id="root">${app}</div>`)
  //   );
  // });
});

router.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "10d" })
);

app.listen(PORT, () => {
  console.log("SSR port is :" + PORT);
});