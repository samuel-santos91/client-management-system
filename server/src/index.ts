import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors, { CorsOptions } from "cors";
import userRoutes from "./routes/user.routes";

interface CustomCorsOptions extends CorsOptions {
  headers?: string[];
}

dotenv.config();

const app: Express = express();

const corsOptions: CustomCorsOptions = {
  origin: "http://localhost:5173",
  methods: ["POST", "GET"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/users", userRoutes)

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
