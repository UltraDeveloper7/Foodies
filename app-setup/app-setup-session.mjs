// app-setup-session.mjs

import session from 'express-session';
import { randomBytes } from 'crypto';
import SQLiteStore from 'connect-sqlite3';

// Generate a strong secret key if not provided in the environment
const secretKey = process.env.SESSION_SECRET || randomBytes(64).toString('hex');

// Initialize the SQLiteStore
const SQLiteStore = SQLiteStore(session);

// Configure the session middleware
const foodiesSession = session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore({
        db: 'session.sqlite',
        dir: './model/sessions'
    }),
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
});

export default foodiesSession;
