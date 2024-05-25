// app-setup-session.mjs

import session from 'express-session';
import { randomBytes } from 'crypto';
import connectSqlite3 from 'connect-sqlite3';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables only if not in production
if (process.env.NODE_ENV !== 'production') {
   console.log('loading .env');
   dotenv.config();
}

// Generate a strong secret key if not provided in the environment
const secretKey = process.env.SESSION_SECRET || randomBytes(64).toString('hex');

// Initialize the SQLiteStore
const SQLiteStore = connectSqlite3(session);

// Configure the session middleware
const foodiesSession = session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore({
        db: 'session.sqlite',
        dir: path.resolve('model/sessions') // Ensure this directory exists and is writable
    }),
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
});

export default foodiesSession;
