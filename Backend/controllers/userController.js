import bcrypt from "bcryptjs";
import { createUser, findUserByEmail } from "../models/userModel.js";

const buildUserPayload = (user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    address: user.address,
    role: user.role || "user"
});

export const registerUser = async (req, res) => {
    try {
        const { name, email, password, address } = req.body || {};

        if (!name || !email || !password || !address) {
            return res.status(400).json({
                message: "Name, email, password, and address are required."
            });
        }

        const normalizedEmail = email.trim().toLowerCase();
        const existing = await findUserByEmail(normalizedEmail);

        if (existing) {
            return res.status(409).json({
                message: "Account already exists. Please sign in."
            });
        }

        const passwordHash = await bcrypt.hash(password, 12);
        const userId = await createUser({
            name: name.trim(),
            email: normalizedEmail,
            address: address.trim(),
            passwordHash
        });

        return res.status(201).json({
            user: buildUserPayload({
                id: userId,
                name: name.trim(),
                email: normalizedEmail,
                address: address.trim(),
                role: "user"
            })
        });
    } catch (error) {
        console.error("User registration failed:", error);
        return res.status(500).json({
            message: "Unable to create account right now."
        });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body || {};

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required."
            });
        }

        const normalizedEmail = email.trim().toLowerCase();
        const user = await findUserByEmail(normalizedEmail);

        if (!user) {
            return res.status(404).json({
                message: "Account not found. Please create an account."
            });
        }

        const passwordMatches = await bcrypt.compare(password, user.password_hash);

        if (!passwordMatches) {
            return res.status(401).json({
                message: "Invalid email or password."
            });
        }

        return res.status(200).json({
            user: buildUserPayload(user)
        });
    } catch (error) {
        console.error("User login failed:", error);
        return res.status(500).json({
            message: "Unable to sign in right now."
        });
    }
};
