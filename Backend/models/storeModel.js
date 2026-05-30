import db from "../config/db.js";

const dbPromise = db.promise();

export const ensureStoresTable = async () => {
    const createSql = `CREATE TABLE IF NOT EXISTS stores (
        id INT AUTO_INCREMENT PRIMARY KEY,
        owner_id INT NOT NULL,
        name VARCHAR(150) NOT NULL,
        description TEXT NOT NULL,
        address VARCHAR(255) NOT NULL,
        category VARCHAR(120) NOT NULL,
        image_url VARCHAR(500) NOT NULL,
        image_public_id VARCHAR(200) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX owner_idx (owner_id)
    )`;

    await dbPromise.query(createSql);
};

export const createStore = async ({ ownerId, name, description, address, category, imageUrl, imagePublicId }) => {
    const [result] = await dbPromise.query(
        "INSERT INTO stores (owner_id, name, description, address, category, image_url, image_public_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [ownerId, name, description, address, category, imageUrl, imagePublicId]
    );

    return result.insertId;
};

export const listStoresByOwner = async (ownerId) => {
    const [rows] = await dbPromise.query(
        "SELECT id, owner_id, name, description, address, category, image_url, image_public_id, created_at, updated_at FROM stores WHERE owner_id = ? ORDER BY created_at DESC",
        [ownerId]
    );

    return rows;
};

export const listAllStores = async () => {
    const [rows] = await dbPromise.query(
        "SELECT id, owner_id, name, description, address, category, image_url, image_public_id, created_at, updated_at FROM stores ORDER BY created_at DESC"
    );

    return rows;
};

export const findStoreById = async (storeId) => {
    const [rows] = await dbPromise.query(
        "SELECT id, owner_id, name, description, address, category, image_url, image_public_id, created_at, updated_at FROM stores WHERE id = ? LIMIT 1",
        [storeId]
    );

    return rows[0] || null;
};

export const updateStoreById = async ({ storeId, ownerId, name, description, address, category, imageUrl, imagePublicId }) => {
    const [result] = await dbPromise.query(
        "UPDATE stores SET name = ?, description = ?, address = ?, category = ?, image_url = ?, image_public_id = ? WHERE id = ? AND owner_id = ?",
        [name, description, address, category, imageUrl, imagePublicId, storeId, ownerId]
    );

    return result.affectedRows;
};

export const deleteStoreById = async (storeId, ownerId) => {
    const [result] = await dbPromise.query(
        "DELETE FROM stores WHERE id = ? AND owner_id = ?",
        [storeId, ownerId]
    );

    return result.affectedRows;
};
