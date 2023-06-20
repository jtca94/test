const request = require("supertest");
const app = require("../index");

describe("Operaciones CRUD de cafes", () => {
  it("GET /cafes", async () => {
    const response = await request(app).get("/cafes");
    expect(response.statusCode).toBe(200);
    console.log(response.body.length);
    expect(response.body.length).toBeGreaterThan(0);
  });
  it("DELETE /cafes/:id", async () => {
    const response = await request(app).get("/cafes/9999");
    expect(response.statusCode).toBe(404);
  });
  it("POST /cafes", async () => {
    const response = await request(app).post("/cafes").send({
      id: 100,
      nombre: "Cafe de prueba",
    });
    expect(response.statusCode).toBe(201);
  });

  it("PUT /cafes/:id", async () => {
    const response = await request(app).put("/cafes/101").send({
      id: 100,
      nombre: "Cafe de prueba modificado",
    });
    expect(response.statusCode).toBe(400);
  });
});
