import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.MYSQL_ADDON_HOST,
  database: process.env.MYSQL_ADDON_DB,
  username: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD!,
});

sequelize
  .sync()
  .then(() => {
    console.log("Tables synchronysed successfully");
  })
  .catch((error) => {
    console.log("Error synchronising tables", error);
  });

export default sequelize;
