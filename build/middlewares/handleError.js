"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleError = (error, _req, res, _next) => {
    const { status, message } = error;
    res.status(status || 500).json({ message });
};
exports.default = handleError;
