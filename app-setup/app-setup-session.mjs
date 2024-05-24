import session from 'express-session';
import { randomBytes } from 'crypto';

// Generate a strong secret key if not provided in the environment
const secretKey = process.env.SESSION_SECRET || randomBytes(64).toString('hex');

const foodiesSession = session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
});

export default foodiesSession;
