import app from "../app";
import {connectDB, disconnectDB} from "../utils/database";
import request from "supertest";
import dotenv from "dotenv";
dotenv.config();

let initialUserId: null = null;

beforeAll(async () => {
    await connectDB();

    const res = await request(app).post("/users").send({
      nome: "Teste",
      email: "teste@mail.com",
      idade: 30,
      genero: "masculino",
      telefone: "(00) 0000-0000",
      cpf: "123.456.789-10",
      rg: "1234567890",
    });

    initialUserId = res.body._id;
})

afterAll(async () => {
    await disconnectDB();
})

describe("GET /users", () => {
    it("should return all users", async () => {
        const res = await request(app).get("/users");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    })
})

describe("GET /users/:id", () => {
  it("should return a user", async () => {
    const res = await request(app).get(`/users/${initialUserId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.nome).toBe("Teste");
  });
});

describe("POST /users", () => {
  it("should create a product", async () => {
    const res = await request(app).post("/users").send({
      nome: "Teste 2",
      email: "teste2@mail.com",
      idade: 30,
      genero: "masculino",
      telefone: "(00) 0000-0000",
      cpf: "123.456.789-10",
      rg: "1234567890",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.nome).toBe("Teste 2");
  });
});

describe("PUT /users/:id", () => {
  it("should update a user", async () => {
    const res = await request(app)
      .put(`/users/${initialUserId}`)
      .send({
        nome: "Teste 1",
        idade: 25,
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.idade).toBe(25);
  });
});

describe("DELETE /users/:id", () => {
  it("should delete a user", async () => {
    const res = await request(app).delete(
      `/users/${initialUserId}`
    );
    expect(res.statusCode).toBe(200);
  });
});
