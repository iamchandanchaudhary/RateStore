import db from "../config/db.js";

const dbPromise = db.promise();

export const ensureStoreOwnersTable = async () => {
    const createSql = `CREATE TABLE IF NOT EXISTS store_owners (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        email VARCHAR(190) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        role VARCHAR(40) NOT NULL DEFAULT 'store-owner',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;

    await dbPromise.query(createSql);
};

export const findStoreOwnerByEmail = async (email) => {
    const [rows] = await dbPromise.query(
        "SELECT id, name, email, address, password_hash, role FROM store_owners WHERE email = ? LIMIT 1",
        [email]
    );

    return rows[0] || null;
};

export const createStoreOwner = async ({ name, email, address, passwordHash }) => {
    const [result] = await dbPromise.query(
        "INSERT INTO store_owners (name, email, address, password_hash, role) VALUES (?, ?, ?, ?, 'store-owner')",
        [name, email, address, passwordHash]
    );

    return result.insertId;
};
