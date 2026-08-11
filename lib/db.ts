import { createPool } from "mysql2/promise";

const pool = createPool({
  host: process.env.db_localhost,
  user: process.env.db_user,
  password: process.env.db_password,
  port: parseInt(process.env.db_port || "3306"),
  database: process.env.db_name,
});

export default pool;