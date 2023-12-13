const util = require("util");
const Multer = require("multer");
const maxSize = 500 * 1024 * 1024;

let processFile = Multer({
  storage: Multer.memoryStorage(),
  limits: { fileSize: maxSize },
}).single("video");

let processFileMiddleware = util.promisify(processFile);
module.exports = processFileMiddleware;
