import { createPool } from "mysql2/promise";

const caCert = process.env.db_ca_cert_base64
  ? Buffer.from(process.env.db_ca_cert_base64, "base64").toString("utf-8")
  : undefined;

const pool = createPool({
  host: process.env.db_localhost,
  user: process.env.db_user,
  password: process.env.db_password,
  port: parseInt(process.env.db_port || "3306"),
  database: process.env.db_name,
  ssl: caCert
    ? {
        ca: caCert,
        rejectUnauthorized: true,
      }
    : undefined,
});

export default pool;
