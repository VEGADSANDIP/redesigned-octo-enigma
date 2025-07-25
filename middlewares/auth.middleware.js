const jwt = require('jsonwebtoken');
const { Admin } = require('../models');

// Role definitions for clarity
const ROLES = {
    SUPPORT: 1,
    MANAGER: 2,
    SUPER_ADMIN: 3
};

// Middleware to authenticate admin by session_token (JWT)
async function authenticateAdmin(req, res, next) {
    try {
        // Defensive: ensure req.body and req.query are always objects
        const body = req.body || {};
        const query = req.query || {};
        const token = (req.headers['authorization']?.split(' ')[1])
            || req.headers['session_token']
            || body.session_token
            || query.session_token;
        if (!token) {
            return res.status(401).json({ message: 'No session token provided.' });
        }
        // Verify JWT
        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (jwtErr) {
            return res.status(401).json({ message: 'Invalid or expired session token.', error: jwtErr.message });
        }
        // Find admin in DB and check token matches
        const admin = await Admin.findOne({ where: { id: decoded.id, session_token: token } });
        if (!admin) {
            return res.status(401).json({ message: 'Invalid or expired session token.' });
        }
        // Attach admin info to request for downstream use
        req.admin = admin;
        next();
    } catch (err) {
        return res.status(500).json({ message: 'Authentication error', error: err.message });
    }
}

// Middleware to check for minimum required admin role
function authorizeAdminRole(minRole) {
    return (req, res, next) => {
        if (!req.admin) {
            return res.status(403).json({ message: 'Admin authentication required.' });
        }
        if (req.admin.role < minRole) {
            let roleName = 'Support';
            if (minRole === ROLES.MANAGER) roleName = 'Manager';
            if (minRole === ROLES.SUPER_ADMIN) roleName = 'Super Admin';
            return res.status(403).json({ message: `Insufficient permissions. ${roleName} access required.` });
        }
        next();
    };
}

// Export role constants and middleware
module.exports = {
    authenticateAdmin,
    authorizeAdminRole,
    ROLES
};
