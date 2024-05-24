// app.mjs

import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import routes from './routes/foodies-routes.mjs';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import foodiesSession from './app-setup/app-setup-session.mjs';
import { setAuthState } from './controller/login-controller.mjs';


// Load environment variables only if not in production
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const app = express();

// Use JSON middleware
app.use(express.json());

// Session activation
app.use(foodiesSession);

// Middleware to set authentication state
app.use(setAuthState);

app.get('*', (req, res, next) => {
    res.locals.currentPath = req.path;
    next();
});

// Set up Handlebars view engine
app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(path.resolve(), 'views', 'layouts'),
    partialsDir: path.join(path.resolve(), 'views', 'partials')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(path.resolve(), 'views'));

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', routes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});



export { app as foodies };