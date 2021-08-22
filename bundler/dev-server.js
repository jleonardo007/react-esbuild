import { createServer } from "http";
import { readFile } from "fs/promises";

const DEV_SERVER_PORT = 3000;
const DEV_SERVER_URL = `http://localhost:${DEV_SERVER_PORT}`;
const PUBLIC_PATH = "public/index.html";

export default function startDevServer() {
  createServer(async (req, res) => {
    try {
      const publicPath = await readFile(PUBLIC_PATH, { encoding: "utf-8" });
      res.end(publicPath);
    } catch (error) {
      console.log(error);
    }
  }).listen(DEV_SERVER_PORT, () => {
    console.log(`Development server is now running at ${DEV_SERVER_URL}`);
  });
}
