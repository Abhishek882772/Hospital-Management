import http from "http";
import next from "next";
import { initSocket } from "./socket/server.js";

const app = next({ dev: true });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    handle(req, res);
  });
  initSocket(server);

  server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
});
