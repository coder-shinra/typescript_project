import express from "express";
import serverConfig from "./configs/server.config";
const app = express();
app.listen(serverConfig.PORT, () => {
  console.log(`server is running at ${serverConfig.PORT}`);
});
