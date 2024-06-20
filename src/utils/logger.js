import pino from "pino";
import { colorizerFactory } from "pino-pretty";

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "UTC:dd-mm-yyyy HH:MM:ss",
      //   ignore: "",
    },
  },
});

// logger.info("hello");

export default logger;
