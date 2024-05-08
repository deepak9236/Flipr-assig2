// middleware/authMiddleware.js

import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  // Get token from header
  const token = req.header('Authorization');

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'Authorization denied' });
  }

  try {
    // Verify token
    // console.log(process.env.JWT_SECRET);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Add user from payload to request object
    req.user = decoded.user;
    console.log(req.user);
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

export default authMiddleware;
