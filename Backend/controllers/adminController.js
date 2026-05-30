import crypto from "crypto";

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
