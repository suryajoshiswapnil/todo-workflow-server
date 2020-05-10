import request from "supertest";

import server from "../src";

describe("GET /random-url", () => {
  it("should return 404", (done) => {
    request(server).get("/reset").expect(404, done);
  });

  it("should close the server", (done) => {
    server.close(done);
  });
});
