import express from "express";
import path from "path";
import { requestTime, logger } from "./middlewares.js";

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
const app = express();

app.set("view engine", "ejs");
console.log("View Engine:", app.get("view engine"));

app.set("views", path.resolve(__dirname, "ejs"));
console.log("Views:", app.get("views"));

app.use(express.static(path.resolve(__dirname, "static")));
app.use(requestTime);
app.use(logger);

app.get("/", (req, res) => {
  res.render("index", { title: "Main Page", active: "main" });
});

app.get("/features", (req, res) => {
  res.render("features", { title: "Features Page", active:'features' });
});

// app.get("/", (req, res) => {
//   // res.send("<h1>Hellp Express!!!</h1>");
//   res.sendFile(path.resolve(__dirname, "static", "index.html"));
// });

// app.get("/features", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "static", "features.html"));
// });

// app.get("/download", (req, res) => {
//   // console.log(req.requestTime);
//   res.download(path.resolve(__dirname, "static", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});
