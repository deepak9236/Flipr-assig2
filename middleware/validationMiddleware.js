// middleware/validationMiddleware.js

import { validationResult } from 'express-validator';

const validationMiddleware = (req, res, next) => {
  // Validate input data
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export default validationMiddleware;
