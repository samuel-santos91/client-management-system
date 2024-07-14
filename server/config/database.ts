import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
  host: process.env.MYSQL_ADDON_HOST,
  database: process.env.MYSQL_ADDON_DB,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD!,
};

const connection = mysql.createConnection(dbConfig);

const connectDB = (): Promise<mysql.Connection> => {
  return new Promise((resolve, reject) => {
    connection.connect((err) => {
      if (err) {
        return reject(err);
      }
      console.log("Connected to MySQL");
      resolve(connection);
    });
  });
};

export { connection, connectDB };
