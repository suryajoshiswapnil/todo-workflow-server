import app from "./app";

import logger from "./util/logger";

const server = app.listen(8000, function () {
  logger.info("hey there, the server has been started!!!");
});

export default server;
