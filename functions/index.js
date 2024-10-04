const express = require("express");
const functions = require("firebase-functions");
const cors = require("cors");
const usersRouter = require("./Routes/usersRouter");
const { errorHandler } = require("./error-handler");
const { getEndpoints, testEnd } = require("./Controllers/usersControllers");

app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.use("/api/users", usersRouter);
app.route("/api/endpoints").get(getEndpoints);
app.route("/api/test").get(testEnd);

app.use(errorHandler);
exports.app = functions.https.onRequest(app);
