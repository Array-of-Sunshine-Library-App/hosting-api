const express = require("express");
const cors = require("cors");
const usersRouter = require("./Routes/usersRouter");
const { errorHandler } = require("./error-handler");
const { getEndpoints, testEnd } = require("./Controllers/usersControllers");

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.use("/api/users", usersRouter);
app.route("/api/endpoints").get(getEndpoints);
app.route("/api/test").get(testEnd);

app.use(errorHandler);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });