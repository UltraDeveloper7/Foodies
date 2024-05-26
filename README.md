# Foodies - Online Food Delivery Web App

## Overview
This repository contains the source code for **Foodies**, an online food delivery web application. The application allows users to browse menus, place orders, and manage their profiles. It is built using Node.js, Express, Handlebars for templating, and uses sessions for managing user authentication and state.

## Features
- User authentication and session management
- Menu browsing and food item details
- Order placement and order history
- User profile management
- Responsive design for mobile and desktop views

## Technologies Used
- Node.js
- Express.js
- Handlebars.js
- Express Sessions
- SQLite (for data storage)
- Bootstrap (for responsive design)

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed
- SQLite installed and running

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/UltraDeveloper7/Foodies.git
    cd Foodies
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```plaintext
    PORT=3000
    SESSION_SECRET=your-session-secret
    ```

## Running the Application
1. Start the application:
    ```bash
    npm start
    ```

2. Open your browser and go to `http://localhost:3000`.

## Directory Structure
```
Foodies/
├── .vscode/
│   └── ...
├── app-setup/
│   ├── app-setup-session.mjs
├── controller/
│   ├── cart-controller.mjs
│   ├── checkout-controller.mjs
│   ├── footer-pages-controller.mjs
│   ├── home-controller.mjs
│   ├── login-controller.mjs
│   ├── order-controller.mjs
│   ├── search-controller.mjs
│   ├── store-controller.mjs
│   └── user-profile-controller.mjs
├── docs/
│   └── ...
├── model/
│   ├── db/
│   │   └── ...
│   ├── sessions/
│   │   └── ...
│   └── model.mjs
├── node_modules/
│   └── ...
├── public/
│   ├── css/
│   │   └── ...
│   ├── images/
│   │   └── ...
│   └── javascript/
│       └── ...
├── routes/
│   └── foodies-routes.mjs
├── views/
│   ├── layouts/
│   │   └── main.hbs
│   ├── partials/
│   │   ├── cart-modal.hbs
│   │   ├── footer.hbs
│   │   ├── header.hbs
│   │   ├── login.hbs
│   │   ├── about.hbs
│   │   ├── checkout.hbs
│   │   ├── home.hbs
│   │   ├── privacy-policy.hbs
│   │   ├── search.hbs
│   │   ├── store.hbs
│   │   ├── terms-of-use.hbs
│   │   └── user-profile.hbs
├── .env
├── .hintrc
├── app.mjs
├── LICENSE
├── package-lock.json
├── package.json
├── Procfile
└── start.mjs

```

## Scripts
- `npm start`: Starts the application
- `npm run dev`: Starts the application with nodemon for development

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
If you have any questions or issues, please contact [your-email@example.com](mailto:konstantinostoutounas@gmail.com).

---

Thank you for using Foodies! Happy ordering!










