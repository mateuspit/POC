"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const DATABASE_URL = process.env.DATABASE_URL;
const configDatabase = {
    connectionString: DATABASE_URL
};
if (process.env.MODE === "prod")
    configDatabase.ssl = true;
const pool = new pg_1.default.Pool(configDatabase);
pool.connect((err, client, done) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Connected to PostgreSQL database");
    done();
});
exports.default = pool;
