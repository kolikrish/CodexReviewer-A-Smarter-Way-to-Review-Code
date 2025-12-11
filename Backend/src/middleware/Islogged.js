const jwt = require('jsonwebtoken');

const isLoggedIn = (req, res, next) => {
    // Check for token in Authorization header or cookie
    const authHeader = req.headers.authorization;
    let token;

    if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
    } else if (req.cookies && req.cookies.token) {
        token = req.cookies.token;
    }

    if (!token) {
        return res.status(401).json({ error: "No token provided, authorization denied." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // You can attach user info (like userId, email) to the request object
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid or expired token." });
    }
};

module.exports = isLoggedIn;