import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.status(401).json({ success: false, message: 'Not Authorized, Login Again!' });
    }

    // Verify token
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // Ensure token_decode matches the expected admin email and password concatenation
    if (!token_decode || token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ success: false, message: 'Not Authorized, Login Again!' });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export default adminAuth;