// controller/login-controller.mjs

import bcrypt from 'bcryptjs';
import { getUserByEmail, registerUser } from '../model/model.mjs';


export let doRegister = async function (req, res) {
    try {
        const { email, password, fname, lname, address, phone_number } = req.body;
        const registrationResult = await registerUser(email, password, fname, lname, address, phone_number);
        if (registrationResult.message) {
            return res.json({ success: true, message: registrationResult.message });
        } else {
            return res.json({ success: false });
        }
    } catch (error) {
        console.error('Registration error: ' + error);
        return res.json({ success: false, message: error.message });
    }
}

export let doLogin = async function (req, res) {
    console.log('Login attempt:', req.body);
    try {
        const { email, password } = req.body;
        const user = await getUserByEmail(email);
        console.log('User found:', user);

        if (!user || !user.password) {
            return res.json({ success: false, message: 'User not found' });
        }

        const match = await bcrypt.compare(password, user.password);
        console.log('Password match:', match);

        if (match) {
            req.session.isAuthenticated = true;
            req.session.user = {
                email: user.email,
                fname: user.fname,
                lname: user.lname,
                address: user.address,
                phone_number: user.phone_number
            };
            await req.session.save();
            console.log('Session saved:', req.session);
            return res.json({ success: true });
        } else {
            return res.json({ success: false, message: 'Incorrect password' });
        }
    } catch (error) {
        console.error('Login error:', error);
        return res.json({ success: false, message: 'Error during login' });
    }
};

export let doLogout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}

export function checkAuthenticated(req, res, next) {
    if (req.session.isAuthenticated) {
        return next();
    }
}

export function setAuthState(req, res, next) {
    console.log('Setting auth state:', req.session);
    res.locals.isAuthenticated = req.session.isAuthenticated || false;
    if (req.session.user) {
        res.locals.user = req.session.user;
    }
    console.log('AuthState:', res.locals.isAuthenticated, res.locals.user);
    next();
}

export async function renderLoginPage(req, res) {
    try {
        res.render('partials/login', {
            layout: false,
            renderCss: [
                '/css/login-styles.css'
            ]
        });
    } catch (error) {
        console.error('Error rendering login page:', error);
        res.status(500).send('Internal Server Error');
    }
};
