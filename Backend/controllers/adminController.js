import crypto from "crypto";
import { listUsers } from "../models/userModel.js";
import { listStoreOwners } from "../models/storeOwnerModel.js";

const safeEqual = (value, expected) => {
    if (typeof value !== "string" || typeof expected !== "string") {
        return false;
    }

    const valueBuf = Buffer.from(value);
    const expectedBuf = Buffer.from(expected);

    if (valueBuf.length !== expectedBuf.length) {
        return false;
    }

    return crypto.timingSafeEqual(valueBuf, expectedBuf);
};

export const loginAdmin = (req, res) => {
    const { email, password } = req.body || {};

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required."
        });
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
        return res.status(500).json({
            message: "Admin credentials are not configured."
        });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedAdminEmail = adminEmail.trim().toLowerCase();

    const emailMatches = safeEqual(normalizedEmail, normalizedAdminEmail);
    const passwordMatches = safeEqual(password, adminPassword);

    if (!emailMatches || !passwordMatches) {
        return res.status(401).json({
            message: "Invalid admin credentials."
        });
    }

    return res.status(200).json({
        user: {
            id: "admin",
            name: "Admin",
            email: normalizedAdminEmail,
            role: "admin"
        }
    });
};

const buildAdminUserPayload = (user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    address: user.address,
    role: user.role || "user",
    createdAt: user.created_at
});

const buildAdminStoreOwnerPayload = (owner) => ({
    id: owner.id,
    name: owner.name,
    email: owner.email,
    address: owner.address,
    role: owner.role || "store-owner",
    createdAt: owner.created_at
});

export const listRegisteredUsers = async (req, res) => {
    try {
        const users = await listUsers();

        return res.status(200).json({
            users: users.map(buildAdminUserPayload)
        });
    } catch (error) {
        console.error("Admin user list failed:", error);
        return res.status(500).json({
            message: "Unable to load users right now."
        });
    }
};

export const listRegisteredStoreOwners = async (req, res) => {
    try {
        const owners = await listStoreOwners();

        return res.status(200).json({
            storeOwners: owners.map(buildAdminStoreOwnerPayload)
        });
    } catch (error) {
        console.error("Admin store owner list failed:", error);
        return res.status(500).json({
            message: "Unable to load registered stores right now."
        });
    }
};
