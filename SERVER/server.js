import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";


const PORT = 8080;
const app = express();
app.use(cors());

const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: dbConnectionString });

// my endpoints
app.get("/", (request, response) => {
    response.json(":)");
  });

  app.get("/bees", async (request, response) => {
    const result = await db.query("SELECT * FROM bees");
    response.json(result.rows);
  });

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));